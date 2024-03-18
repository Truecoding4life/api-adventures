async function newProjectHandler(event) {
  event.preventDefault();
  const title = document.querySelector("#projectitle").value;
  const description = document.querySelector("#projectdescription").value;
  const deployed_url = document.querySelector("#deloyed_url").value;
  const repo_url = document.querySelector("#repo_url").value;
  const response = await fetch(`/api/project`, {
    method: "POST",
    body: JSON.stringify({
      title,
      description,
      deployed_url,
      repo_url,
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

document
  .querySelector(".projectform")
  .addEventListener("submit", newProjectHandler);
