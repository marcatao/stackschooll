<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [App\Http\Controllers\Api\UserController::class,'login_token']);
Route::post('/register', [App\Http\Controllers\Api\UserController::class,'store']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [App\Http\Controllers\Api\UserController::class,'profile']);

    Route::post('/school', [App\Http\Controllers\Api\SchoolController::class,'store']);

    Route::get('/schedule', [App\Http\Controllers\Api\ScheduleController::class,'index']);
    Route::post('/schedule', [App\Http\Controllers\Api\ScheduleController::class,'store']);

    Route::get('/student', [App\Http\Controllers\Api\StudentController::class,'index']);
    Route::post('/student', [App\Http\Controllers\Api\StudentController::class,'store']);
});


