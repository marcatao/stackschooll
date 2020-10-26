<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Students;
use App\Models\User;
use App\Models\Parents;
use App\Models\Schools;

class ParentsController extends Controller
{
    public function index(){
        $school = Schools::where('user_id',auth()->user()->id)->first();
        $parents = Parents::where('school_id',$school->id)->get();
        return response()->json($parents);
    }

    public function store(Request $request){
        $validatedData = $request->validate([
            'user_id' => ['required','integer'],
            'student_id' => ['required','integer']
         ]);
        
        $school = Schools::where('user_id',auth()->user()->id)->first();

        $user = User::find($request->user_id);
        if(!$user) return response()->json(['message'=>'User id is invalid'],422);
        if($user->profile <> "responsavel") return response()->json(['message'=>'User profile must be a responsavel to set a parent'] ,422);

        $student = Students::find($request->student_id);
        if(!$student) return response()->json(['message'=>'Student id is invalid'],422);
        
        $parents = new Parents;
        $parents->user_id = $user->id;
        $parents->student_id = $student->id;
        $parents->school_id = $school->id;
        $parents->save();
        
        return response()->json($parents);
    }
}
