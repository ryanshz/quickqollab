<!-- PROJECT LOGO -->
<br />
<div align="center">
  
    
![logo](https://i.imgur.com/XMBkZ9E.png)
  </a>
  <h3 align="center">Collaborative Online Whiteboard</h3>
</div>
<br>

<!-- ABOUT THE PROJECT -->
## About The Project
**This is our Final Senior Capstone Project (ITSC 4155 | Spring 2024).** <br/>
quickqollab allows teams to access a simple website and collaborate in an online whiteboard environment. The whiteboard will update as people write and discuss their ideas in real-time.

### Built With

[![Flask][Flask]][Flask-url]
[![React][React.js]][React-url]
[![Tailwind][Tailwind]][Tailwind-url]
[![Postgres][Postgres]][Postgres-url]

### Language used

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![image](https://github.com/ryanshz/quickqollab/assets/58790036/0704400d-f10f-429e-afe6-29ac3ba457a2)

### Youtube Video
[Click here to watch a video demo on YouTube](https://www.youtube.com/watch?v=J53p7FxwRv8)

### Breakdown
* The software methodologies used were a crude version of Agile with weekly sprints managed by Brandon.
  * Weekly sprint meetings (Monday & Thursday at 9:00 pm EST).
  * Used Github Projects for managing and assigning user stories till completion.
  * Releases are made after a successful milestone or before a deadline.
  * Peer programming only occurs when necessary.
* Mistakes:
  * Not using Docker - Our local development wasn't standardized. As a result, some team members encountered issues running their projects in their local environment.
    * Untraceable errors and compiling issues arise.
    * If we had docker, we could standardize our local development and avoid hearing the usual phrase "This works on my computer though".
  * Concurrently NPM package - To have `Flask` & `React.js` run simultaneously, we needed to set up this npm library.
    * It worked fine, but we could have used Docker to containerize our application easily.
      * This also includes our database, meaning that in one image we will have three containers that run consecutively and can still communicate with one another.
      * This approach would prevent everyone from installing `PostgreSQL` & a database IDE on their computer since the database would be containerized either way.
  * Konva.js - With the whiteboard mechanic, we decided to use the standard `canvas.js`.
    * It was not heavily abstracted, and we spent a lot of time setting up the whiteboard and the socket mechanic.
    * `Konva.js` is a framework built around `canvas.js`, allowing us to implement a working prototype quickly.
  * Lack of comments & proper code documentation - We're beginners and we're learning as we develop our project.
    * A lack of documentation and comments meant that each developer had to read lots of source code to gain a better context.
    * Our meetings are usually an hour long, and we discuss and try to resolve our misunderstandings or address user story issues.
    * Though, the process would have been rudimentary if everything had been documented beforehand to reduce the weight of uncertainty.
* Project structure:
  * Our project is set up initially with `React.js` where the `src` folder contains most of the `.jsx` files & other react components. `Flask` file systems are under the `api` folder.
  * For streamlining development and setup workflows, we created two `bash sh` scripts. One for initial project setup & the other for routinely starting our project for development. All **instructions** are located in the `build.md`.
  * `public` folder holds our pictures, videos, and other related media.
  * Within our `src` folder:
    * `components` holds the building block for each page.
    * `config` contains static data (which are not utilized anymore due to mitigation to the database).
    * `middleware` handles our authentication context - Protected routes, Redirects, & session storage (stored locally in the browser or client-side).
    * `pages` are the main component (parent). All of the building blocks from the `component` folder correspond under the parent component tree (pages).
  * Within our `api` folder:
    * We used the MVC architecture (Model View Controller). The view was not required because we wanted to send a JSON payload to `React.js` to consume.
    * Dependency injection design is implemented to prevent having other object instances with a different configuration to prevent unexpected behavior in our API.
      * Libraries such as `bcrypt`, `sqlalchemy`, `cors`, & `socketio` are initialized within `app.py` only once.
        * This approach ensures reusability by referencing an instance externally instead of creating another object again.
    * Blueprints are used to modularize our routing which comes with Flask.
    * Model serves as the interface to our tables in our database.
    * Controller has all the main business logic that is a callback to the corresponding routes.
    * No tests were written (not enough time to implement).
    * `utils` contains classes that instantiate an object (sqlalchemy, bcrypt).
* General Architecture and Design mechanics:
![Untitled Diagram](https://github.com/ryanshz/quickqollab/assets/58790036/0f5a5e5b-1ee9-45e0-97ba-c88698e201dc)
![Untitled Diagram(1)](https://github.com/ryanshz/quickqollab/assets/58790036/d340219d-cd2d-4b26-9421-cc4219e8ff73)


  

## Screenshots
![Screenshot 2024-06-05 103844](https://github.com/ryanshz/quickqollab/assets/58790036/7c8f4b9c-cdbe-40f0-a3a7-a70e351ca9ea)


<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]: images/screenshot.png
[Flask]: https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white
[Flask-url]: https://flask.palletsprojects.com/en/3.0.x/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Postgres]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[Postgres-url]: https://www.postgresql.org/


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

![809959355772305418](https://i.imgur.com/8gMl1O2.png)
![809959355772305418](https://i.imgur.com/8gMl1O2.png)
![809959355772305418](https://i.imgur.com/8gMl1O2.png)
![809959355772305418](https://i.imgur.com/8gMl1O2.png)
![809959355772305418](https://i.imgur.com/8gMl1O2.png)
![809959355772305418](https://i.imgur.com/8gMl1O2.png)
![809959355772305418](https://i.imgur.com/8gMl1O2.png)


