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
            <a href="#" class="field facebook" id="facebookSignup">
                <i class='bx bxl-facebook facebook-icon'></i>
                <span>Signup with Facebook</span>
            </a>
        </div>

        <div class="media-options">
            <a href="#" class="field google" id="googleSignup">
                <img src="{{ url('images/google.png') }}" alt="" class="google-img">
                <span>Signup with Google</span>
            </a>
        </div>

    </div>
@endsection
<script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
    import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider  } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

    const firebaseConfig = {
        apiKey: "AIzaSyABU02id_bDNa0tKkr2ociBA0mERh0Hz14",
        authDomain: "test-project-37959.firebaseapp.com",
        projectId: "test-project-37959",
        storageBucket: "test-project-37959.firebasestorage.app",
        messagingSenderId: "327215588065",
        appId: "1:327215588065:web:67e8d71199ae37629c4da0",
        measurementId: "G-FV1LCZM9P7"
    }; 

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();

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
        const facebookSignup = document.getElementById("facebookSignup");
        const googleSignup = document.getElementById("googleSignup");
        facebookSignup.addEventListener('click', handleFacebookSignup);
        googleSignup.addEventListener('click', handleGoogleSignup);

            

        async function handleFacebookSignup(event) {
            event.preventDefault();
            try {
                const result = await signInWithPopup(auth, fbProvider);
                const user = result.user;

                const formData = new FormData();
                formData.append('_token', get_token());
                formData.append('facebook_json', JSON.stringify(user));
                formData.append('is_facebook_registration', '1');

                $.ajax({
                    url: "{{ route('auth.register') }}", 
                    method: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        console.log(response);
                        // window.location.href = response.redirect_url;
                    },
                    error: function(xhr, status, error) {
                        console.error('Facebook signup error:', error);
                    }
                });

            } catch (error) {
                console.error('Firebase Facebook popup error:', error);
            }
        }

           

        async function handleGoogleSignup(event) {
            event.preventDefault();
            try {
                const result = await signInWithPopup(auth, provider);
                const user = result.user;
                const formData = new FormData();
                formData.append('_token', get_token());
                formData.append('google_json', JSON.stringify(user));
                formData.append('is_google_registration', '1');
                $.ajax({
                    url: "{{ route('auth.register') }}",
                    method: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        window.location.href = response.redirect_url;
                    },
                    error: function(xhr, status, error) {
                        console.error('Google signup error:', error);
                    }
                });

            } catch (error) {
                console.error('Firebase popup error:', error);
            }
        }

        
    });



</script>
