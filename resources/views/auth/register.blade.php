@extends('layout.fluid')
@section('content')
    <div class="form signup">
        <div class="form-content">
            <div style="display: flex; justify-content:center;">
                <img src="https://m.media-amazon.com/images/I/61x3GIwnW0L.png" style="display:block;padding-bottom:40px;width:180px;" alt="Logo">
            </div>
            <form action="{{ route('auth.register') }}" method="POST" autocomplete="off" id="registerForm">
                @csrf
                <div class="field input-field">
                    <input type="text" placeholder="First name" class="input" name="first_name">
                </div>
                <small class="text-danger" data-name="first_name"></small>

                <div class="field input-field">
                    <input type="text" placeholder="Last name" class="input" name="last_name">
                </div>
                <small class="text-danger" data-name="last_name"></small>

                <div class="field input-field">
                    <input type="text" placeholder="Email" class="input" name="email">
                </div>
                <small class="text-danger" data-name="email"></small>

                <div class="field input-field">
                    <input type="password" placeholder="Create password" class="password" name="password">
                    <i class='bx bx-hide eye-icon'></i>
                </div>
                <small class="text-danger" data-name="password"></small>

                <div class="field input-field">
                    <input type="password" placeholder="Confirm password" class="password" name="confirm_password">
                    <i class='bx bx-hide eye-icon'></i>
                </div>
                <small class="text-danger" data-name="confirm_password"></small>

                <div class="field button-field">
                    <button type="submit">Signup</button>
                </div>
            </form>

            <div class="form-link">
                <span>Already have an account? <a href="{{ route('auth.signin') }}" class="link login-link">Login</a></span>
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
        const form = document.querySelector('#registerForm');

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
                    errorElement.textContent = errors[field][0];
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
                    let form = $('<form>', {
                        action: response.redirect_url,
                        method: 'POST'
                    });

                    form.append($('<input>', {
                        type: 'hidden',
                        name: '_token',
                        value: get_token()
                    }));

                    form.append($('<input>', {
                        type: 'hidden',
                        name: 'email',
                        value: response.data.email
                    }));

                    $('body').append(form);
                    form.submit();
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
