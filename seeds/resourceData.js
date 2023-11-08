const { Resource } = require('../models');

const resourceData = [
    {
        title: "BARBECUE CHICKEN BASIL CALZONES",
        description: "This recipe can be easily doubled. This freezes wonderfully and makes a great meal/snack to have on hand. You can also make these and eat them hot out of the oven. This recipe was created for Ready, Set, Cook! #6",
        image_url:"",  
        user_id: "2",
        category_id:"1"
    },
    {
        username: "andy",
        email: "andy@google.com",  
        password: "password"
    }
];

const seedResource = () => Resource.bulkCreate(resourceData);

module.exports = seedResource;
