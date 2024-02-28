<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    
![logo](https://github.com/ryanshz/project4/assets/58790036/1e1f5a87-fe43-4cd9-8736-6a3a18d0ec3c)
  </a>
  <h3 align="center">Collaborative Online Whiteboard</h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

QuickQollab allows teams to access a simple website and collaborate in an online whiteboard environment. The whiteboard will update in real-time as people write and discuss their ideas.

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

<!-- GETTING STARTED -->
## Getting Started

To get a local repository running, follow these steps.

### Prerequisites
* VSCode (or any relevant IDE)
* The latest Python version.
* Terminal or Command-Line Interface (preferably Git-Bash)
* The latest NodeJS version.

### Installation

_Below are instructions for setting up a local repository, installing requirement packages, and first step to running the program._

_Assume you are at the root of the project directory._
1. Clone the repository.
   ```sh
   git clone https://github.com/ryanshz/project4
   ```
   ```sh
   cd quickqollab
   ```
2. Install NPM packages.
   ```sh
   npm install package.json
   ```
3. Create your virtual environment for flask (Python) and install PIP packages.
   
   _Create virtual environment_
   ```sh
   python -m venv api/venv
   ```
   _Activate virtual environment_
   ```sh
   // Windows + Git-Bash
   source ./api/venv/Scripts/activate
   
   // Mac/Linux
   source ./api/venv/bin/activate
   
   // Windows + Powershell
   \api\venv\Scripts\activate.bat
   
   ```
   _Install PIP packages_
   ```sh
   pip install -r ./api/requirements.txt
   ```
4. Start the project.
   ```sh
   npm start
   ```
   * The project starts using React first. So a new tab will open in the browser with ip `localhost:3000`; not `127:0.0.1:5000`

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
<p align="right">(<a href="#readme-top">back to top</a>)</p>




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
