
//libraries imported: express + body-parser + cors
const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./api/routes/BookRoutes')
//https://medium.com/zero-equals-false/using-cors-in-express-cac7e29b005b
const cors = require('cors')

//create new application
const app = express();

//specify a port and pass it via an environment variable, or predevine it
const port = process.env.PORT || 3000;

//routes get added-> we create our API route
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/v1/books', bookRoutes);
// Ruten werden autmatisch dazugef.



// Start Server listening on Port ${port}
// if we have an error we send an error message to our terminal
app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`Server listening at http://localhost:${port}`);
    }
});
