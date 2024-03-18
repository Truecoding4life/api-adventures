const category = document.getElementById("categoryIdConverter");


function displayCategory(){
  if (category) {
    let text = category.innerHTML;
    $("#categoryIdConverter").html(translate(parseInt(text))); // Correct usage of .html() function and parsing text to integer
}
}


function translate(number) {
  let result;
  switch (number) {
    case 1:
      result = "sport";
      break;
    case 2:
      result = "food";
      break;
    case 3:
      result = "music";
      break;
    case 4:
      result = "weather";
      break;
    case 5:
      result = "events";
      break;
    case 6:
      result = "gaming";
      break;
    case 7:
      result = "technologies";
      break;
    case 8:
      result = "shopping";
      break;
  }
  return result;
}

displayCategory()