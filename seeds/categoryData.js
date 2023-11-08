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
    },    
    {
        category_name: "shopping",
    },

];

const seedResource = () => Category.bulkCreate(categoryData);

module.exports = seedResource;
