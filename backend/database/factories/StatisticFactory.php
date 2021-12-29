<?php

namespace Database\Factories;

use App\Models\Country;
use Illuminate\Database\Eloquent\Factories\Factory;

class StatisticFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $country = Country::factory()->create();
        return [
            'country_id' => $country->id,
            'confirmed' => rand(), // password
            'recovered' => rand(),
            "death" => rand()
        ];
    }
}
