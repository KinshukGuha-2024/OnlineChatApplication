<?php

namespace App\Http\Requests;

use App\Helpers\MessageHelper;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rules\Password;

class LoginRequest extends FormRequest
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
            'email'        => 'required|email:strict',
            'password' => ['required', 'string', Password::min(6)],
            'device_token' => 'nullable',
        ];
    }

    protected function failedValidation(Validator $validator){        
        throw new HttpResponseException(response()->json(['message'=>MessageHelper::validationErrorsToString($validator->errors()), 'errors' => $validator->errors()], 422));
    }
}
