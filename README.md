# MYF_tech4SG




This is a project that aim to reduce food waste and help people find food that matches their budget, lifestyle, and dietary restrictions through a website 

map-your-food:
page hosted at http://localhost:3000/ once repo is pulled.

Make sure you have npm installed: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
With npm installed navigate to map-your-food
Run the following commands: 
npm install 
npm start
A page should pop up to http://localhost:3000/


database info:
if you want to pull the database and use it locally, youll need postgresql (psql) and you can run the command "psql -U your_username -d your_new_database -f mapYourFood.sql"

Sqlite Database Usage: 

* MAC Install: brew install sqlite

* Initalize The Database: sqlite3 sqliteFoodDatbase.db

* View Tables: .tables

* View Contents of a table: select * from products order by product_id;

* Select statement for table example: select * from products order by product_id;

