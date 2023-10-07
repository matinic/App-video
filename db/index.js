'use strict';

require('dotenv').config()
const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes, Op } = require('sequelize');
const basename = path.basename(__filename);
const db = {};

const  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  port: 5432,
  dialect: "postgres",
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize,DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.models = sequelize.models
db.Op = Op;


module.exports = db;
