<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Clear existing records from the table
        DB::table('categories')->truncate();

        // Seed the categories table
        DB::table('categories')->insert([
            [
                'parent_id' => 0,
                'title' => 'Category 1',
                'slug' => 'category-1',
                'status' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'parent_id' => 0,
                'title' => 'Category 2',
                'slug' => 'category-2',
                'status' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more category records as needed
        ]);
    }
}
