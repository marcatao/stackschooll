<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use  \App\Models\Schools;
use  \App\Models\Schedules;
use  \App\Models\Students;

class StudentController extends Controller
{
    public function index(){
        $school = Schools::where('user_id',auth()->user()->id)->first();
        $students = Students::where('schools_id',$school->id)->get();
        return response()->json($students);
    }
    public function store(Request $request){

        $validatedData = $request->validate([
            'name' => ['required'],
            'address' => ['required']
         ]);

        $st = new Students;
        $st->name = $request->name;
        $st->profile_photo_path = "0";
        $st->address= $request->address;
        $st->schedule_id= $request->schedule_id;
        $school = Schools::where('user_id',auth()->user()->id)->first();
        $st->schools_id = $school->id;
  
        $st->save();
        return response()->json($st);
    }
}
