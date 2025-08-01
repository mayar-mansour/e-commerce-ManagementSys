<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckAdminOrVendorPermissions
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {

        if (Auth::user()->hasRole('admin') || Auth::user()->hasRole('vendor') ) {
            return $next($request);
        }

        return response()->json(['error' => 'Unauthorized'], 403);
    }
}
