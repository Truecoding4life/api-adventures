const router = require('express').Router();
require('dotenv').config();
const { User } = require('../../models');

api_Key = process.env.API_KEY
// api_Secret = process.env.API_SECRET

url = 'https://api.unsplash.com/photos/random'
params = {
    'query': User.category,
    'orientation': 'squarish',
    'count': 1,
}

headers = {
    'Authorization': 'Client-ID {api_Key}',
}

response = router.get(url, headers=headers, params=params)

if response.status_code == 200:
    data = response.json()
    photo_url = data[0]['urls']['regular']
    print('Random Squarish Photo: {photo_url}')
else:
    print(response.status_code)
```