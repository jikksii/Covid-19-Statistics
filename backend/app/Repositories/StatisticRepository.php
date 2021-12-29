<?php

namespace App\Repositories;

use App\Models\Statistic;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class StatisticRepository{
    private $statisticModel;
    public function __construct(Statistic $statisticModel)
    {
       $this->statisticModel = $statisticModel;
    }



    public function all($sortColumn = null ,$sortDirection = 'desc',$searchTerm){
        try{
            $all = $this->statisticModel->query()->when($sortColumn,function($query) use($sortColumn,$sortDirection){
                $query->orderBy($sortColumn,$sortDirection);
            })
            ->when($searchTerm,function($query) use($searchTerm){
                $search_query = '%'.$searchTerm.'%';
                $query->where('confirmed','like',$search_query)
                ->orWhere('confirmed','like',$search_query)
                ->orWhere('recovered','like',$search_query)
                ->orWhere('death','like',$search_query) 
                ->orWhereHas('country', function ($query) use ($search_query){
                    $query->where('name', 'like', $search_query);
                });
            })
            ->get();
            return $all;
        }catch(Exception $e){
            error_log($e->getMessage());
            return null;
        }
   }


   public function summary(){
       try{
            $queryResult = $this->statisticModel->query()
            ->getQuery()
            ->selectRaw("SUM(confirmed) as confirmed,SUM(recovered) as recovered , SUM(death) as death")->first();
            $result = [
                'confirmed' => intval($queryResult->confirmed),
                'recovered' => intval($queryResult->recovered),
                'death' => intval($queryResult->death),
            ];
            return $result;
       }catch(Exception $e){
           error_log($e->getMessage());
           return null;
       }
   }
}