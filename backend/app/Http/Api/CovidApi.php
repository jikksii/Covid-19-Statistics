<?php
namespace App\Http\Api;

use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class CovidApi{
    private $client;
    private $uri;
    private $options;
    function __construct() {
       $this->client = new Client();
       $this->uri     = config('covid.apiUrl');
       $this->options = [
            'headers'         => [
                'accept' => 'application/json'
            ],
           'timeout' => 15,
       ];
    }


    public function getAllCountries(){
        try{
            $response = $this->client->get($this->uri.'/countries',$this->options);
            return json_decode($response->getBody()->getContents());
        }
        catch(RequestException $e){
            error_log($e->getMessage());
            return null;
        }
        catch(Exception $e){
            error_log($e->getMessage());
            return null;
        }
    }

    public function getCountryStatistic($code){ 
        try{
            $response = $this->client->post($this->uri.'/get-country-statistics', $this->options + [
                'form_params' => [
                    'code' => $code
                ]
            ]);
            return json_decode($response->getBody()->getContents());
        }catch(RequestException $e){
            error_log($e->getMessage());
            return null;
        }catch(Exception $e){
            error_log($e->getMessage());
            return null;
        }
    }
}