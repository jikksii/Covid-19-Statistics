<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Traits\ResponseTrait;
use App\Repositories\StatisticRepository;
use Illuminate\Http\Request;

class StatisticController extends Controller
{

    use ResponseTrait;
    private $repository;
    public function __construct(StatisticRepository $statisticRepository)
    {
       $this->repository = $statisticRepository;
    }
    public function all(Request $request){
        $data = $this->repository->all($request->input('sortColumn',null),$request->input('sortDirection',null));
        if($data){
            return $this->responseSuccessWithData($data); 
        }
        return $this->responseServiceUnavailable();
        
    }


    public function summary(Request $request){
        $data = $this->repository->summary();
        if($data){
            return $this->responseSuccessWithData($data); 
        }
        return $this->responseServiceUnavailable();
    }
}

