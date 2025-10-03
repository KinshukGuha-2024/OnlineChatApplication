@extends('layout.fluid')
@section('content')
    <style>
        .height-100 {
            height: 100vh
        }

        .card {
            width: auto;
            min-width: 600px;
            border: none;
            height: 400px;
            box-shadow: 0px 5px 20px 0px #d2dae3;
            z-index: 1;
            display: flex;
            justify-content: center;
            align-items: center
        }

        .card h6 {
            color: red;
            font-size: 20px
        }

        .inputs input {
            width: 40px;
            height: 40px
        }

        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            margin: 0
        }

        .card-2 {
            background-color: #fff;
            padding: 10px;
            width: 350px;
            height: 100px;
            bottom: -50px;
            left: 20px;
            position: absolute;
            border-radius: 5px
        }

        .card-2 .content {
            margin-top: 50px
        }

        .card-2 .content a {
            color: red
        }

        .form-control:focus {
            box-shadow: none;
            border: 2px solid red
        }

        .validate {
            border-radius: 20px;
            height: 40px;
            background-color: red;
            border: 1px solid red;
            width: 140px
        }
    </style>
    <div class="height-100 d-flex justify-content-center align-items-center">
        <div class="position-relative">
            <div style="display: flex; justify-content:center;">
                <img src="https://m.media-amazon.com/images/I/61x3GIwnW0L.png" style="display:block;padding-bottom:40px;width:180px;" alt="Logo">
            </div>
            <div class="card p-2 text-center">
                <h6>Please enter the one time password <br> to verify your account</h6>
                <div> <span>A code has been sent to</span> <small id="maskedNumber">{{ $email }}</small> </div>
                <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
                    <input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" />
                    <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" />
                    <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" />
                    <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
                    <input class="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" />
                    <input class="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" />
                </div>
                <small class="text-danger" data-name="otp"></small>

                <div class="mt-4"> 
                    <button id="validateBtn" class="btn btn-danger px-4 validate">Validate</button> 
                </div>
                <div id="resendCodeDiv" style="display: none;">
                    <p style="margin-top: 15px;">Didnt receive the code?</p>
                    <a  href="#" id="resendCode" style="margin-top: -15px;"> Resend Code.</a>
                </div>
                <div id="secondDiv">
                    <p style="margin-top: 15px; color:gray;">
                        Resend Code in <span id="secondVal">60</span> Seconds
                    </p>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('js')
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            otpTimer();
            function otpTimer() {
                let timeLeft = 60;
                const secondEl = document.getElementById('secondVal');
                const countdown = setInterval(() => {
                    timeLeft--;
                    secondEl.textContent = timeLeft;
                    if (timeLeft <= 0) {
                        clearInterval(countdown);
                        secondEl.textContent = "60";
                        const resendCodeDiv = document.getElementById('resendCodeDiv');
                        const secondDiv = document.getElementById('secondDiv');
                        resendCodeDiv.style.display = "";
                        secondDiv.style.display = "none"; 
                    }
                }, 1000);
            }

            function OTPInput() {
                const inputs = document.querySelectorAll('#otp > input');
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].addEventListener('input', function() {
                        let val = this.value;
                        val = val.toUpperCase().replace(/[^A-Z0-9]/g, '');
                        if (val.length > 1) val = val[0];
                        this.value = val;
                        if (val !== '' && i < inputs.length - 1) {
                            inputs[i + 1].focus();
                        }
                    });
                    inputs[i].addEventListener('keydown', function(event) {
                        if (event.key === 'Backspace') {
                            this.value = '';
                            if (i > 0) {
                                inputs[i - 1].focus();
                            }
                        }
                    });
                }
            }
            OTPInput();
            const validateBtn = document.getElementById('validateBtn');
            validateBtn.addEventListener('click', function() {
                let otp = '';
                document.querySelectorAll('#otp > input').forEach(input => otp += input.value);
                let formData = new FormData();
                formData.append('_token', get_token());
                formData.append('email', "{{ $email }}");
                formData.append('otp', otp);
                $.ajax({
                    url: "{{ route('auth.verify-otp') }}",
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: (response) => {
                        $('#validateBtn').prop('disabled', false);
                        if (response.redirect_url) {
                            window.location.href = response.redirect_url;
                        }
                    },
                    error: (response) => {
                        $('#validateBtn').prop('disabled', false);
                        if (response.status == 422) {
                            const data = response.responseJSON;
                            document.querySelectorAll('small.text-danger').forEach(el => el.textContent = '');
                            if (data.errors) {
                                for (let field in data.errors) {
                                    let errorElement = document.querySelector(`small[data-name="${field}"]`);
                                    if (errorElement) {
                                        errorElement.textContent = data.errors[field][0];
                                    }
                                }
                            }
                        }
                    }
                });
            });

            const resendCode = document.getElementById('resendCode');
            resendCode.addEventListener('click', function() {
                const resendCodeDiv = document.getElementById('resendCodeDiv');
                const secondDiv = document.getElementById('secondDiv');
                resendCodeDiv.style.display = "none";
                secondDiv.style.display = ""; 
                otpTimer();
                let formData = new FormData();
                formData.append('_token', get_token());
                formData.append('email', "{{ $email }}");
                $.ajax({
                    url: "{{ route('auth.resend-otp') }}",
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: (response) => {
                    },
                    error: (response) => {
                        if (response.status == 422) {
                            showErrors(response.responseJSON?.errors ?? {});
                        }
                    }
                }); 
            });

        });
    </script>
@endpush