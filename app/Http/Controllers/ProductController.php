<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $products = Product::all(['id','name', 'category', 'price','quantity']);
        return response()->json($products);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
    
        // You can access the individual fields like:
        
        $name = $data['name'];
        $category = $data['category'];
        $price = $data['price'];
        $quantity = $data['quantity'];
    
        // Create a new Product instance
        $product = new Product();
        $product->name = $name;
        $product->category = $category;
        $product->price = $price;
        $product->quantity = $quantity;
    
        // Save the product to the database
        $product->save();
    
        // Return a response indicating the success or failure of the operation
        return response()->json(['message' => 'Product created successfully'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\product  $product
     * @return \Illuminate\Http\Response
     */

     public function update(Request $request, $id)
     {
         // Find the product by ID
         $product = Product::find($id);
         
         // Validate the request data
         $validatedData = $request->validate([
             'name' => 'required',
             'category' => 'required',
             'price' => 'required|numeric',
             'quantity' => 'required|integer'
         ]);
     
         // Update the product with the validated data
         $product->name = $validatedData['name'];
         $product->category = $validatedData['category'];
         $product->price = $validatedData['price'];
         $product->quantity = $validatedData['quantity'];
         $product->save();
     
         // Return a response indicating the success of the update
         return response()->json(['message' => 'Product updated successfully']);
     }
     
     
     

    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);
    
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
    
        $product->delete();
    
        return response()->json(['message' => 'Product deleted successfully']);
    }
    
}
