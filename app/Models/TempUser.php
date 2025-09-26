<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TempUser extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'otp',
        'otp_valid_till'
    ];
}
