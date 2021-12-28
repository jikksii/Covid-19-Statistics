<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLiteralsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('literals', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('locale_id');
            $table->foreign('locale_id')->references('id')->on('locales');
            $table->string('key');
            $table->string('translation');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('literals');
    }
}
