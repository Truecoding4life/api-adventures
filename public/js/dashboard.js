
const existingResource = document.querySelector("#existingResource")
const createNew = document.querySelector("#createNew")
const newComment = document.querySelector("#newComment")
const newResource = document.querySelector('#newResource')
const newProject = document.querySelector('#newProject')

const createResourceHandler = async (event) => {
    const title = document.querySelector("#inputTitle")
    const description = document.querySelector("#Resource-description")
    const tag = document.querySelector("#inputTags")
    const category = document.querySelector('#inputCategory')


}

const form = document.querySelector("createform")




newProject.addEventListener("submit", (event) => {
    var title = document.querySelector("#title").value;
    var description = document.querySelector("#description").value
    var deployed_url = document.querySelector("#deployed-url").value;
    var repo_url = document.querySelector("#repo-url").value
    var user_id = document.querySelector("#user_id").value
    //add additional Model variables here

    event.preventDefault()
    console.log('you clicked me')
    if (!title || !description || !deployed_url || !repo_url || !user_id) {
        alert('Please enter both title and description')
        return;
    }
    const postObj = {
        title: title,
        description: description,
        deployed_url: deployed_url,
        repo_url: repo_url,
        user_id: user_id
    }
    fetch("/api/project",{
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

