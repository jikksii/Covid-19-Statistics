<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
class CountryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'code' => $this->faker->countryCode(),
            'name' => json_encode([
                $this->faker->locale => $this->faker->country,
                $this->faker->locale => $this->faker->country,
            ])
        ];
    }
}
