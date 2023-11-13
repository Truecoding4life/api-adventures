# API-Adventures ![GitHub License Badge](https://img.shields.io/badge/License-MIT-yellow)

[Link to deployed site](#)

![api-Adventures](./public/image/Screenshot-GetStarted.png)

## Technology Used:

 * HTML - https://developer.mozilla.org/en-US/docs/Web/HTML
 * CSS - https://developer.mozilla.org/en-US/docs/Web/CSS
 * JavaScript -  https://developer.mozilla.org/en-US/docs/Web/JavaScript 
 * BootStrap - https://getbootstrap.com
 * npm - https://www.npmjs.com/
 * mysql2 - https://www.npmjs.com/package/mysql2
 * sequelize - https://sequelize.org/
 * express - https://expressjs.com/
 * express-handlebar - https://www.npmjs.com/package/express-handlebars
 * express-session - https://www.npmjs.com/package/express-session
 * dotenv - https://www.npmjs.com/package/dotenv
 * handlebars - https://handlebarsjs.com/
 * bcrypt - https://www.npmjs.com/package/bcrypt
 * MVC - https://developer.mozilla.org/en-US/docs/Glossary/MVC
 * Unsplash API - https://unsplash.com/developers

 ## Description:



 ## Table of Contents:
  
   * [Installation](#installation)
   * [Usage](#usage)
   * [Highlighted Features](#highlighted-features)
   * [Learning Points](#learning-points)
   * [License](#license)
   * [Badges](#badges)
   * [Tests](#tests)
   * [Contributing](#contributing)
   * [Authors](#authors)

## Installation:
  
* To install all dependencies, run: npm install
* Create the database in MYSQL using the schema.sql.
* To load the seeds into the database, run: npm run seed 
* To start the server, run: node server.js

## Usage:

**Home page Input**

![Screenshot of home page](< get started page>)

---

**Resource Index**

![Screenshot of resource index](./public/image/Resources.png)

---

**My Dashboard**

![Screenshot of My Dashboard](./public/image/Dashboard.png)

---

**Login/Signup**

![Screenshot of Login/Signup form](./public/image/Login:Signup%20Page.png)


---

**Create Resource**

![Screenshot of create resource form](./public/image/Your%20Resources.png)


---

**Create Project**

![Screenshot of create project form]()


---

### Highlighted Features:

 **Random Photo Search:**

 This application utilizes the Unsplash API to get a random photo and sets it as a Project or resource category profile image.  The Unsplash API allows us to filter the searches and retrieve a random photo for the user and a search a topic related photo for the resource category.

 below is code snippet to get a random Photo based on

  
    const url = `https://api.unsplash.com/photos/random?query=${category_id}&orientation=squarish&client_id=${api_Key}`;

    try {
    const unsplashResponse = await fetch(url);
    const unsplashData = await unsplashResponse.json();
    const image_url = unsplashData.urls.small;

    const response = await fetch(`/api/resource`, {
      method: "POST",
      body: JSON.stringify({image_url,}),
      headers: {
        "Content-Type": "application/json",
      }
    })
   } catch (error) {
    console.error("Error fetching photo from Unsplash:", error);
    alert("Failed to fetch photo from Unsplash");
   }

---

## Learning Points:

## License:

 This project is licensed with MIT license

 Link to License - [Website to MIT License]((https://opensource.org/license/mit))

 ## Badges:

 ![GitHub License Badge](https://img.shields.io/badge/License-MIT-yellow)

 ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

 ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

 ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

 ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

 ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

 ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

 ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

 ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

 ## Tests:
 
 This application tested the the front end and backend routes using Insomnia Core application

  ![Screenshot of Insomnia Routes Test](./public/image/Screenshot%20Insomnia%20Testing.png)

 ## Contributing:

 

 ## Authors:

 Anna Rose Benedetti

 - [Portfolio](https://abenedetti27.github.io/Portfolio/)
 - [LinkedIn](https://www.linkedin.com/in/anna-rose-benedetti/)
 - [GitHub](https://github.com/abenedetti27)

 Armando Arujo

 - [Portfolio](https://armand57araujo.github.io/Portfolio/)
 - [LinkedIn](https://www.linkedin.com/in/armand-araujo-a82ba2291/)
 - [GitHub](https://armand57araujo.github.io/Portfolio/)

 Thai Nghiem

 - [Portfolio](#)
 - [LinkedIn](https://www.linkedin.com/in/thai-nghiem-319292267/)
 - [GitHub](https://github.com/Truecoding4life)

 Andy Zurek

 - [Portfolio](https://azurek17.github.io/zurek-portfolio/)
 - [LinkedIn](https://www.linkedin.com/in/andy-zurek-374bb9291/)
 - [GitHub](https://github.com/AZurek17)
