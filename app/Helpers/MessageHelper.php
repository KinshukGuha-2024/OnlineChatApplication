<?php

namespace App\Helpers;

use Illuminate\Support\MessageBag;

class MessageHelper
{
    static function validationErrorsToString(MessageBag $validationErrors, String $separator = "\n "): string
    {
        return join($separator, array_map(function ($errors) {
            return $errors[0];
        }, $validationErrors->toArray()));
    }
}