### Installation

1. Install docker and start the docker engine
2. Build the docker container
   ```sh
   docker compose build
   ```
3. Run the container
   ```sh
   docker compose up
   ```


### Running the backend server for Crimereport

1. Install to establish api
   ```sh
   pip install djangorestframework django-cors-headers
   ```
2. Install to establish mssql connection for Crimereport backend
   ```sh
   pip install mssql-django
   ```
3. Install sql driver for Crimereport backend
   Driver [link](https://www.microsoft.com/en-us/download/details.aspx?id=50420)

4. To run Crimereport backend server use
   ```
   py manage.py runserver 7000
   ```
