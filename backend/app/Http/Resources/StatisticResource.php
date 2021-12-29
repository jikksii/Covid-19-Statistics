<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StatisticResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "country" => new CountryResource($this->country),
            "country_id" => $this->country_id,
            "confirmed" => $this->confirmed,
            "recovered" => $this->recovered,
            "death" => $this->death
        ];
    }
}
