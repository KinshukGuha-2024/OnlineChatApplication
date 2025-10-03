<?php

namespace App\Http\Controllers;

use App\Helpers\FileHelper;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\OtpRequest;
use App\Http\Requests\RegisterRequest;
use App\Mail\RegistrationOtpSend;
use App\Models\TempUser;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

use function App\Helpers\prx;

class AuthController extends Controller
{
    public function signin() {
        $title = "Signin";
        return view('auth.login')->with($title);
    } 

    public function login(LoginRequest $request) {
        
    }

    public function signup() {
        $title = "Signup";
        return view('auth.register')->with($title);
    }

    public function register(RegisterRequest $request) {
        if($request->is_google_registration == 1) {
            $google_json = json_decode($request->google_json);
            $user = User::where('email', $google_json->providerData[0]->email)->first();
            if($user){
                Auth::login($user);
                session()->flash('success-message', 'Logged in successfully.');
                return response()->json([
                    'message' => 'success',
                    'redirect_url' => route('home.index')
                ]);
            } else {
                $parts = explode(' ', $google_json->providerData[0]->displayName, 2);
                $first_name = $parts[0];
                $last_name = $parts[1] ?? '';
                $user = new User();
                $user->first_name = $first_name;
                $user->last_name = $last_name;
                $user->email = $google_json->providerData[0]->email;
    
                $url = $google_json->providerData[0]->photoURL;
                $contents = file_get_contents($url);
                $fileName = 'google_avatar_' . time() . '.jpg';
                $file_path = 'uploads/users/' . $fileName;
                $fullPath = public_path($file_path);
                $directory = dirname($fullPath);
                if (!File::exists($directory)) {
                    File::makeDirectory($directory, 0777, true);
                }
                file_put_contents(public_path($file_path), $contents);
                $user->profile_image = $file_path;
    
                $user->otp_verified_at = Carbon::now();
                $user->is_google_login = 'Yes';
                $user->raw_response = $request->google_json;
                $user->save();
                Auth::login($user);
                session()->flash('success-message', 'Your account has been created successfully.');
                return response()->json([
                    'message' => 'success',
                    'redirect_url' => route('home.index')
                ]);
            }
        } elseif($request->is_facebook_registration == 1) {
            $facebook_json = json_decode($request->facebook_json);
            prx($facebook_json);

        } else{
            $otp = strtoupper(Str::random(6));
            session(['password' => $request->password]);
            $user = new TempUser();
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->otp = $otp;
            $user->otp_valid_till = Carbon::now()->addMinutes(10);
            $user->save();
            $mail_data = [
                "name" => $request->first_name .' '. $request->last_name,
                "otp"  => $otp
            ];
            Mail::to($request->email)->send(new RegistrationOtpSend($mail_data));
            return response()->json([
                'message' => 'success',
                'data' => ["email" => $request->email],
                'redirect_url' => route('auth.verify-otp-page')
            ]);
        }
    }

    public function verifyOtpPage(Request $request) {
        $email = $request->email;
        $is_user = User::where('email', $email)->first();
        if(!empty($is_user)) {
            return redirect()->route('home.index');
        }
        return view('auth.otp-page', compact('email'));
    }

    public function verifyOtp(OtpRequest $request) {
        $temp_user = TempUser::where('email', $request->email)->orderByDesc('id')->first();
        if(!Carbon::now()->greaterThan($temp_user->otp_valid_till)) {
            if($temp_user->otp == $request->otp) {
                $user = new User();
                $user->first_name = $temp_user->first_name;
                $user->last_name = $temp_user->last_name;
                $user->email = $temp_user->email;
                $user->password = $temp_user->password;
                $user->otp_verified_at = now();
                $user->save();
                $temp_user->delete();

                $password = session('password');
                if(Auth::attempt(['email' => $request->email, 'password' => $password])) {
                    session()->flash('success-message', 'Your account has been created successfully.');
                    return response()->json([
                        'message' => 'success',
                        'redirect_url' => route('home.index')
                    ]);
                } else {
                    session()->flash('error-message','Something went wrong while creating your account.');
                    return response()->json([
                        'error' => true,
                        'message' => 'Something went wrong while creating your account.',
                    ]);
                } 
                
            } else {
                return response()->json([
                    'message' => "Your given otp is incorrect, please try again!!",
                    'errors' => [
                        "otp" => ["Your given otp is incorrect, please try again!!"]
                    ],
                    'error' => true
                ], 422);
            }
        } else {
            return response()->json([
                'message' => 'OTP has expired. Please request a new one.', 
                'errors' => [
                    "otp" => ['OTP has expired. Please request a new one.']
                ],
                'error' => true
            ], 422);
        }
    }

    public function resendOtp(Request $request) {
        $otp = strtoupper(Str::random(6));
        $user = TempUser::where('email', $request->email)->orderByDesc('id')->first();
        $user->otp = $otp;
        $user->otp_valid_till = Carbon::now()->addMinutes(10);
        $user->save();

        $mail_data = [
            "name" => $user->first_name .' '. $user->last_name,
            "otp"  => $otp
        ];
        Mail::to($request->email)->send(new RegistrationOtpSend($mail_data));
    }
}
