<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="{{ asset('app/app.css') }}">
    </head>
    <body>
        <div id="app"></div>
        <script type="text/javascript" src="{{ asset('app/app.js') }}"></script>
    </body>
</html>
