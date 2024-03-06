import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    const loginPageUrl = 'https://developers.productdemourl.com/amzadfaveo/public/auth/login';
    const loginApiUrl = 'https://developers.productdemourl.com/amzadfaveo/public/api/login';
    const createFormApiUrl = 'https://developers.productdemourl.com/amzadfaveo/public/api/form/render/?category=user&scenario=create&panel=agent';

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
            // Step 3: Navigate to the create form
            const accessToken = loginResponse.json('data.access_token');

            const createFormHeaders = {
                'Authorization': `Bearer ${accessToken}`
            };

            const createFormResponse = http.get(createFormApiUrl, { headers: createFormHeaders });

            console.log('Create Form Response Status Code: ', createFormResponse.status);
            console.log('Create Form Response Body: ', createFormResponse.body);
        } else {
            console.log('Login failed or returned a non-success response.');
        }
    } else {
        console.log('CSRF token not found in the login page response.');
    }

    sleep(1);
}
