<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('global', function ($user, $id) {
    return true;
});
