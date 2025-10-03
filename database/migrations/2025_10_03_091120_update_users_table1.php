<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function(Blueprint $table) {
            $table->text('profile_image')->after('email')->nullable();
            $table->enum('is_google_login', ['Yes', 'No'])->after('profile_image')->default('No');
            $table->enum('is_facebook_login', ['Yes', 'No'])->after('is_google_login')->default('No');
            $table->text('facebook_id')->after('is_facebook_login')->nullable();
            $table->text('google_id')->after('facebook_id')->nullable();
            $table->text('access_token')->after('google_id')->nullable();
            $table->longText('raw_response')->after('access_token')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function(Blueprint $table) {
            $table->dropColumn('profile_image');
            $table->dropColumn('is_google_login');
            $table->dropColumn('is_facebook_login');
            $table->dropColumn('facebook_id');
            $table->dropColumn('google_id');
            $table->dropColumn('access_token');
            $table->dropColumn('raw_response');
        });
    }
};
