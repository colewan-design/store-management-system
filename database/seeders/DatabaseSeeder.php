<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
         // Clear existing records from the table
         \App\Models\Category::factory(10)->create();
         \App\Models\Purchase::factory(10)->create();
    }
}
