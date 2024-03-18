const resourceId = window.location.pathname.split("/").pop();


document.querySelector("#update").addEventListener("click", (event) => {
  event.preventDefault();
  const editResource = {
    title: document.querySelector("#editedTitle").value,
    description: document.querySelector("#editedDescription").value,
    category_id: document.querySelector("#editedCategory").value,
    image_url: document.querySelector('#editedImage').value,
  };
  // console.log(postId);
  console.log(editResource);
  fetch(`/api/resource/${resourceId}`, {
    method: "PUT",
    body: JSON.stringify(editResource),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      console.log("Resource updated");
      location.href = `/resource/${resourceId}`
    } else {
      alert("please try again");
    }
  });
});

document.querySelector("#delete").addEventListener("click", (event) => {
  const resourceId = window.location.pathname.split("/").pop();
  event.preventDefault();
  // const postId = document.querySelector("#hiddenPostId").value;
  fetch(`/api/resource/${resourceId}`, {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) {
      console.log("Resource deleted");
      location.href = "/dashboard"; // verify path
    } else {
      alert("please try again");
    }
  });
});
