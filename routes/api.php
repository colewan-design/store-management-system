<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PurchaseController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/category', [CategoryController::class, 'index']);
Route::post('/category/create', [CategoryController::class, 'store']);
Route::put('/category/update/{id}', [CategoryController::class, 'update']);
Route::delete('/category/delete/{id}', [CategoryController::class, 'destroy']);

Route::get('/product', [ProductController::class, 'index']);
Route::post('/product/create', [ProductController::class, 'store']);
Route::put('/product/update/{id}', [ProductController::class, 'update']);
Route::delete('/product/delete/{id}', [ProductController::class, 'destroy']);

Route::get('/purchase', [PurchaseController::class, 'index']);
Route::post('/purchase/create', [PurchaseController::class, 'store']);
Route::put('/purchase/update/{id}', [PurchaseController::class, 'update']);
Route::delete('/purchase/delete/{id}', [PurchaseController::class, 'destroy']);