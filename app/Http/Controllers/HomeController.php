<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {
        $user = auth()->user();
        $socketUrl = config('services.chat.socket_url') ??
            env('NODE_SOCKET_URL') ??
            rtrim(env('APP_URL'), '/') . ':' . env('NODE_PORT', 3000);

        $socketScript = null;
        if ($socketUrl) {
            $normalizedUrl = rtrim($socketUrl, '/');
            $socketScript = $normalizedUrl ? $normalizedUrl . '/socket.io/socket.io.js' : null;
        }

        return view('home.index', [
            'chatUser' => $user,
            'socketUrl' => $socketUrl,
            'socketScript' => $socketScript,
        ]);
    }
}
