const { Category } = require('../models');

const categoryData = [
    {
        category_name: "sports",
    },
    {
        category_name: "foods",
    },
    {
        category_name: "musics",
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

];

const seedResource = () => Category.bulkCreate(categoryData);

module.exports = seedResource;
