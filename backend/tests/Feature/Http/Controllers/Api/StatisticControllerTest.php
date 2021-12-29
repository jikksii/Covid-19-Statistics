<?php

namespace Tests\Feature\Http\Controllers\Api;

use App\Models\Statistic;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Collection;
use Tests\TestCase;

class StatisticControllerTest extends TestCase
{
    use DatabaseMigrations;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_all_route_protected()
    {
        $response = $this->get('api/statistic/all',['Accept' => 'application/json']);

        $response->assertUnauthorized();
    }

    public function test_all_route_responses_valid_data()
    {

        $count = 10;
        $statistics = $this->create_statistics($count);
        $user = User::factory()->create();
        $token = $user->createToken('test')->plainTextToken;
        $response = $this->get('api/statistic/all',[
            'Accept' => 'application/json',
            'Authorization' => 'Bearer '. $token
        ]);
        $response->assertStatus(200);
        $response->assertJsonCount($count, "data");



        // check for every possible sort
        $sortColumns = ['confirmed','recovered','death'];
        $sortDirections = ['desc','asc'];
        foreach($sortColumns as $sortColumn){
            foreach($sortDirections as $sortDir){
                $response = $this->get('api/statistic/all',[
                    'Accept' => 'application/json',
                    'Authorization' => 'Bearer '. $token,
                    'sortColumn' => $sortColumn,
                    'sortDirection' => $sortDir
                ]);
                $sorted =$this->sort($statistics,$sortColumn,$sortDir);
                $responseData = $response->json('data');
                $this->assertEquals(true,$this->equal($responseData,$sorted));
            }
        }

    }



    public function test_summary_route_is_protected(){
        $response = $this->get('api/statistic/summary',['Accept' => 'application/json']);
        $response->assertUnauthorized();
    }

    public function test_summary_route_valid_data(){
        $response = $this->get('api/statistic/summary',['Accept' => 'application/json']);
        $response->assertJsonStructure([
            'data' => [
                'confirmed',
                'recovered',
                'death'
            ]
        ]);

        $count = 30;
        $statistics = $this->create_statistics($count);
        $response = $this->get('api/statistic/summary',['Accept' => 'application/json']);


        $summary = $statistics->sum(['confirmed','recovered','death']);
        $ResponseData = $response->json('data');


        $this->assertEquals(true,$this->equalSummary($ResponseData,$summary));

    }




    private function create_statistics($count){
        $statistics =[]; 
        for($i = 0 ; $i < $count ; $i++){
            $statistics[] = Statistic::factory()->create();
        }
        return collect($statistics);
    }

    private function sort(Collection $data,$column,$dir){
        $sorted = $data->sortBy($column,SORT_REGULAR,$dir == 'desc');
        return $sorted;
    }


    private function equal(Collection $coll1 ,Collection $coll2){
        foreach($coll1 as  $key => $val){
            if($val->id !== $coll2[$key]->id){
                return false;
            }
        }
        return true;
    }

    private function equalSummary($data1, $data2){
        foreach($data1 as $key => $value){
            if($value !== $data2[$key]) return false;
        }
        return true;
    }
}
