const existingResources = document.querySelector("#existingResources")
const createNew = document.querySelector("#createNew")
const newComment = document.querySelector("#newComment")
const newResource = document.querySelector('#newResource')

function hideCreateNew() {
    createNew.hidden=true;
}

hideCreateNew();

newComment.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log('click')
    existingResources.hidden=true;
    newResource.hidden =false;
    createNew.hidden =false;
});

newResource.addEventListener("submit", (event) => {
    var title = document.querySelector("#title").value;
    var content = document.querySelector("#content").value

    //add additional Model variables here

    event.preventDefault()
    console.log('you clicked me')
    if (!title || !content) {
        alert('Please enter both title and content')
        return;
    }
    const postObj = {
        title: title,
        content: content,
    }
    fetch("/api/resource",{
        method:"POST",
        body:JSON.stringify(postObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            createNew.setAttribute("hidden", "false")
            location.reload()
        } else {
            alert("Error - please try again")
        }
    })
})

function fixTimestamp(){
    const timestamps = document.querySelectorAll('.timestamp');
    console.log(timestamps)
}
fixTimestamp()