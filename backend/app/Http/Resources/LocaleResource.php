<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;

class LocaleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        $literals = $this->literals;

        $responseLiterals  = new Collection();
        foreach($literals  as $literal){
            $responseLiterals->put($literal->key,$literal->translation);
        }
        return [
            "id" => $this->id,
            "code" => $this->code,
            "description" => $this->description,
            "literals" => $responseLiterals
        ];
    }
}
