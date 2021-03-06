<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel 8 & ReactJs</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="collapse"></div>
    <div id="profile"></div>
    <div id="shopIcon"></div>
    <div id="shop"></div>
    <div id="root"></div>
    <div id="toogleMusic"></div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>