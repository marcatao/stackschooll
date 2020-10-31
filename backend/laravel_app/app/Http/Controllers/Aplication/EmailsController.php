<?php

namespace App\Http\Controllers\Aplication;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\WellcomeMail;

class EmailsController extends Controller
{
    public function test_email(){
        Mail::to('thiagomarcato@gmail.com')->send(new WellcomeMail());
        return "ola";
    }
}
