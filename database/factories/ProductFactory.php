<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->randomElement([
                'Chips',
                'Soda',
                'Toothpaste',
                'Paper Towels',
                'Pens',
                'Candy',
                'Water',
                'Shampoo',
                'Detergent',
                'Notebooks',
            ]),
            'category' => $this->faker->randomElement(['Electronics', 'Clothing', 'Home Decor', 'Sports']),
            'price' => $this->faker->randomFloat(2, 1, 100),
            'quantity' => $this->faker->numberBetween(1, 50),
        ];
    }
}
