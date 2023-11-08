const { Project } = require('../models');

const projectData = [
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

const seedProject = () => Category.bulkCreate(projectData);

module.exports = seedProject;
