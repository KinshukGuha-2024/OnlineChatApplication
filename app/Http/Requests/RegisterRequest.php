<?php

namespace App\Http\Requests;

use App\Helpers\MessageHelper;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required_unless:is_google_registration,1',
            "last_name"  => 'required_unless:is_google_registration,1',
            "email"      => ['required_unless:is_google_registration,1','email:strict','unique:users,email'],
            "password"   => "required_unless:is_google_registration,1|min:7|max:16|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,16}$/",
            'confirm_password' => 'required_unless:is_google_registration,1|same:password',
        ];
    }

    public function messages() {
        return [
            'first_name'                => "Please provide your first name",
            'last_name'                 => "Please provide your last name",
            'email'                     => "Please provide an valid email address.",
            'email.unique'              => "This email address already exists in our system.",
            'password'                  => "Password must be 7–16 characters and include at least one uppercase letter, one lowercase letter, and one number.",
            'confirm_password.same'     => "Password and confirm password does not match."
        ];
    }

    protected function failedValidation(Validator $validator){        
        throw new HttpResponseException(response()->json(['message'=>MessageHelper::validationErrorsToString($validator->errors()), 'errors' => $validator->errors()], 422));
    }
}
