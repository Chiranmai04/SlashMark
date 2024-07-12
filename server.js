const express = require('express');
const path = require('C:\Users\Administrator\Downloads\Telegram Desktop\Product-Landing-Page-master\Product-Landing-Page-master\index.html');
const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route to serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
