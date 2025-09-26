@extends('layout.fluid')
@section('content')
    <div class="form login">
        <div class="form-content">
            <div style="display: flex; justify-content:center;">
                <img src="https://m.media-amazon.com/images/I/61x3GIwnW0L.png" style="display:block;padding-bottom:40px;width:180px;" alt="Logo">
            </div>
            <form action="{{ route('auth.login') }}" method="POST" autocomplete="off" id="loginForm">
                @csrf
                <div class="field input-field">
                    <input type="text" placeholder="Email" class="input" name="email">
                </div>
                <small class="text-danger" data-name="email"></small>

                <div class="field input-field">
                    <input type="password" placeholder="Password" class="password" name="password">
                    <i class='bx bx-hide eye-icon'></i>
                </div>
                <small class="text-danger" data-name="password"></small>

                <div class="form-link">
                    <a href="#" class="forgot-pass">Forgot password?</a>
                </div>

                <div class="field button-field">
                    <button type="submit">Login</button>
                </div>
            </form>

            <div class="form-link">
                <span>Don't have an account? <a href="{{ route('auth.signup') }}" class="link ">Signup</a></span>
            </div>
        </div>

        <div class="line"></div>

        <div class="media-options">
            <a href="#" class="field facebook">
                <i class='bx bxl-facebook facebook-icon'></i>
                <span>Login with Facebook</span>
            </a>
        </div>

        <div class="media-options">
            <a href="#" class="field google">
                <img src="{{ url('images/google.png') }}" alt="" class="google-img">
                <span>Login with Google</span>
            </a>
        </div>
    </div>
@endsection
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('#loginForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            submit_form();
        });

        function showErrors(errors) {
            document.querySelectorAll('small.text-danger').forEach(el => {
                el.textContent = '';
            });

            for (let field in errors) {
                let errorElement = document.querySelector(`small[data-name="${field}"]`);
                if (errorElement) {
                    errorElement.textContent = errors[field][0]; // show first error
                }
            }
        }

        const submit_form = function(){
            $('button[type="submit"]').prop('disabled', true);

            $.ajax({
                url: form.action,
                type: form.method,
                data: new FormData(form),
                processData: false,
                contentType: false,
                success: (response) => {
                    $('button[type="submit"]').prop('disabled', false);
                    window.location.href = response.redirect_url;
                },
                error: (response) => {
                    $('button[type="submit"]').prop('disabled', false);
                    if (response.status == 422) {
                        showErrors(response.responseJSON?.errors ?? {});
                    }
                }
            });
        }
    });
</script>

