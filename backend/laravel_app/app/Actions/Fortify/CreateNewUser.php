<?php

namespace App\Actions\Fortify;
 
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
      
        Validator::make($input, [
            'cpf_cnpj' => ['required'],
            'user_name' => ['required'],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'profile' => ['required'],
            'password' => $this->passwordRules(),
            'address' => ['required'],
        ])->validate();
     
        return User::create([
            'cpf_cnpj' => $input['cpf_cnpj'],
            'user_name' => $input['user_name'],
            'name' => $input['name'],
            'email' => $input['email'],
            'profile' => $input['profile'],
            'password' => Hash::make($input['password']),
            'address' => $input['address'],
        ]);
    }
}
