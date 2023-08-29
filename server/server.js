const express = require('express');
const path = require('path');

const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const cors = require('cors');

const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express();

// const { authMiddleware } = require('./utils/auth');
