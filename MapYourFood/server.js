const sqlite3 = require('sqlite3').verbose();

const dbPath = 'assets/sqliteFoodDatabase.db';

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error(`Error opening database ${dbPath}: ${err.message}`);
  } else {
    console.log(`Connected to the database ${dbPath}`);

    // Example query
    db.all('SELECT * FROM your_table', (queryErr, rows) => {
      if (queryErr) {
        console.error(`Error running query: ${queryErr.message}`);
      } else {
        console.log(rows);
      }

      // Close the database connection
      db.close((closeErr) => {
        if (closeErr) {
          console.error(`Error closing database: ${closeErr.message}`);
        } else {
          console.log(`Disconnected from the database`);
        }
      });
    });
  }
});