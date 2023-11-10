async function newProjectHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector("#project-title").value;
    const description = document.querySelector("#project-description").value;
    const deployed_url = document.querySelector("#project-deployed_url").value;
    const repo_url = document.querySelector("#project-repo_url").value;
    const user_id = document.querySelector("#project-user_id").value;
    
  
    const response = await fetch(`/api/project`, {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        deployed_url,
        repo_url,
        user_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      document.location.replace("/"); //verify this is the correct route
    } else {
      alert("Failed to add project");
    }
  }
  
  document.querySelector('.new-project-form').addEventListener('submit', newProjectHandler);
  