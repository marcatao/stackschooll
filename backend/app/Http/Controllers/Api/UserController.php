<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
  
    public function store(Request $request){
        $new_user = new \App\Actions\Fortify\CreateNewUser;
        $stored = $new_user->create($request->only(['cpf_cnpj','user_name','name','email','profile','password','address']));
        if($stored) return response()->json($stored);
        return response()->json('Ainda precisamos tratar esses erros');
    }

    public function login_token(Request $request){
        $request->validate(['email' => 'required|email','password' => 'required','device_name' => 'required',]);
        $user = User::where('email', $request->email)->first();
        if (! $user || ! Hash::check($request->password, $user->password)) {
            return response()->json(['Message: The provided credentials are incorrect.'],203);
        }
        return $user->createToken($request->device_name)->plainTextToken;
    }

    
    public function profile(Request $request){
        return auth()->user();
    }
}
