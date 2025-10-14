<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TestController;
use App\Http\Middleware\AuthMiddleware;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('home.index');
});

Route::controller(AuthController::class)->prefix('/auth')->as('auth.')->group(function() {
    // Registration Routes
    Route::get('/signup', 'signup')->name('signup');
    Route::post('/register', 'register')->name('register');
    Route::post('/verification-process', 'verifyOtp')->name('verify-otp');
    Route::post('/verify-otp', 'verifyOtpPage')->name('verify-otp-page');
    Route::post('/resend-otp', 'resendOtp')->name('resend-otp');

    // Login Routes
    Route::get('/signin', 'signin')->name('signin');
    Route::post('/login', 'login')->name('login');
});

Route::middleware([AuthMiddleware::class])->controller(HomeController::class)->prefix('home')->as('home.')->group(function() {
    Route::get('/', 'index')->name('index');
});

Route::controller(TestController::class)->prefix('test')->group(function() {
    Route::get('/zip2pdf', [TestController::class, 'index'])->name('zip2pdf.index');
    Route::post('/zip2pdf/process', [TestController::class, 'process'])->name('zip2pdf.process');

});
