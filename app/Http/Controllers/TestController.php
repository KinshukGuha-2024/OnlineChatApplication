<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use ZipArchive;
use setasign\Fpdi\Fpdi;     // from setasign/fpdi
use Imagick;

class TestController extends Controller
{
    public function index()
    {
        return view('zip2pdf.index');
    }

    public function process(Request $request)
    {
        $request->validate([
            'zip_file' => 'required|file|mimes:zip|max:51200', // 50 MB max
        ]);

        // store uploaded zip
        $zipFile = $request->file('zip_file');
        $baseName = pathinfo($zipFile->getClientOriginalName(), PATHINFO_FILENAME);
        $storedZipPath = $zipFile->storeAs('zip_uploads', time() . '_' . $zipFile->getClientOriginalName());

        // extract to temp folder
        $extractPath = storage_path('app/temp_extracts/' . uniqid('zip_'));
        if (!file_exists($extractPath)) {
            mkdir($extractPath, 0777, true);
        }

        $zip = new ZipArchive;
        if ($zip->open(storage_path('app/' . $storedZipPath)) === TRUE) {
            $zip->extractTo($extractPath);
            $zip->close();
        } else {
            return back()->withErrors(['zip_file' => 'Failed to open ZIP archive.']);
        }

        // collect image files (jpg/png/webp/gif/bmp)
        $imageFiles = collect(glob($extractPath . '/*.{jpg,jpeg,png,gif,webp,bmp}', GLOB_BRACE))
            ->sort()
            ->values();

        if ($imageFiles->isEmpty()) {
            return back()->withErrors(['zip_file' => 'No image files found inside the ZIP.']);
        }

        // convert to single PDF using Imagick
        $pdfDir = storage_path('app/public/pdfs');
        if (!file_exists($pdfDir)) {
            mkdir($pdfDir, 0777, true);
        }

        $pdfPath = $pdfDir . '/' . $baseName . '_' . time() . '.pdf';
        $imagick = new Imagick();
        foreach ($imageFiles as $imgPath) {
            $img = new Imagick($imgPath);
            $img->setImageFormat('pdf');
            $imagick->addImage($img);
        }
        $imagick->writeImages($pdfPath, true);

        // make publicly accessible link
        $publicUrl = asset('storage/pdfs/' . basename($pdfPath));

        // clean temp files
        foreach ($imageFiles as $f) @unlink($f);
        @unlink(storage_path('app/' . $storedZipPath));
        @rmdir($extractPath);

        return redirect()
            ->route('zip2pdf.index')
            ->with('pdf_url', $publicUrl)
            ->with('pdf_filename', basename($pdfPath));
    }
}
