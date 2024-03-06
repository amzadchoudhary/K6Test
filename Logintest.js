// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 10, duration: '5m' }

export default function main() {
    let response

    group('page_1 - https://developers.productdemourl.com/amzadfaveo/public/auth/login', function () {
        response = http.post(
            'https://developers.productdemourl.com/amzadfaveo/public/login',
            '{"email":"amzadchoudhary36@gmail.com","password":"Password@1","remember":true}',
            {
                headers: {
                    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                    'x-xsrf-token':
                        'eyJpdiI6IjZIWFJwZDExTzFpYndiSHZIVjNMNUE9PSIsInZhbHVlIjoiVG5BUTl6cU9SNEREL3ZKdkhsZ0R0cEE5bEtQSDJiS3I4dVoyRVFIMVZ6ZWFyNTByUjMyNTJMcWRMeWtIYzR4UnFSMlJzZVlTenlndnpNaUV0YmFQVy9ZUGpnT1BCYk9sQ3lGQWlNSE1RZHhpTkN2TmRMSmQyclF0RzhYSmlyWTIiLCJtYWMiOiIwMDJlMmJlZjY0ZDY0MDRjYzRjNDkxZTFjYmJlODg5ZDc5NDNlY2VjZWIzOGQ4NzNhYjM0NGI0ZDI4MDU2OGUzIiwidGFnIjoiIn0=',
                    'sec-ch-ua-mobile': '?0',
                    'content-type': 'application/json',
                    accept: 'application/json, text/plain, */*',
                    'x-requested-with': 'XMLHttpRequest',
                    'sec-ch-ua-platform': '"Linux"',
                    origin: 'https://developers.productdemourl.com',
                    'sec-fetch-site': 'same-origin',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-dest': 'empty',
                    'accept-encoding': 'gzip, deflate, br',
                    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                },
            }
        )
        sleep(1.5)
    })

    group(
        'page_2 - https://developers.productdemourl.com/amzadfaveo/public/panel/dashboard',
        function () {
            response = http.get(
                'https://developers.productdemourl.com/amzadfaveo/public/panel/dashboard',
                {
                    headers: {
                        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                        'upgrade-insecure-requests': '1',
                        accept:
                            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                        'sec-fetch-site': 'same-origin',
                        'sec-fetch-mode': 'navigate',
                        'sec-fetch-user': '?1',
                        'sec-fetch-dest': 'document',
                        'accept-encoding': 'gzip, deflate, br',
                        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                    },
                }
            )
            sleep(1)
            response = http.get(
                'https://developers.productdemourl.com/amzadfaveo/public/api/get-auth-info',
                {
                    headers: {
                        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                        accept: 'application/json, text/plain, */*',
                        'x-xsrf-token':
                            'eyJpdiI6Im55ejVVd0s1eDNaVUxKdllLdWNpRHc9PSIsInZhbHVlIjoiRVNndnBucXYxQ0llNXBoSlFQeGpObjhjZlY0alJGbWo5QjQ1YzRLTHhBdlduTzZQSEw0REw3ckphMnBVNnBmNDdHWExhbzlReWUyZUFCdytUOVhvR2FYRnJRWHhMdHdoT25NTEROSWNuR0FnL3dXRGQrWkpKZTF2ZzhUaGhKK0siLCJtYWMiOiI5OTA5ZjYwMmRlMWQ3MWZjNzhhNDM4ZjdkOGYxZDYwYjk4OGZiNzJhYWRlNzBmMTM0NjZlOTFlMDVmOWIyOTM1IiwidGFnIjoiIn0=',
                        'x-requested-with': 'XMLHttpRequest',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                        'sec-fetch-site': 'same-origin',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-dest': 'empty',
                        'accept-encoding': 'gzip, deflate, br',
                        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                    },
                }
            )
            sleep(1)
            response = http.get(
                'https://developers.productdemourl.com/amzadfaveo/public/custom-js/get-list-of-scripts',
                {
                    headers: {
                        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                        accept: 'application/json, text/plain, */*',
                        'x-xsrf-token':
                            'eyJpdiI6IjlDdzd1UjIrKzlmKzk4dDlsKzhCc0E9PSIsInZhbHVlIjoiMGZwOUpiQktIaHBlTWdGZGJENFdzRWdJYlRPNFJpWVRhdkFsaUpKajFyN1VKSklNUVFUSDkwRkhwTHhCMjdUazdUZ2Zwc1NZZU5wSXJRTHJqQmM3R0FIck5rZVQ3clhHa3VBMitySVIrMUlWd3lsdUpxUVJRRW5CaHNiUGtrQ08iLCJtYWMiOiJkOTJjMzQ1ZGJiNTkyNzM0YTBjYzVkYjlmNGIzNTc0MDZhOGQ1NzhmMDU0MGU0MzE1ZmYyMjcxNGI0ZGIwMTk0IiwidGFnIjoiIn0=',
                        'x-requested-with': 'XMLHttpRequest',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                        'sec-fetch-site': 'same-origin',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-dest': 'empty',
                        'accept-encoding': 'gzip, deflate, br',
                        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                    },
                }
            )
            response = http.get(
                'https://developers.productdemourl.com/amzadfaveo/public/auto-update/notification',
                {
                    headers: {
                        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                        accept: 'application/json, text/plain, */*',
                        'x-xsrf-token':
                            'eyJpdiI6IjlDdzd1UjIrKzlmKzk4dDlsKzhCc0E9PSIsInZhbHVlIjoiMGZwOUpiQktIaHBlTWdGZGJENFdzRWdJYlRPNFJpWVRhdkFsaUpKajFyN1VKSklNUVFUSDkwRkhwTHhCMjdUazdUZ2Zwc1NZZU5wSXJRTHJqQmM3R0FIck5rZVQ3clhHa3VBMitySVIrMUlWd3lsdUpxUVJRRW5CaHNiUGtrQ08iLCJtYWMiOiJkOTJjMzQ1ZGJiNTkyNzM0YTBjYzVkYjlmNGIzNTc0MDZhOGQ1NzhmMDU0MGU0MzE1ZmYyMjcxNGI0ZGIwMTk0IiwidGFnIjoiIn0=',
                        'x-requested-with': 'XMLHttpRequest',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                        'sec-fetch-site': 'same-origin',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-dest': 'empty',
                        'accept-encoding': 'gzip, deflate, br',
                        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                    },
                }
            )
            response = http.get(
                'https://developers.productdemourl.com/amzadfaveo/public/api/in-app/auth/notifications?page=1',
                {
                    headers: {
                        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                        accept: 'application/json, text/plain, */*',
                        'x-xsrf-token':
                            'eyJpdiI6IjlDdzd1UjIrKzlmKzk4dDlsKzhCc0E9PSIsInZhbHVlIjoiMGZwOUpiQktIaHBlTWdGZGJENFdzRWdJYlRPNFJpWVRhdkFsaUpKajFyN1VKSklNUVFUSDkwRkhwTHhCMjdUazdUZ2Zwc1NZZU5wSXJRTHJqQmM3R0FIck5rZVQ3clhHa3VBMitySVIrMUlWd3lsdUpxUVJRRW5CaHNiUGtrQ08iLCJtYWMiOiJkOTJjMzQ1ZGJiNTkyNzM0YTBjYzVkYjlmNGIzNTc0MDZhOGQ1NzhmMDU0MGU0MzE1ZmYyMjcxNGI0ZGIwMTk0IiwidGFnIjoiIn0=',
                        'x-requested-with': 'XMLHttpRequest',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                        'sec-fetch-site': 'same-origin',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-dest': 'empty',
                        'accept-encoding': 'gzip, deflate, br',
                        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                    },
                }
            )
            response = http.get(
                'https://developers.productdemourl.com/amzadfaveo/public/api/dependency/languages?meta=true',
                {
                    headers: {
                        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                        accept: 'application/json, text/plain, */*',
                        'x-xsrf-token':
                            'eyJpdiI6IjlDdzd1UjIrKzlmKzk4dDlsKzhCc0E9PSIsInZhbHVlIjoiMGZwOUpiQktIaHBlTWdGZGJENFdzRWdJYlRPNFJpWVRhdkFsaUpKajFyN1VKSklNUVFUSDkwRkhwTHhCMjdUazdUZ2Zwc1NZZU5wSXJRTHJqQmM3R0FIck5rZVQ3clhHa3VBMitySVIrMUlWd3lsdUpxUVJRRW5CaHNiUGtrQ08iLCJtYWMiOiJkOTJjMzQ1ZGJiNTkyNzM0YTBjYzVkYjlmNGIzNTc0MDZhOGQ1NzhmMDU0MGU0MzE1ZmYyMjcxNGI0ZGIwMTk0IiwidGFnIjoiIn0=',
                        'x-requested-with': 'XMLHttpRequest',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                        'sec-fetch-site': 'same-origin',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-dest': 'empty',
                        'accept-encoding': 'gzip, deflate, br',
                        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                    },
                }
            )
            response = http.get(
                'https://developers.productdemourl.com/amzadfaveo/public/api/agent/navigation',
                {
                    headers: {
                        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                        accept: 'application/json, text/plain, */*',
                        'x-xsrf-token':
                            'eyJpdiI6IjlDdzd1UjIrKzlmKzk4dDlsKzhCc0E9PSIsInZhbHVlIjoiMGZwOUpiQktIaHBlTWdGZGJENFdzRWdJYlRPNFJpWVRhdkFsaUpKajFyN1VKSklNUVFUSDkwRkhwTHhCMjdUazdUZ2Zwc1NZZU5wSXJRTHJqQmM3R0FIck5rZVQ3clhHa3VBMitySVIrMUlWd3lsdUpxUVJRRW5CaHNiUGtrQ08iLCJtYWMiOiJkOTJjMzQ1ZGJiNTkyNzM0YTBjYzVkYjlmNGIzNTc0MDZhOGQ1NzhmMDU0MGU0MzE1ZmYyMjcxNGI0ZGIwMTk0IiwidGFnIjoiIn0=',
                        'x-requested-with': 'XMLHttpRequest',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                        'sec-fetch-site': 'same-origin',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-dest': 'empty',
                        'accept-encoding': 'gzip, deflate, br',
                        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                    },
                }
            )
            response = http.get(
                'https://developers.productdemourl.com/amzadfaveo/public/api/agent/dashboard-data/dashboard',
                {
                    headers: {
                        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                        accept: 'application/json, text/plain, */*',
                        'x-xsrf-token':
                            'eyJpdiI6IjlDdzd1UjIrKzlmKzk4dDlsKzhCc0E9PSIsInZhbHVlIjoiMGZwOUpiQktIaHBlTWdGZGJENFdzRWdJYlRPNFJpWVRhdkFsaUpKajFyN1VKSklNUVFUSDkwRkhwTHhCMjdUazdUZ2Zwc1NZZU5wSXJRTHJqQmM3R0FIck5rZVQ3clhHa3VBMitySVIrMUlWd3lsdUpxUVJRRW5CaHNiUGtrQ08iLCJtYWMiOiJkOTJjMzQ1ZGJiNTkyNzM0YTBjYzVkYjlmNGIzNTc0MDZhOGQ1NzhmMDU0MGU0MzE1ZmYyMjcxNGI0ZGIwMTk0IiwidGFnIjoiIn0=',
                        'x-requested-with': 'XMLHttpRequest',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                        'sec-fetch-site': 'same-origin',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-dest': 'empty',
                        'accept-encoding': 'gzip, deflate, br',
                        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                    },
                }
            )
            response = http.get(
                'https://developers.productdemourl.com/amzadfaveo/public/health/system/alerts',
                {
                    headers: {
                        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                        accept: 'application/json, text/plain, */*',
                        'x-xsrf-token':
                            'eyJpdiI6IjlDdzd1UjIrKzlmKzk4dDlsKzhCc0E9PSIsInZhbHVlIjoiMGZwOUpiQktIaHBlTWdGZGJENFdzRWdJYlRPNFJpWVRhdkFsaUpKajFyN1VKSklNUVFUSDkwRkhwTHhCMjdUazdUZ2Zwc1NZZU5wSXJRTHJqQmM3R0FIck5rZVQ3clhHa3VBMitySVIrMUlWd3lsdUpxUVJRRW5CaHNiUGtrQ08iLCJtYWMiOiJkOTJjMzQ1ZGJiNTkyNzM0YTBjYzVkYjlmNGIzNTc0MDZhOGQ1NzhmMDU0MGU0MzE1ZmYyMjcxNGI0ZGIwMTk0IiwidGFnIjoiIn0=',
                        'x-requested-with': 'XMLHttpRequest',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                        'sec-fetch-site': 'same-origin',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-dest': 'empty',
                        'accept-encoding': 'gzip, deflate, br',
                        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                    },
                }
            )
            response = http.get(
                'https://developers.productdemourl.com/amzadfaveo/public/bill/package/get-user-invoice?meta=true&all-users=1&status=0',
                {
                    headers: {
                        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                        accept: 'application/json, text/plain, */*',
                        'x-xsrf-token':
                            'eyJpdiI6IjlDdzd1UjIrKzlmKzk4dDlsKzhCc0E9PSIsInZhbHVlIjoiMGZwOUpiQktIaHBlTWdGZGJENFdzRWdJYlRPNFJpWVRhdkFsaUpKajFyN1VKSklNUVFUSDkwRkhwTHhCMjdUazdUZ2Zwc1NZZU5wSXJRTHJqQmM3R0FIck5rZVQ3clhHa3VBMitySVIrMUlWd3lsdUpxUVJRRW5CaHNiUGtrQ08iLCJtYWMiOiJkOTJjMzQ1ZGJiNTkyNzM0YTBjYzVkYjlmNGIzNTc0MDZhOGQ1NzhmMDU0MGU0MzE1ZmYyMjcxNGI0ZGIwMTk0IiwidGFnIjoiIn0=',
                        'x-requested-with': 'XMLHttpRequest',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                        'sec-fetch-site': 'same-origin',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-dest': 'empty',
                        'accept-encoding': 'gzip, deflate, br',
                        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                    },
                }
            )
            sleep(1.3)
            response = http.get(
                'https://developers.productdemourl.com/amzadfaveo/public/api/agent/dashboard-report/top-widget',
                {
                    headers: {
                        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                        accept: 'application/json, text/plain, */*',
                        'x-xsrf-token':
                            'eyJpdiI6Ilg2Nm1ZZTZKM1o2THhtMmVMSW5LZlE9PSIsInZhbHVlIjoiUDhQMDRXWjN2QStVWVZqR2cyeUhOU3JBSDR6VVlPdVB4WE9zTFphZ0kxZlpIbG1YYldQTmtPRDZjS1E5OWFDTGY1ODMrZC9SNGxtSHh5a1lGcWJsSmtWeGg5M2xxeVc4L1RwWlFKVHU2TmNjL201SVk4V2R1djJoei9TMWpKVXciLCJtYWMiOiJiMGY5NTI5MmZjNWVkN2Q3MWVkZWUzZGE5MGQ5MThmZTcwMTFmMDZhMjczMTZlNWM0NGFhZTdlYjk1ZGFhYjI2IiwidGFnIjoiIn0=',
                        'x-requested-with': 'XMLHttpRequest',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                        'sec-fetch-site': 'same-origin',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-dest': 'empty',
                        'accept-encoding': 'gzip, deflate, br',
                        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                    },
                }
            )
            response = http.get(
                'https://developers.productdemourl.com/amzadfaveo/public/api/agent/dashboard-report/require-immediate-action?page=1',
                {
                    headers: {
                        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                        accept: 'application/json, text/plain, */*',
                        'x-xsrf-token':
                            'eyJpdiI6Ilg2Nm1ZZTZKM1o2THhtMmVMSW5LZlE9PSIsInZhbHVlIjoiUDhQMDRXWjN2QStVWVZqR2cyeUhOU3JBSDR6VVlPdVB4WE9zTFphZ0kxZlpIbG1YYldQTmtPRDZjS1E5OWFDTGY1ODMrZC9SNGxtSHh5a1lGcWJsSmtWeGg5M2xxeVc4L1RwWlFKVHU2TmNjL201SVk4V2R1djJoei9TMWpKVXciLCJtYWMiOiJiMGY5NTI5MmZjNWVkN2Q3MWVkZWUzZGE5MGQ5MThmZTcwMTFmMDZhMjczMTZlNWM0NGFhZTdlYjk1ZGFhYjI2IiwidGFnIjoiIn0=',
                        'x-requested-with': 'XMLHttpRequest',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                        'sec-fetch-site': 'same-origin',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-dest': 'empty',
                        'accept-encoding': 'gzip, deflate, br',
                        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                    },
                }
            )
            response = http.get(
                'https://developers.productdemourl.com/amzadfaveo/public/api/agent/todo-list?page=1',
                {
                    headers: {
                        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                        accept: 'application/json, text/plain, */*',
                        'x-xsrf-token':
                            'eyJpdiI6Ilg2Nm1ZZTZKM1o2THhtMmVMSW5LZlE9PSIsInZhbHVlIjoiUDhQMDRXWjN2QStVWVZqR2cyeUhOU3JBSDR6VVlPdVB4WE9zTFphZ0kxZlpIbG1YYldQTmtPRDZjS1E5OWFDTGY1ODMrZC9SNGxtSHh5a1lGcWJsSmtWeGg5M2xxeVc4L1RwWlFKVHU2TmNjL201SVk4V2R1djJoei9TMWpKVXciLCJtYWMiOiJiMGY5NTI5MmZjNWVkN2Q3MWVkZWUzZGE5MGQ5MThmZTcwMTFmMDZhMjczMTZlNWM0NGFhZTdlYjk1ZGFhYjI2IiwidGFnIjoiIn0=',
                        'x-requested-with': 'XMLHttpRequest',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                        'sec-fetch-site': 'same-origin',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-dest': 'empty',
                        'accept-encoding': 'gzip, deflate, br',
                        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                    },
                }
            )
            sleep(10.6)
            response = http.post(
                'https://developers.productdemourl.com/amzadfaveo/public/auth/logout',
                null,
                {
                    headers: {
                        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                        accept: 'application/json, text/plain, */*',
                        'x-xsrf-token':
                            'eyJpdiI6InNNTmlLNm4yVGpha2ovcmgxcDdaR3c9PSIsInZhbHVlIjoiN0dtdElqRWlIVnlpRk01SGl0UTlXKzhmU3NoSHY4NzE2L3lvbW1yN2NkVGZFT0NwSjRmb3RvWkZJYzRFbWZNZW9rQjljTnlPUmg0ME1IcnhjNXBnRTZkR3E1NUlvQk5iRWxBYkFBS3ZMVzIwd1RUa0piWjd6ZWcyekd1WjlSc2EiLCJtYWMiOiI5N2FjYTMzYzZlYmJhNjYwMTg4MTQ2OTUyOTY2YzhmMWQwMThkODQ1ODAxMjg1M2NlNzE1N2E0ZmFkYWYzODhlIiwidGFnIjoiIn0=',
                        'x-requested-with': 'XMLHttpRequest',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                        origin: 'https://developers.productdemourl.com',
                        'sec-fetch-site': 'same-origin',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-dest': 'empty',
                        'accept-encoding': 'gzip, deflate, br',
                        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                    },
                }
            )
            sleep(0.8)
        }
    )

    group('page_3 - https://developers.productdemourl.com/amzadfaveo/public', function () {
        response = http.get('https://developers.productdemourl.com/amzadfaveo/public', {
            headers: {
                'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Linux"',
                'upgrade-insecure-requests': '1',
                accept:
                    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'sec-fetch-site': 'same-origin',
                'sec-fetch-mode': 'navigate',
                'sec-fetch-user': '?1',
                'sec-fetch-dest': 'document',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
            },
        })
        sleep(1.8)
        response = http.get(
            'https://developers.productdemourl.com/amzadfaveo/public/api/get-auth-info',
            {
                headers: {
                    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                    accept: 'application/json, text/plain, */*',
                    'x-xsrf-token':
                        'eyJpdiI6IjJlQ0hlQ1FDTERVNlN5b1JsWDU2Y3c9PSIsInZhbHVlIjoiV1JHS2cwVG9FUkF4YmVSZmprMEJLWndkRUFrRFduL1BQbDg0K1Z5YjAydDk5TDUxL2lXamtacGx5S3Zsd0YyWUZMTEI3WERYUVhranNZeHA4ZUlYN3ZXTTFQc1ZVZ0JQamp6enNyOGFuMzhEUTBlL2xWZjQwVVNIK0xMNnplNUIiLCJtYWMiOiJjNTE5MWRiZjRlMTE5Zjc3OWNmMDcxYmRmYWM5Y2EzNTc4ZTVjNTU2NDdmMjIxZDkyM2ZjMjlkNTVhZjFkY2JhIiwidGFnIjoiIn0=',
                    'x-requested-with': 'XMLHttpRequest',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Linux"',
                    'sec-fetch-site': 'same-origin',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-dest': 'empty',
                    'accept-encoding': 'gzip, deflate, br',
                    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                },
            }
        )
        sleep(1)
        response = http.get(
            'https://developers.productdemourl.com/amzadfaveo/public/custom-js/get-list-of-scripts',
            {
                headers: {
                    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                    accept: 'application/json, text/plain, */*',
                    'x-xsrf-token':
                        'eyJpdiI6IjlVM2V0NFBXZlVvS0U0bmRzZGphSkE9PSIsInZhbHVlIjoiQ0g0WUl0QXkyUWM3T01yS2p1elVSYm1na2JjSEVURElEUTBmK0VQT21aM2ZHMVo3ZVJ3OVcyQTFNNjUrY2JyQWd6NWU3elBHQmlXSGQrTHdPcEwvWXhXSkVtU2RMVnd4R01wK1RrMGJsNGVQOGUyZGZ3bG55NU9UY05QNnhxOGIiLCJtYWMiOiJiMTdlYjc0NTk5ZWJjM2QzOGI4NzM0YTk5OTA1NWJhMDE3NWQxZDE0MzY4YTUyN2U2ZGUwMWJmOGIwNzY4Yzc4IiwidGFnIjoiIn0=',
                    'x-requested-with': 'XMLHttpRequest',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Linux"',
                    'sec-fetch-site': 'same-origin',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-dest': 'empty',
                    'accept-encoding': 'gzip, deflate, br',
                    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                },
            }
        )
        response = http.get(
            'https://developers.productdemourl.com/amzadfaveo/public/api/dependency/languages?meta=true',
            {
                headers: {
                    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                    accept: 'application/json, text/plain, */*',
                    'x-xsrf-token':
                        'eyJpdiI6IjlVM2V0NFBXZlVvS0U0bmRzZGphSkE9PSIsInZhbHVlIjoiQ0g0WUl0QXkyUWM3T01yS2p1elVSYm1na2JjSEVURElEUTBmK0VQT21aM2ZHMVo3ZVJ3OVcyQTFNNjUrY2JyQWd6NWU3elBHQmlXSGQrTHdPcEwvWXhXSkVtU2RMVnd4R01wK1RrMGJsNGVQOGUyZGZ3bG55NU9UY05QNnhxOGIiLCJtYWMiOiJiMTdlYjc0NTk5ZWJjM2QzOGI4NzM0YTk5OTA1NWJhMDE3NWQxZDE0MzY4YTUyN2U2ZGUwMWJmOGIwNzY4Yzc4IiwidGFnIjoiIn0=',
                    'x-requested-with': 'XMLHttpRequest',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Linux"',
                    'sec-fetch-site': 'same-origin',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-dest': 'empty',
                    'accept-encoding': 'gzip, deflate, br',
                    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                },
            }
        )
    })
}