<?php
namespace App\Helpers;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;

class FileHelper {
    static function upload_file(UploadedFile $file, string $path = '', string|null $file_name = null) 
    {  
        $full_path = 'uploads/' . $path . '/' . ($file_name ?? $file->getOriginalName());
        $path = public_path('uploads/' . $path . '/'); 
        if (!File::exists($path)) { 
            \mkdir($path, '0777'); 
        } 
        move_uploaded_file($file->getRealPath(), $full_path); 
        return $full_path; 
    } 
}