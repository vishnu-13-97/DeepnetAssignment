const express = require("express");
const Menu = require("../models/menu");
const MenuItem = require("../models/menuItem");


const createMenu = async(req,res)=>{
    try {
            const { name, description } = req.body;
            const menu = new Menu({ name, description });
            await menu.save();
            res.status(201).json(menu);
        } catch (error) {
            res.status(500).json({ message: "Error creating menu", error });
        }
    

}

const addMenuItem = async (req,res)=>{
    try {
        const { menuId } = req.params;
        const { name, description, price } = req.body;

        const menuItem = new MenuItem({ menuId, name, description, price });
        await menuItem.save();

      
        await Menu.findByIdAndUpdate(menuId, { $push: { items: menuItem._id } });

        res.status(201).json(menuItem);
    } catch (error) {
        res.status(500).json({ message: "Error adding menu item", error });
    }
}


const getMenus = async (req,res)=>{
    try {
        const menus = await Menu.find().populate("items");
        res.json(menus);
    } catch (error) {
        res.status(500).json({ message: "Error fetching menus", error });
    }
}

const getSinglemenu =  async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.menuId).populate("items");
        if (!menu) return res.status(404).json({ message: "Menu not found" });
        res.json(menu);
    } catch (error) {
        res.status(500).json({ message: "Error fetching menu", error });
    }
}


module.exports={
    createMenu,
    addMenuItem,
    getMenus,
    getSinglemenu
}