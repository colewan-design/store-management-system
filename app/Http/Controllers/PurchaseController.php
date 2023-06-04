<?php

namespace App\Http\Controllers;

use App\Models\Purchase;
use Illuminate\Http\Request;

class PurchaseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $purchases = Purchase::all(['id','name', 'category', 'price','quantity']);
        return response()->json($purchases);
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
    
        // Create a new Purchase instance
        $purchase = new Purchase();
        $purchase->name = $name;
        $purchase->category = $category;
        $purchase->price = $price;
        $purchase->quantity = $quantity;
    
        // Save the purchase to the database
        $purchase->save();
    
        // Return a response indicating the success or failure of the operation
        return response()->json(['message' => 'Purchase created successfully'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function show(purchase $purchase)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function edit(purchase $purchase)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\purchase  $purchase
     * @return \Illuminate\Http\Response
     */

     public function update(Request $request, $id)
     {
         // Find the purchase by ID
         $purchase = Purchase::find($id);
         
         // Validate the request data
         $validatedData = $request->validate([
             'name' => 'required',
             'category' => 'required',
             'price' => 'required|numeric',
             'quantity' => 'required|integer'
         ]);
     
         // Update the purchase with the validated data
         $purchase->name = $validatedData['name'];
         $purchase->category = $validatedData['category'];
         $purchase->price = $validatedData['price'];
         $purchase->quantity = $validatedData['quantity'];
         $purchase->save();
     
         // Return a response indicating the success of the update
         return response()->json(['message' => 'Purchase updated successfully']);
     }
     
     
     

    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $purchase = Purchase::find($id);
    
        if (!$purchase) {
            return response()->json(['message' => 'Purchase not found'], 404);
        }
    
        $purchase->delete();
    
        return response()->json(['message' => 'Purchase deleted successfully']);
    }
    
}
