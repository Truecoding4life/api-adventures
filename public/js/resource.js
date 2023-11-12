async function newResourceHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#inputTitle").value.trim();
  const description = document.querySelector("#Resource-description").value.trim();
  const tag = document.querySelector("#inputTags").value.trim();
  const category_id = document.querySelector('#inputCategory').value;
  const user_id = document.querySelector('#user_id').value;
  
  const response = await fetch(`/api/resource`, {
    method: "POST",
    body: JSON.stringify({
      title,
      description,
      tag,
      user_id,
      category_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/"); //verify this is the correct route
  } else {
    alert("Failed to add resource");
  }
}

document.querySelector('.createform').addEventListener('submit', newResourceHandler);
