<?php

namespace Database\Seeders;

use App\Models\Literal;
use App\Models\Locale;
use Exception;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LocaleSeeder extends Seeder
{

    private $locales = [
        [
            "code" => "en",
            "description" => "english"
        ],
        [
            "code" => "ka",
            "description" => "georgian"
        ],
    ];

    private $literals = [
        "en" => [
            [
                "key" => "search",
                "translation" => "Search"
            ],
            [
                "key" => "ascending",
                "translation" => "Ascending"
            ],
            [
                "key" => "descending",
                "translation" => "Descending"
            ],
            [
                "key" => "country",
                "translation" => "Country"
            ],
            [
                "key" => "recovered",
                "translation" => "Recovered"
            ],
            [
                "key" => "death",
                "translation" => "Death"
            ],
            [
                "key" => "confirmed",
                "translation" => "Confirmed"
            ],
            
        ],
        "ka" => [
            [
                "key" => "search",
                "translation" => "ძიება"
            ],
            [
                "key" => "ascending",
                "translation" => "ზრდადობით"
            ],
            [
                "key" => "descending",
                "translation" => "კლებადობით"
            ],
            [
                "key" => "country",
                "translation" => "ქვეყანა"
            ],
            [
                "key" => "recovered",
                "translation" => "გამოჯანმრთელებული"
            ],
            [
                "key" => "death",
                "translation" => "გარდაცვლილი"
            ],
            [
                "key" => "confirmed",
                "translation" => "დადასტურებული"
            ],
            
        ],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::beginTransaction();
        try{
            foreach ($this->locales as $locale) {
                $tmp = Locale::create($locale);
                foreach($this->literals[$tmp->code] as $item){
                    $literal = new Literal();
                    $literal->locale_id = $tmp->id;
                    $literal->key = $item['key'];
                    $literal->translation = $item['translation'];
                    $literal->save();
                }
            }
            DB::commit();
            
        }catch(Exception $e){
            DB::rollBack();
            error_log($e->getMessage());
        }
        
       

    }
}
