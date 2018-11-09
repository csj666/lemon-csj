var express = require('express');
var router = express.Router();
var usersLemon = require("./user/index.js");

/*添加用户和id*/
router.post('/', usersLemon.addLemon);

module.exports = router;