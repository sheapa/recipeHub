const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config();

// This file empties the recipe collection and inserts the recipes below.

mongoose.connect(
  process.env.MONGODB_URI ||"mongodb://localhost/forkingDelicous"
);

const recipeSeed = [
  {
    title: "Beef Wellington",
    description: "Wellington was my first and favorite cat, but you can use the liver of an animal of your choice for the pate in this classic British dish. Note that Beef Wellington should be served with the center slightly pink",
    instruction: [
        
            "Preheat oven to 425 degrees F. Place beef in a small baking dish and spread with 2 Tbs softened butter. Bake for 10 to 15 minutes, until browned. Remove from pan and allow to cool completely.",
        
        
            "Melt 2 tablespoons butter in a skillet over medium heat. Saute onion and mushrooms in butter for 5 minutes. Remove from heat, and let cool.",
        
        
            "Mix together pate and 2 tablespoons softened butter, and season with salt and pepper. Spread cat-liver pate over beef. Top with onion and mushroom mixture.",
        
        
            "Roll out the puff pastry dough, and place beef in the center. Fold up, and seal all the edges, making sure the seams are not too thick. Place meat in a 9x13 inch baking dish, cut a few slits in the top of the dough, and brush with egg yolk.",

            "Bake at 450 degrees F (230 degrees C) for 10 minutes, then reduce heat to 425 degrees F (220 degrees C) for 10 to 15 more minutes, or until pastry is a rich, golden brown. Set aside, and keep warm.",
       
            "Place all reserved juices in a small saucepan over high heat. Stir in meat stock and red wine; boil for 10 to 15 minutes, or until slightly reduced. Strain, and serve with beef."
      
    
    ],
    ingredients: [
        {
            name: "fresh mushrooms",
            quantity: .5,
            unit: "cup",
        },
        {
            name: "cat liver pate",
            quantity: 2,
            unit: "ounces",
        },
        {
            name: "butter, softened",
            quantity: 3,
            unit: "tablespoons",
        },
        {
            name: "salt and pepper",
            quantity: 0,
            unit: "to taste",
        },
        {
            name: "frozen puff pastry, thawed",
            quantity: 1,
            unit: "(17.5 oz) package",
        },
        {
            name: "egg yolk, beaten",
            quantity: 1,
            unit: "",
        },
        {
            name: "beef broth",
            quantity: 1,
            unit: "(10.5 oz) can",
        },
        {
            name: "red wine",
            quantity: 2,
            unit: "tablespoons",
        },
    ],
    tips: "If you don't have any cat liver for the pate, any formerly beloved pet will do",
    yield: "8 servings",
    categories: ["roadkill", "british", "old-school"],
    feedback: ["blah blah"],
    activeTime: "30 min",
    inactiveTime: "30 min",
    addons: "Cat is best served alone",
    forkedFrom: "no forking idea",
    images: "https://78.media.tumblr.com/f259e44ca20397f2c639cd2274dd5895/tumblr_oyn82bDPCG1ul90j7o6_r2_400.png",
    pubDate: "today",
    likes: 1,
    saves: 2,
    forks: 3,
    author: "Ryan Anthony Antonelli",
  },
  
  {
    title: "Pork Chops in Garlic Mushroom Sauce",
    description: "This recipe is my twist on a fancy restaurant meal we got on Valentine's Day. The recipe has half the amount of garlic than was originally used. Hope everyone else enjoys it just as much as we do. Garnish with fresh parsley, chives, or thyme leaves.",
    instruction: [
        
            "Season both sides of pork chops with paprika, salt, and pepper.",
        
        
            "Heat a large skillet over medium-high heat; add 2 tablespoons butter. Sear pork chops until golden brown and no longer pink in the center, 2 to 4 minutes per side. Remove pork chops from the skillet and set aside.",
        
        
            "Melt remaining butter in the same skillet over medium-high heat. Add mushrooms and cook until golden and excess moisture evaporates, about 5 minutes. Add garlic and mustard; cook until garlic is fragrant, about 1 minute.",
        
        
            "Add flour to the skillet, stirring to remove any lumps. Slowly add beef broth, whisking until incorporated. Season with salt and pepper. Reduce heat to medium and simmer, stirring often, until sauce thickens, about 5 minutes. Check for seasoning again.",

            "Return pork chops to the skillet and cook until heated through, about 1 minute. Serve hot.",
    ],
    ingredients: [
        {
            name: "boneless pork chops",
            quantity: 2,
            unit: "pounds",
        },
        {
            name: "paprika",
            quantity: 1/2,
            unit: "teaspoon",
        },
        {
            name: "barley",
            quantity: 3,
            unit: "acorns worth",
        },
        {
            name: "schmaltz, german",
            quantity: 3,
            unit: "is a lot",
        },
        {
            name: "froodles",
            quantity: 1,
            unit: "(17.5 oz) package",
        },
        {
            name: "karma",
            quantity: 1,
            unit: "laser",
        },
    ],
    tips: "Fee Fi Fo Fum",
    yield: "8 servings",
    categories: ["roadkill", "piggy"],
    feedback: ["blah blah"],
    activeTime: "1 hour",
    inactiveTime: "the rest of your life",
    addons: "no",
    forkedFrom: "no",
    images: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7783629.jpg&w=1200&h=678&c=sc&poi=face&q=85",
    pubDate: "today",
    likes: 1000,
    saves: 20000,
    forks: 300000,
    author: "Barney the Dinosaur",
  },
  
  {
    title: "Slow Cooker Creamy Chicken Taco Soup",
    description: "Reminiscent of the very popular dish King Ranch Chicken in the form a soup. With all the same flavors and the convenience of throwing everything into a slow cooker, this will also quickly become a favorite. Top with fried corn tortilla strips, if desired.",
    instruction: [
        
            "Spray a slow cooker with cooking spray. Add onions, bell pepper, and 1 teaspoon salt. Stir in chicken broth, diced tomatoes, condensed soup, and chiles.",
        
        
            "Combine oil, taco seasoning, 1 teaspoon salt, cumin, and black pepper in a bowl. Add chicken and toss to coat on all sides. Transfer to the slow cooker.",
        
        
            "Cook on Low until chicken is no longer pink in the center and the juices run clear, 2 to 3 hours. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C). Remove from the slow cooker and shred.",
        
        
            "Add Neufchatel cheese to the slow cooker and stir until melted. Return chicken to the slow cooker and cook until warmed through, 20 to 30 minutes more.",   
    ],
    ingredients: [
        {
            name: "diced onion",
            quantity: 1,
            unit: "cup",
        },
        {
            name: "diced bell pepper",
            quantity: 1,
            unit: "cup",
        },
        {
            name: "salt, divided",
            quantity: 2,
            unit: "teaspoons",
        },
        {
            name: "chicken broth",
            quantity: 2,
            unit: "cups",
        },
        {
            name: "diced tomatoes and green chiles",
            quantity: 1,
            unit: "(10.5 oz) can",
        },
        {
            name: "condensed cream of mushroom soup",
            quantity: 1,
            unit: "(10 oz) can",
        },
        {
            name: "diced green chiles",
            quantity: 1,
            unit: "(4 oz) can",
        },
        {
            name: "cooking oil",
            quantity: 2,
            unit: "tablespoons",
        },
        {
            name: "taco seasoning",
            quantity: 1,
            unit: "tablespoon",
        },
        {
            name: "ground cumin",
            quantity: 1/2,
            unit: "teaspoon",
        },
        {
            name: "ground black pepper",
            quantity: 1/4,
            unit: "teaspoon",
        },
        {
            name: "skinless, boneless chicken breast",
            quantity: 1,
            unit: "pound",
        },
        {
            name: "neufchatel cheese, softened",
            quantity: 1,
            unit: "(8 oz) package",
        },
    ],

    tips: "Don't eat this",
    yield: "Enough for 1 rural county jail",
    categories: ["roadkill", "southern", "trash"],
    feedback: ["blah blah"],
    activeTime: "1 hour",
    inactiveTime: "1 hour 30 min",
    addons: "",
    forkedFrom: "",
    images: "https://www.allrecipes.com/recipe/278888/slow-cooker-creamy-chicken-taco-soup/photos/8044940/",
    pubDate: "today",
    likes: 10,
    saves: 20,
    forks: 3,
    author: "Ryan Anthony Antonelli",
  },
  
  {
    title: "Chimichangas",
    description: "This is a burrito, but deep fried. You know.",
    instruction: [
        
            "Make a burrito",
        
        
            "Deep fry it",
        
        
            "Eat the now-deep-fried burrito",
    ],
    ingredients: [
        {
            name: "Burrito",
            quantity: 1,
            unit: "burrito",
        },
        {
            name: "frying oil",
            quantity: 1,
            unit: "so much",
        },
    ],
    tips: "This will fill your caloric requirements for quite some time, chief.",
    yield: "8 normal humanservings per burrito. You probably ate the whole thing yourself, though.",
    categories: ["roadkill", "Fauxican", "technically food"],
    feedback: ["blah blah"],
    activeTime: "30 min",
    inactiveTime: "30 min",
    addons: "burrito",
    forkedFrom: "china",
    images: "https://th.bing.com/th/id/OIP.vIbc94_szR1UgZ4ChiCxDgHaEK?w=300&h=168&c=7&o=5&dpr=1.25&pid=1.7",
    pubDate: "today",
    likes: 1,
    saves: 2,
    forks: 3,
    author: "Some Fat Guy",
  },
  
  {
    title: "I don't know, this is taking forever",
    description: "Food",
    instruction: [
        
            "Make food.",
        
        
            "Cook food",
        
        
            "Serve food",
        
        
            "Eat food",

    ],
    ingredients: [
        {
            name: "meat",
            quantity: .5,
            unit: "cup",
        },
        {
            name: "potatoes",
            quantity: 2,
            unit: "ounces",
        },
        {
            name: "celery",
            quantity: 3,
            unit: "tablespoons",
        },
        {
            name: "plastic beads",
            quantity: 0,
            unit: "to taste",
        },
        {
            name: "Frozen 2, thawed",
            quantity: 1,
            unit: "movie",
        },
    ],
    tips: "nah",
    yield: "8 servings",
    categories: ["roadkill"],
    feedback: ["blah blah"],
    activeTime: "30 min",
    inactiveTime: "30 min",
    addons: "nope",
    forkedFrom: "no forking idea",
    images: "https://78.media.tumblr.com/f259e44ca20397f2c639cd2274dd5895/tumblr_oyn82bDPCG1ul90j7o6_r2_400.png",
    pubDate: "today",
    likes: 1,
    saves: 2,
    forks: 3,
    author: "Ryan Anthony Antonelli",
  },
  
  {
    title: "Squirrel",
    description: "You can definitely eat a squirrel.",
    instruction: [
        
            "Find a squirrel.",
        
        
            "If the squirrel is not dead, make it so.",
        
        
            "I guess you could cook it or something, but you have already fallen this far into depravity...",
        
        
            "EAT THE SQUIRREL!",
    ],
    ingredients: [
        {
            name: "squirrel",
            quantity: 1,
            unit: "rodent",
        },
        {
            name: "squirrel parts",
            quantity: 1,
            unit: "unit of squirrel parts",
        },
    ],
    tips: "Watch out for rabies.",
    yield: "Like, I have no idea. Are you really doing this?",
    categories: ["roadkill", "british",],
    feedback: ["blah blah"],
    activeTime: "real quick",
    inactiveTime: "lots of toilet time",
    addons: "nobody wants to be associated with this",
    forkedFrom: "no forking idea",
    images: "https://th.bing.com/th/id/OIP.vfEAh3ld6u_-T-7x0ars9QHaE8?w=271&h=177&c=7&o=5&dpr=1.25&pid=1.7",
    pubDate: "today",
    likes: 1,
    saves: 2,
    forks: 3,
    author: "Homo Neanderthalus",
  },

];

db.Recipe
  .remove({})
  .then(() => db.Recipe.collection.insertMany(recipeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
