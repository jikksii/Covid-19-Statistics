<?php

namespace App\Console\Commands;

use App\Http\Api\CovidApi;
use App\Models\Country;
use Exception;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class PopulateCountries extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'populate:countries';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Populates countries';

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
        $countires = $covidApi->getAllCountries();
        DB::beginTransaction();
        try{
            foreach($countires as $country){
                Country::create([
                    "code" => $country->code,
                    "name" => json_encode($country->name) 
                ]);
            }
            DB::commit();
        }catch(Exception $e){
            DB::rollBack();
            return $e->getMessage();
        }
        return 0;
    }
}
