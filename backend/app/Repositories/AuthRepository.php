<?php

namespace App\Repositories;

use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash;

class AuthRepository{
   
    private $userModel;
    public function __construct(User $userModel)
   {
       $this->userModel = $userModel;
   }


   public function logiIn($credentials){
        $user = $this->userModel->where('username',$credentials["username"])->first();
        if(!Hash::check($credentials["password"],$user->password)){
            return null;
        }
        $token = $user->createToken("myAppToken")->plainTextToken;
        return $token;
   }



   public function logOut($user){
        try{
            $user->currentAccessToken()->delete();
            return true;
        }catch (Exception $e){
            error_log($e->getMessage());
            return false;
        }
   }


   public function register($credentials){
        try{
            $user = $this->userModel->create([
                "username" => $credentials["username"],
                "password" => bcrypt($credentials["password"]),
            ]);
            $token = $user->createToken('myAppToken')->plainTextToken;
            return $token;
        }catch(Exception $e){
            error_log($e->getMessage());
            return null;
        }
   }
}