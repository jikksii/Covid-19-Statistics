<?php

namespace App\Console\Commands;

use App\Http\Api\CovidApi;
use App\Models\Country;
use App\Models\Statistic;
use Exception;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class FetchStatistics extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fetch:statistics';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetches country statistics';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(CovidApi $covidApi)
    {
        DB::beginTransaction();
        try{
            $countries = Country::all();
            foreach($countries as $country){
                $statistics = $covidApi->getCountryStatistic($country->code);

                //check if statistic already exists for this country and update
                $countyStatistic = $country->statistic;
                if($countyStatistic){
                    $countyStatistic->confirmed = $statistics->confirmed;
                    $countyStatistic->recovered = $statistics->recovered;
                    $countyStatistic->death = $statistics->deaths;
                    $countyStatistic->save();
                }else{
                    // else create new one
                    Statistic::create([
                        "country_id" => $country->id,
                        "confirmed" => $statistics->confirmed,
                        "recovered" => $statistics->recovered,
                        "death" => $statistics->deaths
                    ]);
                }
                sleep(1);
            }
            DB::commit();
            return 0;
        }catch(Exception $e){
            DB::rollBack();
            return $e->getMessage();
        }
    }
}
