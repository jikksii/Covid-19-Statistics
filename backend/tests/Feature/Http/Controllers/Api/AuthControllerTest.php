<?php

namespace Tests\Feature\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class AuthControllerTest extends TestCase
{

    use DatabaseMigrations;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_register_parameter_validation()
    {
        $response = $this->post('api/register',[
            "password" => "test"
        ],['Accept' => 'application/json']);
        $response->assertUnprocessable();

        $response = $this->post('api/register',[
            "username" => "test"
        ],['Accept' => 'application/json']);
        $response->assertUnprocessable();



        $user = User::factory()->create();
        $response = $this->post('api/register',[
            "username" => $user->username,
            "password" => "test"
        ],['Accept' => 'application/json']);
        $response->assertUnprocessable();

        
    }


    public function test_register_can_register_user(){
        $response = $this->post('api/register',[
            "username" => "giorgi",
            "password" => "12345678"
        ],['Accept' => 'application/json']);

        $response->assertCreated();
        $this->assertDatabaseHas('users',[
            "username" => "giorgi"
        ]);
    }

    public function test_can_log_out(){
        $user = User::factory()->create();
        $token = $user->createToken('test')->plainTextToken;
        $response = $this->put('api/logout',[],[
            'Accept' => 'application/json',
            'Authorization' => 'Bearer '. $token
        ]);
        $response->assertStatus(204);
    }

    public function test_login_parameter_validation()
    {
        $response = $this->post('api/login',[
            "password" => "test"
        ],['Accept' => 'application/json']);
        $response->assertUnprocessable();

        $response = $this->post('api/login',[
            "username" => "test"
        ],['Accept' => 'application/json']);
        $response->assertUnprocessable();

    }

    public function test_can_login()
    {
        $user = User::factory()->create();
        $response = $this->post('api/login',[
            "username" => $user->username,
            "password" => "password"
        ],[
            'Accept' => 'application/json',
        ]);
        $response->assertStatus(200);

    }
}
