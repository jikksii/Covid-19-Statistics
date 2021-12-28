<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Http\Traits\ResponseTrait;
use App\Repositories\AuthRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    use ResponseTrait;
    private $repository;
    public function __construct(AuthRepository $authRepository)
   {
       $this->repository = $authRepository;
   }

    public function register(Request $request){
        $request->validate([
            "username" => 'required|unique:users,username',
            "password" => 'required'
        ]);

        $token = $this->repository->register($request->all());
        if($token){
            return $this->responseCreatedSuccessfully([
                "token" => $token
            ]);
        }
        return $this->responseServiceUnavailable();
    }


    public function logIn(Request $request){
        $request->validate([
            "username" => 'required|exists:users,username',
            "password" => 'required'
        ]);

        $token = $this->repository->logiIn($request->all());
        if($token){
            return $this->responseSuccessWithData([
                "token" => $token
            ]);
        }
        return $this->responseServiceUnavailable();
    }

    public function logOut(Request $request){
        $user = Auth::user();
        $logedOut = $this->repository->logOut($user);
        if($logedOut){
            return $this->responseUpdatedSuccessfully();
        }
        return $this->responseServiceUnavailable();
    }
}
