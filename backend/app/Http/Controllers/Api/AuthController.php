<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request){
        $request->validate([
            "username" => 'required|unique:users,username',
            "password" => 'required'
        ]);
    }


    public function logIn(Request $request){

    }

    public function logOut(Request $request){

    }
}
