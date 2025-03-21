const express = require("express");
const menuController = require("../controller/menuControllers");
 const router = express.Router();

 router.post("/menus",menuController.createMenu);
 router.post("/menus/:menuId/items",menuController.addMenuItem);
 router.get('/menus',menuController.getMenus);
 router.get('/menus/:menuId',menuController.getSinglemenu);












 module.exports=router;