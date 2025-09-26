<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ env('APP_NAME') }}  {{ !empty($title) ? " | ".$title : "" }}</title>
    <link rel="stylesheet" href="{{ url('css/style.css') }}">
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
    <meta name="_token" content="{{ csrf_token() }}">
</head>
@yield('content')

<script src="{{ url('js/script.js') }}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
@session('success-message')
    <script>
    alert('{{session('success-message')}}');
    </script>
@endsession
@session('warning-message')
    <script>
    alert('{{session('warning-message')}}', {title: "Warning", type: 'warning'});
    </script>
@endsession
@session('error-message')
    <script>
    alert('{{session('error-message')}}', {title: "Error", type: 'danger'});
    </script>
@endsession
@session('info-message')
    <script>
    alert('{{session('info-message')}}', {title: "Message", type: 'info'});
    </script>
@endsession
@stack('js')
