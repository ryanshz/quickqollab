<!-- PROJECT LOGO -->
<br />
<div align="center">
  
    
![logo](https://github.com/ryanshz/project4/assets/58790036/1e1f5a87-fe43-4cd9-8736-6a3a18d0ec3c)
  </a>
  <h3 align="center">Collaborative Online Whiteboard</h3>
</div>
<br>

<!-- ABOUT THE PROJECT -->
## About The Project
**This is our Final Senior Capstone Project (ITSC 4155 | Spring 2024).** <br/>
quickqollab allows teams to access a simple website and collaborate in an online whiteboard environment. The whiteboard will update as people write and discuss their ideas in real time.

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

### Breakdown
* When we began our project, most of us needed to gain relevant experience in developing a full-fledged web application. We had no experience developing `React.js` and building a consumable API with `Flask`. Now here we are! We managed and successfully met our goal!
* The software methodologies used was a crude version of Agile with weekly sprints managed under Brandon.
  * Weekly sprint meetings (Monday & Thursday at 9:00 pm EST).
  * Used Github Projects for managing and assigning user stories till completion.
  * Releases are made after a successful milestone or before a deadline.
  * Peer programming only occurs when necessary.
* Mistakes:
  * Not using Docker - Our local development wasn't standardized. As a result, some team members ran into issues running their projects in their local environment.
    * Untraceable errors and compiling issues arise.
    * If we had docker, we could standardize our local development and avoid hearing the usual phrase "This works on my computer though".
  * Concurrently NPM package - To have `Flask` & `React.js` run simultaneously, we needed to set up this npm library.
    * It worked fine, but we could have used Docker to containerize our application easily.
      * This also includes our database, meaning that in one image we will have three containers that run consecutively and can still communicate with one another.
      * This approach would prevent everyone from installing `PostgreSQL` & a database IDE on their computer since the database would be containerized either way.
  * Konva.js - With the whiteboard mechanic, we decided to use the standard `canvas.js`.
    * It was not heavily abstracted and we spent lots of time setting up the whiteboard and the socket mechanic.
    * `Konva.js` is a framework built around `canvas.js`, allowing us to implement a working prototype quickly.
  * Lack of comments & proper code documentation - We're beginners and we're learning as we develop our project.
    * A lack of documentation and comments meant that each developer had to read lots of source code to gain a better context.
    * Our meetings are usually an hour long, and we discuss and try to resolve our misunderstandings or address user story issues.
    * Though, the process would have been rudimentary if everything had been documented beforehand to reduce the weight of uncertainty.
* Project structure:
  * Our project is set up initially with `React.js` where the `src` folder contains most of the `.jsx` files & other react components. `Flask` file systems are under the `api` folder.
  * For streamlining development and setup workflows, we created two `bash sh` scripts. One for initial project setup & the other for routinely starting our project for development. All **instructions** are located in the `build.md`.

## Screenshots
[Watch the demo on YouTube](https://www.youtube.com/watch?v=J53p7FxwRv8)
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

![809959355772305418](https://github.com/ryanshz/project4/assets/58790036/de9aba98-6313-4e27-8434-f33ed5d5dc59)
![809959355772305418](https://github.com/ryanshz/project4/assets/58790036/de9aba98-6313-4e27-8434-f33ed5d5dc59)
![809959355772305418](https://github.com/ryanshz/project4/assets/58790036/de9aba98-6313-4e27-8434-f33ed5d5dc59)
![809959355772305418](https://github.com/ryanshz/project4/assets/58790036/de9aba98-6313-4e27-8434-f33ed5d5dc59)
![809959355772305418](https://github.com/ryanshz/project4/assets/58790036/de9aba98-6313-4e27-8434-f33ed5d5dc59)
![809959355772305418](https://github.com/ryanshz/project4/assets/58790036/de9aba98-6313-4e27-8434-f33ed5d5dc59)
![809959355772305418](https://github.com/ryanshz/project4/assets/58790036/de9aba98-6313-4e27-8434-f33ed5d5dc59)
![809959355772305418](https://github.com/ryanshz/project4/assets/58790036/de9aba98-6313-4e27-8434-f33ed5d5dc59)
