<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ScheduleSchool extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedule_school', function (Blueprint $table) {
            $table->id();
            $table->string('description');
            $table->integer('week_day');
            $table->integer('start_time');
            $table->integer('end_time');
            $table->foreignId('schools_id')->constrained('schools');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
