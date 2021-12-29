<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\LocaleResource;
use App\Http\Traits\ResponseTrait;
use App\Models\Literal;
use App\Models\Locale;

class LocaleController extends Controller
{
    use ResponseTrait;
    public function all(){
        return $this->responseSuccessWithData(LocaleResource::collection(Locale::all()));
    }
}
