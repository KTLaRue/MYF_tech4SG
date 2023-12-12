const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3001;

const db = new sqlite3.Database("sqliteFoodDatabase.db");

// Create tables if not exists
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS stores (
      store_id INTEGER PRIMARY KEY,
      store_name TEXT,
      location TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      product_id INTEGER PRIMARY KEY,
      product_name TEXT,
      quantity INTEGER,
      ingredients TEXT,
      store_id INTEGER,
      FOREIGN KEY (store_id) REFERENCES stores (store_id)
    )
  `);
});

app.use(express.json());

// API endpoint to get all products with store information
app.get("/api/productsWithStores", (req, res) => {
  const query = req.query.query;

  let sql = `
    SELECT p.product_id, p.product_name, p.quantity, p.ingredients, s.store_name, s.location
    FROM products p
    JOIN stores s ON p.store_id = s.store_id
  `;

  if (query) {
    sql += ` ORDER BY ${query}`;
  }

  db.all(sql, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // Generate HTML response for products with stores
      const htmlResponse = generateHtmlResponse(rows, query, "Products with Stores");

      // Send the HTML response
      res.send(htmlResponse);
    }
  });
});

// API endpoint to get all stores
app.get("/api/stores", (req, res) => {
  const query = req.query.query;

  let sql = "SELECT * FROM stores";

  if (query) {
    sql += ` ORDER BY ${query}`;
  }

  db.all(sql, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // Generate HTML response for stores
      const htmlResponse = generateHtmlResponse(rows, query, "Stores");

      // Send the HTML response
      res.send(htmlResponse);
    }
  });
});

// Helper function to generate an HTML response from the data
function generateHtmlResponse(data, currentQuery, tableName) {
  if (!data || data.length === 0) {
    return `<p>No data available for ${tableName}.</p>`;
  }

  const headers = Object.keys(data[0]);
  const headerRow = headers.map(header => `<th>${header}</th>`).join('');

  const rows = data.map(row => {
    const cells = headers.map(header => `<td>${row[header]}</td>`).join('');
    return `<tr>${cells}</tr>`;
  }).join('');

  const queryButtons = headers.map(header => {
    const activeClass = currentQuery === header ? 'active' : '';
    return `<button class="${activeClass}" onclick="performQuery('${header}', '${tableName}');">${header}</button>`;
  }).join('');

  const toggleButton = `<button onclick="toggleTable('${tableName}');">Switch to ${tableName === 'Products with Stores' ? 'Stores' : 'Products with Stores'}</button>`;

  return `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 20px;
          }

          h1, h2 {
            color: #333;
          }

          table {
            border-collapse: collapse;
            width: 100%;
            margin-top: 20px;
          }

          th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
          }

          th {
            background-color: #f2f2f2;
          }

          button {
            margin: 10px;
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
            background-color: #4caf50;
            color: white;
            border: none;
          }

          button.active {
            background-color: #45a049;
          }
        </style>

        <script>
          function performQuery(query, tableName) {
            window.location.href = '/api/' + (tableName === 'Products with Stores' ? 'productsWithStores' : 'stores') + '?query=' + query;
          }

          function toggleTable(currentTable) {
            const targetTable = currentTable === 'Products with Stores' ? 'Stores' : 'Products with Stores';
            window.location.href = '/api/' + (targetTable === 'Products with Stores' ? 'productsWithStores' : 'stores');
          }
        </script>
      </head>
      <body>
        <h1>${tableName}</h1>
        <p>Click on the column headers to sort. Use the example queries below.</p>
        <table>
          <thead>
            <tr>${headerRow}</tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>

        <h2>Example Queries (${tableName}):</h2>
        ${queryButtons}
        
        ${toggleButton}
      </body>
    </html>
  `;
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
