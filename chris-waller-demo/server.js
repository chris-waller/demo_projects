const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// TODO get rid of CORS eventually
app.use(cors())

// create a GET route
app.get('/express_backend', (req, res) => {  
  console.log("API GET request made to /express_backend");
  res.json({
    currentTime: Date.now(),
  });
});