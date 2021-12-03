const express = require('express');

const router = express.Router();

const schedulerController = require('../controllers/scheduleController')

router.post('/test', schedulerController.scheduled);

module.exports = router;