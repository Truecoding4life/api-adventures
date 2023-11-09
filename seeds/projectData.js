const { Project } = require('../models');

const projectData = [
    {
        title:"Calendar App",
        description:"A simple calendar app",
        deployed_url:"https://calendar-app.com",
        repo_url:"",
        user_id:"1"
    }
];

const seedProject = () => Project.create(projectData);

module.exports = seedProject;
