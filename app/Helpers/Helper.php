<?php
namespace App\Helpers;

if (!function_exists('prx')) {
    function prx($data)
    {
        header('Content-Type: application/json');
        echo json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
        die;
    }
}