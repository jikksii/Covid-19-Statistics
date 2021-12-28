<?php

namespace App\Http\Traits;

/**
 * 
 */
trait ResponseTrait
{
    public function responseCreatedSuccessfully(){
        return response()->json([],201);
    }

    public function responseUpdatedSuccessfully(){
        return response()->json([],204);
    }

    public function responseDeletedSuccessfully(){
        return response()->json([],204);
    }

    public function responseServiceUnavailable(){
        return response()->json([],503);
    }

    public function responseSuccessWithData($data){
        return response()->json([
            "data" => $data
        ],200);
    }
}
