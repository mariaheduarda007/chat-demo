<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Route::get('/', function () {
    return view('./login/index');
});

// Route::get('/home', function () {
//     return view('./home/index');
// });

Route::get('/home', [HomeController::class, 'index'])->name("home.index");