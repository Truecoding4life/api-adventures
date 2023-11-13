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
API Adventures is an API index by category, for developers, with the ability to save API resources to a user dashboard, create new API resources and add to the index. 

API Adventures is a robust web application built using Node.js, Express.js, and MySQL, following the MVC paradigm to ensure a structured and maintainable codebase. It offers a secure and interactive platform with RESTful API endpoints for data retrieval and addition. The application employs Handlebars.js as the templating engine for dynamic content rendering.




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

**RESTful API:** Utilizing Node.js and Express.js, the application provides both GET and POST routes to facilitate seamless interaction with the database.
![code snippet]()

**Database Integration:** MySQL is employed as the relational database, and Sequelize ORM streamlines data management, ensuring efficient and organized storage.

**Deployment on Heroku:** API Adventures is hosted on Heroku, ensuring accessibility and scalability. The deployment includes the necessary data, ensuring a fully functional application.

**Polished UI:** The user interface is thoughtfully designed, adhering to best practices in user experience. It ensures an intuitive and visually appealing interaction for users.

**Responsiveness:** The application is responsive, adapting seamlessly to various screen sizes and devices, providing an optimal user experience.
![screenshot of mobile](./public/image/Mobile%20View.png)

**Interactivity:** API Adventures engages users by accepting and responding to their inputs. It fosters dynamic interactions to enhance user engagement.

**MVC Folder Structure:** Following the MVC paradigm, the project maintains a well-organized folder structure. Models, views, and controllers are distinct and logically organized, promoting code maintainability.

**Authentication with Express-Session and Cookies:** User authentication is a priority, implemented using Express-session and cookies. This ensures secure access to user-specific data and actions.
![code snippet]()

**Environment Variable Security:** API keys and sensitive information are protected using environment variables, adding an extra layer of security to the application.
![code snippet]()

**Clean Repository:** The project repository adheres to quality coding standards. It demonstrates consistency in file structure, naming conventions, and follows best practices for class and ID naming, indentation, and includes high-quality comments for code documentation.

 **Random Photo Search Technology:** This application utilizes the Unsplash API to get a random photo and sets it as a Project or Resource category profile image.  The Unsplash API allows us to filter the searches and retrieve a random photo for the user and a search a topic related photo for the resource category.
 
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
