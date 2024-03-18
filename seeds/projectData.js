const { Project } = require('../models');

const projectData = [
    {
        title:"Calendar App",
        description:"A simple calendar app",
        deployed_url:"https://calendar-app.com",
        repo_url:"",
        user_id:"1"
    },
    {
        title:"Calendar1 App1",
        description:"A simple calendar app",
        deployed_url:"https://calendar-app.com",
        repo_url:"",
        user_id:"2"
    },
];

const seedProject = () => Project.bulkCreate(projectData);

module.exports = seedProject;
