const express = require('express');
const OngsController = require('./controllers/OngsController');
const IncidentesController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentesController.index);
routes.post('/incidents', IncidentesController.create);
routes.delete('/incidents/:id', IncidentesController.delete);

module.exports = routes;
