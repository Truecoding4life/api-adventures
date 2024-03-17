const { Resource } = require("../models");

const resourceData = [
  {
    title: "BARBECUE CHICKEN BASIL CAL ZONES",
    description:
      "This recipe can be easily doubled. This freezes wonderfully and makes a great meal/snack to have on hand. You can also make these and eat them hot out of the oven. This recipe was created for Ready, Set, Cook!",
    image_url:
      "https://static.toiimg.com/thumb/83330410.cms?imgsize=498236&width=800&height=800",
    user_id: "5",
    category_id: "2",
  },
  {
    title: "Artificial Intelligence (AI) and Machine Learning",
    description: `Artificial intelligence (AI) is a way to make computers smart and able to do things that normally only humans can do, like learning, figuring things out, and making choices.
        Machine learning (ML) is a subset of AI that involves the use of algorithms and statistical models to enable computers to learn and improve their performance on a specific task without being explicitly programmed. ML algorithms are trained using large datasets and can make predictions or take actions based on the patterns and trends identified in the data`,
    image_url:
      "https://usdm.com/app/uploads/elementor/thumbs/Digital-Head-poob1uft775rqq23nk2f5l6qxl1j7m4mvbwsfcts6y.jpg",
    user_id: "2",
    category_id: "7",
  },
  {
    title:
      "you're looking for information about Content API in Merchant Center ?",
    description: `The Content API for Shopping allows apps to interact directly with the Merchant Center platform, vastly increasing the efficiency of managing large or complex Merchant Center accounts. The Content API for Shopping can be used to manage your Merchant Center configuration, act as an input source for your product data, and provide reporting. Learn more about getting started with Content API for Shopping`,
    image_url:
      "https://nordicapis.com/wp-content/uploads/How-eCommerce-Businesses-Are-Leveraging-the-API-Economy-1024x576.png",
    user_id: "3",
    category_id: "8",
  },
  {
    title: "Unveiling the Future",
    description: `The concept of the Meta verse, which is a virtual world where people can interact and engage with each other in a digital environment, has been around for some time. With the advancement of technology, the metaverse has become more feasible and accessible, leading to increased interest and investment in this space.

        In recent years, companies such as Facebook, Google, and Microsoft have been investing heavily in the development of metaverse technologies. This has led to the creation of virtual reality and augmented reality devices, such as the Oculus Quest and the HoloLens, which can be used to access the Meta verse.
        Additionally, the pandemic has accelerated the adoption of digital technologies and remote working, leading to a greater interest in virtual experiences and online communities. As a result, there is potential for the metaverse to grow rapidly in the coming years, with some experts predicting that it could become a multi-billion dollar industry.`,
    image_url:
      "https://www.searchenginejournal.com/wp-content/uploads/2023/04/the-metaverse-what-is-it-2-64412b87eaf6c-sej.png",
    user_id: "1",
    category_id: "6",
  },
  {
    title: "Integrate the most reliable real-time calendar sync API",
    description: `The Cronofy calendar API is the choice of SaaS applications who care about reliability and performance at scale. Connect with Google, Microsoft and Apple calendars, even on-premise Exchange, with a 99.99% service guarantee.`,
    image_url:
      "https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",
    user_id: "4",
    category_id: "5",
  },
];

const seedResource = () => Resource.bulkCreate(resourceData);

module.exports = seedResource;
