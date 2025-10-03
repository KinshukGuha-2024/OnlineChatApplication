<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {
        echo json_encode(auth()->user());
        return view('home.index');
    }
}
