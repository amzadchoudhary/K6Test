import http from 'k6/http';
import { sleep } from 'k6';

let i = 0;

export default function () {
    const loginPageUrl = 'https://developers.productdemourl.com/amzadfaveo/public/auth/login';

    // Step 1: Get the login page
    const loginPageResponse = http.get(loginPageUrl);
    const loginPageContent = loginPageResponse.body;

    console.log(`Login Page Content ${i + 1}: `, loginPageContent);

    // Rest of your code...

    sleep(1);
}
