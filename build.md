<!-- GETTING STARTED -->
# Getting Started

To get a local repository running, follow these steps.

### Prerequisites
* VSCode (or any relevant IDE)
* Git-Bash (or any relevant terminal)
* The latest Python version.
* The latest NodeJS version.
* Datagrip (or any relevant Database IDE)

### Database Installation (Required) <a name="database-installation"></a>
_Below are instructions for setting up a local database, which is required for Flask to operate safely._
#### 1. Create a temporary project.  <br>
<img src="https://github.com/ryanshz/quickqollab/assets/58790036/2c983dc8-7091-468a-b25c-4a65061ea749" width="600" height="400">  <br>
#### 2. Select `PostgreSQL` as your database's source. <br>
<img src="https://github.com/ryanshz/quickqollab/assets/58790036/4a37667a-71af-4039-ab65-a8a33d28fc61" width="600" height="400">  <br>
#### 3. Fill in the required information (you should have created a username and password upon installation of Datagrip). <br>
<img src="https://github.com/ryanshz/quickqollab/assets/58790036/169e11ef-e4a7-4690-abac-bcc6eb1e387b" width="600" height="400">  <br>
#### 4. Within the project directory `/api`, visit the `schema.sample.sql` and copy everything [CTRL + C or CMD + C] inside.  <br>
<img src="https://github.com/ryanshz/quickqollab/assets/58790036/48fc3a64-df42-4faf-9f51-2ef3b2ac0fae" width="600" height="400"> <br>
#### 5. Insert into the console and click the green play button.  <br>
<img src="https://github.com/ryanshz/quickqollab/assets/58790036/cabc9b20-35e7-4b3b-88e3-3831ea0defa2" width="600" height="400"> <br>
#### 6. Create a `.env` file using the sample template from `.env.sample` within the `/api` directory. Secret key can be anything, for simplicity, use "abc" <br>
<img src="https://github.com/ryanshz/quickqollab/assets/74262047/a14c33af-439c-4548-a5ba-efd0317dc51f" width="600" height="400"> <br>

### Installation

_Below are instructions for setting up a local repository, installing requirement packages, and the first step to running the program._ <br>
_Assuming you are at the root of the project directory._
1. Clone the repository.
   ```sh
   git clone https://github.com/ryanshz/quickqollab
   ```
   ```sh
   cd quickqollab
   ```
2. Run `setup.sh` for first-time setup (This will launch the project after successful installation).
   ```sh
   bash ./setup.sh
   ```
   ```sh
   sh ./setup.sh // Works the same
   ```
   ![setup](https://github.com/ryanshz/quickqollab/assets/58790036/73e34f0e-9cf8-48cf-b59b-9dca3f9530b5)
3. Run `startup.sh` to start the project again for now on. (Assuming you completed first-time setup).
   ```sh
   bash ./startup.sh
   ```
   ```sh
   sh ./startup.sh // Works the same
   ```
   ![startup](https://github.com/ryanshz/quickqollab/assets/58790036/2059e8b0-7cbe-4d07-bf97-c923134a8ec8)
   * The project starts using React first. So a new tab will open in the browser with ip `localhost:3000`; not `127:0.0.1:5000`

<br><br>
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
