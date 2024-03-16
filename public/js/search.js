const searchButton = $('#search-btn');
const searchInput = $('#searchByCategory')


$(document).ready(()=> {
    searchButton.click(()=>{
        const value = searchInput.val()
        console.log(`Selected Category Number: ${value}`);
        window.location.href = `/category/${value}`
    })
})


const dateDisplay = $('#display-time-detail');
const timeDisplay = $('#time-display');
const date = dateDisplay.text().slice(0,16);
const time = dateDisplay.text().slice(17,26)
console.log(time)

dateDisplay.html(` ${date}` )
timeDisplay.html(time)