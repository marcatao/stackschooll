<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [App\Http\Controllers\Api\UserController::class,'login_token']);
Route::post('/register', [App\Http\Controllers\Api\UserController::class,'store']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [App\Http\Controllers\Api\UserController::class,'profile']);

    Route::post('/school', [App\Http\Controllers\Api\SchoolController::class,'store']);
});


