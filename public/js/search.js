const searchButton = $('#search-btn');
const searchInput = $('#searchByCategory')


$(document).ready(()=> {
    searchButton.click(()=>{
        const value = searchInput.val()
        console.log(`Selected Category Number: ${value}`);
        window.location.href = `/category/${value}`
    })
})



