import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    const loginPageUrl = 'https://amzad.faveodemo.com/auth/login';
    const loginApiUrl = 'https://amzad.faveodemo.com/api/login';
    const createUserApiUrl = 'https://amzad.faveodemo.com/user/create/api';

    // Step 1: Get the login page
    const loginPageResponse = http.get(loginPageUrl);
    const loginPageContent = loginPageResponse.body;

    console.log('Login Page Content: ', loginPageContent);

    // Extract CSRF token from the login page response using regular expressions
    const csrfTokenMatch = /meta name="csrf-token" content="(.+?)"/.exec(loginPageContent);
    if (csrfTokenMatch) {
        const csrfToken = csrfTokenMatch[1];
        console.log('CSRF Token: ', csrfToken);

        // Step 2: Perform the login request
        const loginPayload = {
            email: 'amzadchoudhary36@gmail.com',
            password: 'Password@1',
            _token: csrfToken
        };

        const loginHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        const loginResponse = http.post(loginApiUrl, loginPayload, { headers: loginHeaders });

        console.log('Login Response Status Code: ', loginResponse.status);
        console.log('Login Response Body: ', loginResponse.body);

        if (loginResponse.status === 200 && loginResponse.json('success')) {
            // Step 3: Create a user
            const createUserPayload = {
                panel: 'agent',
                'g-recaptcha-response': 'undefined',
                scenario: 'create',
                first_name: 'test',
                last_name: 'vfr',
                user_name: '',
                phone_number: '',
                email: 'lucky1@gmail.com',
                mobile: '',
                address: '',
                organisation: ''
            };

            const createUserHeaders = {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
                'Cache-Control': 'no-cache, private',
                'Connection': 'Keep-Alive',
                'Content-Security-Policy': 'font-src \'self\' https://fonts.gstatic.com',
                'Date': new Date().toUTCString(),
                'Keep-Alive': 'timeout=5, max=100',
                'Server': 'Apache/2.4.57 (Ubuntu)',
                'Strict-Transport-Security': 'max-age=31536000; includeSubdomains',
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'SAMEORIGIN',
                'X-Xss-Protection': '1; mode=block'
            };

            const createUserResponse = http.post(createUserApiUrl, JSON.stringify(createUserPayload), { headers: createUserHeaders });

            console.log('Create User Response Status Code: ', createUserResponse.status);
            console.log('Create User Response Body: ', createUserResponse.body);
        } else {
            console.log('Login failed or returned a non-success response.');
        }
    } else {
        console.log('CSRF token not found in the login page response.');
    }

    sleep(1);
}