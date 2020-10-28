<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use  \App\Models\Schools;

class SchoolController extends Controller
{
  public function store(Request $request){

    $validatedData = $request->validate([
      'name_school' => ['required'],
      'address' => ['required'],
   ]);

    $schools = new Schools;  
    $schools->name_school =  $request->name_school;
    $schools->address =  $request->address;
    $schools->user_id =  auth()->user()->id;
    $schools->status = 'free';
    $schools->save();
    return response()->json($schools);
  }
}
