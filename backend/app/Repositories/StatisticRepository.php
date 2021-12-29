<?php

namespace App\Repositories;

use App\Models\Statistic;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash;

class StatisticRepository{
    private $statisticModel;
    public function __construct(Statistic $statisticModel)
    {
       $this->statisticModel = $statisticModel;
    }



    public function all($sortColumn = null ,$sortDirection = 'desc'){
        try{
            $all = $this->statisticModel->query()->when($sortColumn,function($query) use($sortColumn,$sortDirection){
                $query->orderBy($sortColumn,$sortDirection);
            })->get();
            return $all;
        }catch(Exception $e){
            error_log($e->getMessage());
        }
   }
}