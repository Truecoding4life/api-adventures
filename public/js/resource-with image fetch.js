require("dotenv").config();

async function newResourceHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#resource-title").value;
  const description = document.querySelector("#resource-description").value;
  // const image_url = document.querySelector("#resource-image_url").value;
  const user_id = document.querySelector("#resource-user_id").value;
  const category_id = document.querySelector("#resource-category_id").value;

  const api_Key = process.env.API_KEY; //
  const url = `https://api.unsplash.com/photos/random?query=${category_id}&orientation=squarish&client_id=${api_Key}`;

  try {
    const unsplashResponse = await fetch(url);
    const unsplashData = await unsplashResponse.json();

    const image_url = unsplashData.urls.small;

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
  } catch (error) {
    console.error("Error fetching photo from Unsplash:", error);
    alert("Failed to fetch photo from Unsplash");
  }
}

document
  .querySelector(".new-resource-form")
  .addEventListener("submit", newResourceHandler);
