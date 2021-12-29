<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\StatisticController;
use App\Http\Api\CovidApi;
use App\Http\Controllers\Api\LocaleController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/test',function(){
    sleep(0.5);
    return [
        "data" => [
            "array" => [1,2,3,4,5,6,7],
            "name" => 'giorgijikia'
        ]
    ];
});
Route::post('/test',function(){
    return [
        "token" => "testtoken"
    ];
});


Route::get('/test/countries',function(){
    $covidApi = new CovidApi();
    dd($covidApi->getAllCountries());
});

Route::get('/test/country',function(){
    $covidApi = new CovidApi();
    dd($covidApi->getCountryStatistic("AF"));
});


Route::post('/login',[AuthController::class,'logIn']);
Route::post('/register',[AuthController::class,'register']);
Route::middleware('auth:sanctum')->group(function(){
    
    Route::put('/logout',[AuthController::class,'logOut']);


    Route::prefix('/statistic')->group(function(){
        Route::get('/all',[StatisticController::class,'all']);
        Route::get('/summary',[StatisticController::class,'summary']);
    });

    Route::prefix('/locale')->group(function(){
        Route::get('/all',[LocaleController::class,'all']);
    });
});