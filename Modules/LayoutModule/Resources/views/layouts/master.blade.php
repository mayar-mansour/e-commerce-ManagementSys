<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Module LayoutModule</title>

       {{-- Laravel Vite - CSS File --}}
       {{-- {{ module_vite('build-layoutmodule', 'Resources/assets/sass/app.scss') }} --}}

    </head>
    <body>
        @yield('content')

        {{-- Laravel Vite - JS File --}}
        {{-- {{ module_vite('build-layoutmodule', 'Resources/assets/js/app.js') }} --}}
    </body>
</html>
