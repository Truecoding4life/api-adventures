require('dotenv').config();
const { User } = require('../../models');

const api_Key = process.env.API_KEY
// const api_Secret = process.env.API_SECRET

const url = `https://api.unsplash.com/photos/random?query=${User.category}&orientation=squarish&client_id=${api_Key}`

const dataArray = [];
const rawData = [];
const selectpic = $("#selectpic");


function renderPicture() {
    const rawHistoryArray = localStorage.getItem("dataArray");
    const NoSave = localStorage.getItem("rawData");
    if (rawHistoryArray === null) {
        dataArray = [];
    }else{
        dataArray = JSON.parse(rawHistoryArray);
    }
    if (NoSave === null) {
        rawData = [];
    }else{
        rawData = JSON.parse(NoSave);
    }
}