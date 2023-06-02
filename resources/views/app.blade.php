<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{asset('dist/img/AdminLTELogo.png')}}" rel="shortcut icon" type="image/x-icon" />
        <title>Laravel</title>
        <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">
    </head>
    <body class="hold-transition sidebar-mini layout-fixed">
      <div id="app"></div>
    <script type="text/javascript" src="{{asset('js/app.js')}}"></script>
    </body>
</html>
