const express = require("express");
const routes = require('./routes/');
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cloudinary = require('cloudinary');

const app = express()
const router = express.Router
const url = process.env.MONGODB_URI ||
'mongodb://localhost:27017/medium'
