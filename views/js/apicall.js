require('dotenv').config();
const { User } = require('../../models');

api_Key = process.env.API_KEY
// api_Secret = process.env.API_SECRET

url = `https://api.unsplash.com/photos/random?query=${User.category}&orientation=squarish&client_id=${api_Key}`

// url = `https://api.unsplash.com/photos/random?query=map&orientation=squarish&client_id=jJoD--t-YwtUk6AG6cgPNH_tl8JWeW-c6MEmMUCfm_8`


   