const express = require('express');
const app = express();
const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');

app.use(fileUpload({ createParentPath: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));
// app.use('/uploads', express.static('uploads'));
app.use(require('./routes'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
  });
});

// workflow:
/*
Upload an image to data folder
Sequelize model will contain name of file and post id.
for user page, can make GET request that finds all image names belonging to posts with that user id.
Can then loop through the image names and append each name to the name of the directory from which the images are served
*/
