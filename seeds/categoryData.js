const { Category } = require('../models');

const categoryData = [
    {
        category_name: "sports",
    },
    {
        category_name: "foods",
    },
    {
        category_name: "music",
    },
    {
        category_name: "weather",
       
    },
    {
        category_name: "events",
    },    
    {
        category_name: "gaming",
    },    
    {
        category_name: "technology",
        image_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },    
    {
        category_name: "shopping",
        image_url: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
