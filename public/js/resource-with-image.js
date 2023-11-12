
async function newResourceHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#inputTitle").value.trim();
  const description = document.querySelector("#Resource-description").value.trim();
  const tag = document.querySelector("#inputTags").value.trim();
  const category_id = document.querySelector('#inputCategory').value;
  // const image_url = document.querySelector("#resource-image_url").value;
  const user_id = document.querySelector("#user_id").value;
  

  const api_Key = "jJoD--t-YwtUk6AG6cgPNH_tl8JWeW-c6MEmMUCfm_8"; //
  const url = `https://api.unsplash.com/photos/random?query=${category_id}&orientation=squarish&client_id=${api_Key}`;

  try {
    const unsplashResponse = await fetch(url);
    const unsplashData = await unsplashResponse.json();

    const image_url = "";

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
      document.location.replace("/dashboard"); //verify this is the correct route
    } else {
      alert("Failed to add resource");
    }
  } catch (error) {
    console.error("Error fetching photo from Unsplash:", error);
    alert("Failed to fetch photo from Unsplash");
  }
}

document
  .querySelector(".createform")
  .addEventListener("submit", newResourceHandler);
