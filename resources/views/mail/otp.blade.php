<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="padding-top:40px;background:#FDA172">
    <tbody>
        <tr>
            <td align="center">
                <img src="https://m.media-amazon.com/images/I/61x3GIwnW0L.png" style="display:block;padding-bottom:40px;width:180px;" alt="Logo">
            </td>
        </tr>
        <tr>
            <td>
                <table width="610px" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#ffffff" style="padding-top:30px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
                    <tbody>
                        <tr>
                            <td style="color:#000000;padding:0 40px 20px 40px;font-family:Verdana, Geneva, Tahoma, sans-serif;font-size:16px;font-weight:400;line-height:24px;">
                                <p style="margin:0 0 20px 0;">Hello {{ $name ?? 'User' }},</p>
                                <p style="margin:0 0 20px 0;">
                                    Thank you for registering with us. To complete your sign-up and verify your email address, please use the following one-time password (OTP):
                                </p>
                                <p style="margin:20px 0;text-align:center;">
                                    <span style="display:inline-block;padding:15px 30px;background:#D16002;color:#ffffff;font-size:24px;font-weight:bold;letter-spacing:3px;border-radius:6px;">
                                        {{ $otp }}
                                    </span>
                                </p>
                                <p style="margin:20px 0 0 0;">
                                    This OTP is valid for the next <strong>10 minutes</strong>. Please do not share this code with anyone for your account’s security.
                                </p>
                            </td>
                        </tr>
                        @if (!empty($admin))
                            <tr>
                                <td style="padding:15px 40px 0 40px;font-family:Verdana, Geneva, Tahoma, sans-serif;font-size:12px;color:#666;text-align:center;">
                                    Note: This is a copy of the user’s verification email.
                                </td>
                            </tr>
                        @endif
                        <tr>
                            <td style="color:#f3fafb;font-family:Verdana, Geneva, Tahoma, sans-serif;font-size:12px;font-weight:400;text-align:center;padding:15px;" bgcolor="#D16002">
                                <b>Note:</b> Please do not reply to this email as this is an auto-generated response.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
