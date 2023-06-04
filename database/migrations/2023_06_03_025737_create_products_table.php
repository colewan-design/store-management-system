<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id'); // Primary key using auto-incrementing integer
            $table->string('name');
            $table->string('category');
            $table->decimal('price', 8, 2); // Decimal column for price with 8 total digits and 2 decimal places
            $table->integer('quantity');
            $table->timestamps(); // Adds 'created_at' and 'updated_at' timestamp columns
            $table->softDeletes();
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
