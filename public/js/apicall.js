require('dotenv').config();
const { User } = require('../../models');

const api_Key = process.env.API_KEY
// const api_Secret = process.env.API_SECRET

const url = `https://api.unsplash.com/photos/random?query=${User.category}&orientation=squarish&client_id=${api_Key}`

https://api.unsplash.com/photos/random?query=movies&orientation=squarish&client_id=jJoD--t-YwtUk6AG6cgPNH_tl8JWeW-c6MEmMUCfm_8

const dataArray = [];
const rawData = [];


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

function handleGetPick() {
    console.log("clicked - Saving Data to local storage");

    const selectpic = document.getElementById("#selectpic").val();

    localStorage.setItem("selectpic", selectpic);
    fetchPicture();
    //reseting the value of the form for next use
    selectpic = document.getElementById("#selectpic").val("");

    console.log("Pic Saved");
}


function fetchPicture() {
    console.log(url);
    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            const img = document.createElement("img");
            img.setAttribute("src", data.urls.regular);
            img.setAttribute("alt", data.alt_description);
            img.setAttribute("id", "img");
            img.setAttribute("width", "300px");
            img.setAttribute("height", "300px");
            const selectpic = document.getElementById("selectpic");
            selectpic.innerHTML = ''; // Clear previous images
            selectpic.appendChild(img);
            rawData.push(data);
            savePicture();
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
};

function savePicture() {
    localStorage.setItem("dataArray", JSON.stringify(dataArray));
    localStorage.setItem("rawData", JSON.stringify(rawData));
}


document.querySelector('#selectpic').addEventListener('click', selectpic);

module.exports = { handleGetPick, renderPicture };