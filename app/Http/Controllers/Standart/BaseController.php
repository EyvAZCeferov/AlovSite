<?php

namespace App\Http\Controllers\Standart;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    public function index(){
        return view("welcome");
    }

    public function fallback(){
        return redirect("/notfound");
    }
}
