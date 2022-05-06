### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/danielolaszy/com3014.git
   ```
2. Install npm packages
   ```sh
   npm i
   ```
3. Enter the positionstack API key in a `.env` file
   ```JS
   REACT_APP_API_KEY=
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
