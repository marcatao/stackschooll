<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use  \App\Models\Schools;
use  \App\Models\Schedules;

class ScheduleController extends Controller
{
    public function index(){
        $school = Schools::where('user_id',auth()->user()->id)->first();
        $schedules = Schedules::where('schools_id',$school->id)->get();
        return response()->json($schedules);
    }

    public function store(Request $request){

        $validatedData = $request->validate([
            'description' => ['required'],
            'week_day' => ['required'],
            'start_time' => ['required','integer'],
            'end_time' => ['required','integer']
         ]);


        $sc = new Schedules;
        $sc->description = $request->description;
        $sc->week_day = $request->week_day;
        $sc->start_time = $request->start_time;
        $sc->end_time = $request->end_time;
        $school = Schools::where('user_id',auth()->user()->id)->first();
        $sc->schools_id = $school->id;
        $sc->save();
        return response()->json($sc);
      }
}
