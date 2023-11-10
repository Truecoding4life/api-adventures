async function newResourceHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#resource-title").value;
  const description = document.querySelector("#resource-description").value;
  const image_url = document.querySelector("#resource-image_url").value;
  const user_id = document.querySelector("#resource-user_id").value;
  const category_id = document.querySelector("#resource-category_id").value;
  

  const response = await fetch(`/api/resource`, {
    method: "POST",
    body: JSON.stringify({
      title,
      description,
      image_url,
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

document.querySelector('.new-resource-form').addEventListener('submit', newResourceHandler);
