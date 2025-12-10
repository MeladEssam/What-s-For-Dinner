var mealsList = [
  {
    image: "./imgs/img1.avif",
    title: "Classic Beef Burger",
    description: "Juicy homemade burger with all the fixings",
    mealStats: {
      prepTime: 15,
      cookTime: 20,
      servings: 4,
    },
    rating: {
      average: 4.5,
      quantity: 278,
    },
    categoryInfo: {
      difficulty: "Easy",
      category: "American",
    },
    ingredients: [
      "500g ground beef",
      "Burger buns",
      "Lettuce",
      "Tomato",
      "Cheddar cheese",
      "Onion",
      "Pickles",
      "Ketchup",
      "Mustard",
    ],
    instructions: [
      "Prepare the beef patties and season them.",
      "Heat a skillet or grill and cook patties until desired doneness.",
      "Toast the buns if desired.",
      "Assemble burgers with lettuce, tomato, cheese, onion, pickles, and sauces.",
      "Serve immediately.",
    ],
    nutrition: {
      calories: "530 kcal",
      protein: "30g",
      carbohydrates: "35g",
      fat: "28g",
      fiber: "3g",
      sodium: "980mg",
    },
    chefTips: [
      "Use good quality ground beef for a juicier burger.",
      "Toast the buns lightly for extra crunch.",
      "Let patties rest 2 min before serving to retain juices.",
    ],
  },
  {
    image: "./imgs/img2.avif",
    title: "Margherita Pizza",
    description: "Classic pizza with fresh tomato, basil and mozzarella",
    mealStats: {
      prepTime: 20,
      cookTime: 15,
      servings: 3,
    },
    rating: {
      average: 4.8,
      quantity: 145,
    },
    categoryInfo: {
      difficulty: "Medium",
      category: "Italian",
    },
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella",
      "Fresh basil",
      "Olive oil",
      "Salt",
    ],
    instructions: [
      "Preheat oven to high temperature (e.g. 250°C).",
      "Roll out pizza dough and spread tomato sauce.",
      "Add sliced mozzarella and olive oil.",
      "Bake until crust golden and cheese melted.",
      "Garnish with fresh basil before serving.",
    ],
    nutrition: {
      calories: "820 kcal",
      protein: "28g",
      carbohydrates: "102g",
      fat: "30g",
      fiber: "6g",
      sodium: "1300mg",
    },
    chefTips: [
      "Use a pizza stone for a crispier crust.",
      "Don’t over‑top with cheese — fresh mozzarella works best sparingly.",
    ],
  },
  {
    image: "./imgs/img3.avif",
    title: "Salmon Sushi Platter",
    description: "Assorted salmon nigiri and rolls",
    mealStats: {
      prepTime: 25,
      cookTime: 0,
      servings: 2,
    },
    rating: {
      average: 4.7,
      quantity: 89,
    },
    categoryInfo: {
      difficulty: "Hard",
      category: "Japanese",
    },
    ingredients: [
      "Sushi rice",
      "Nori sheets",
      "Fresh salmon slices",
      "Wasabi",
      "Soy sauce",
      "Pickled ginger",
    ],
    instructions: [
      "Cook sushi rice and season with rice vinegar, sugar, salt.",
      "Slice salmon thinly.",
      "Form rice balls or roll nori with rice and salmon.",
      "Serve with soy sauce, wasabi, and pickled ginger.",
    ],
    nutrition: {
      calories: "450 kcal",
      protein: "35g",
      carbohydrates: "70g",
      fat: "5g",
      fiber: "2g",
      sodium: "800mg",
    },
    chefTips: [
      "Use very fresh fish (sashimi quality).",
      "Keep rice slightly warm before shaping for better texture.",
    ],
  },
  {
    image: "./imgs/img4.avif",
    title: "Creamy Carbonara Pasta",
    description: "Classic Italian pasta with egg, cheese, and pancetta",
    mealStats: {
      prepTime: 15,
      cookTime: 10,
      servings: 4,
    },
    rating: {
      average: 4.6,
      quantity: 120,
    },
    categoryInfo: {
      difficulty: "Medium",
      category: "Italian",
    },
    ingredients: [
      "Spaghetti",
      "Pancetta (or bacon)",
      "Egg yolks",
      "Parmesan cheese",
      "Black pepper",
      "Salt",
    ],
    instructions: [
      "Cook spaghetti until al dente.",
      "Fry pancetta until crisp, set aside.",
      "Beat egg yolks with grated Parmesan and pepper.",
      "Drain pasta (reserve some water), mix quickly with egg cheese mix and pancetta off heat.",
      "If too thick, add a splash of pasta water, then serve.",
    ],
    nutrition: {
      calories: "610 kcal",
      protein: "24g",
      carbohydrates: "75g",
      fat: "18g",
      fiber: "4g",
      sodium: "920mg",
    },
    chefTips: [
      "Work fast when mixing eggs and pasta to avoid scrambling.",
      "Use freshly grated cheese for better flavour.",
    ],
  },
  {
    image: "./imgs/img5.avif",
    title: "Grilled Chicken Salad",
    description: "Fresh salad with grilled chicken, veggies and vinaigrette",
    mealStats: {
      prepTime: 10,
      cookTime: 15,
      servings: 2,
    },
    rating: {
      average: 4.3,
      quantity: 60,
    },
    categoryInfo: {
      difficulty: "Easy",
      category: "Healthy",
    },
    ingredients: [
      "Chicken breast",
      "Mixed greens",
      "Cherry tomatoes",
      "Cucumber",
      "Olive oil",
      "Lemon juice",
      "Salt & pepper",
    ],
    instructions: [
      "Season chicken breast, grill until cooked.",
      "Chop veggies and mix with greens.",
      "Slice chicken and place on top of salad.",
      "Drizzle olive oil and lemon juice dressing, serve fresh.",
    ],
    nutrition: {
      calories: "320 kcal",
      protein: "28g",
      carbohydrates: "12g",
      fat: "14g",
      fiber: "5g",
      sodium: "480mg",
    },
    chefTips: [
      "Let chicken rest 5 min before slicing to keep it juicy.",
      "Use fresh lemon juice for vibrant flavour.",
    ],
  },
  {
    image: "./imgs/img6.avif",
    title: "Sushi Rolls Deluxe",
    description: "Assorted sushi rolls with avocado, salmon, and tuna",
    mealStats: {
      prepTime: 30,
      cookTime: 0,
      servings: 2,
    },
    rating: {
      average: 4.9,
      quantity: 200,
    },
    categoryInfo: {
      difficulty: "Hard",
      category: "Japanese",
    },
    ingredients: [
      "Sushi rice",
      "Nori sheets",
      "Salmon",
      "Tuna",
      "Avocado",
      "Soy sauce",
      "Wasabi",
    ],
    instructions: [
      "Prepare sushi rice.",
      "Slice fish and avocado.",
      "Roll sushi with rice, nori and fillings.",
      "Slice into pieces and serve with soy sauce and wasabi.",
    ],
    nutrition: {
      calories: "500 kcal",
      protein: "32g",
      carbohydrates: "65g",
      fat: "6g",
      fiber: "4g",
      sodium: "850mg",
    },
    chefTips: [
      "Use a sharp knife dipped in water for clean cuts.",
      "Chill the rolls briefly for firmer texture before slicing.",
    ],
  },
  {
    image: "./imgs/img7.avif",
    title: "Mediterranean Veggie Pizza",
    description: "Pizza topped with olives, tomatoes, herbs and feta cheese",
    mealStats: {
      prepTime: 20,
      cookTime: 18,
      servings: 3,
    },
    rating: {
      average: 4.4,
      quantity: 90,
    },
    categoryInfo: {
      difficulty: "Medium",
      category: "Vegetarian",
    },
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Olives",
      "Cherry tomatoes",
      "Feta cheese",
      "Basil",
      "Olive oil",
    ],
    instructions: [
      "Preheat oven.",
      "Roll dough, spread sauce, add toppings.",
      "Bake until crust golden and toppings cooked.",
      "Drizzle with olive oil and serve.",
    ],
    nutrition: {
      calories: "750 kcal",
      protein: "22g",
      carbohydrates: "95g",
      fat: "25g",
      fiber: "7g",
      sodium: "1200mg",
    },
    chefTips: [
      "Use thin crust for better bake.",
      "Add fresh basil after baking to preserve aroma.",
    ],
  },
  {
    image: "./imgs/img8.avif",
    title: "Nigiri Sushi Set",
    description: "Fresh nigiri sushi with salmon and tuna slices",
    mealStats: {
      prepTime: 25,
      cookTime: 0,
      servings: 2,
    },
    rating: {
      average: 4.8,
      quantity: 110,
    },
    categoryInfo: {
      difficulty: "Hard",
      category: "Japanese",
    },
    ingredients: [
      "Sushi rice",
      "Fresh salmon",
      "Fresh tuna",
      "Wasabi",
      "Soy sauce",
    ],
    instructions: [
      "Prepare sushi rice and season.",
      "Slice fish thinly.",
      "Shape rice into small balls, top with fish slices.",
      "Serve with wasabi and soy sauce.",
    ],
    nutrition: {
      calories: "480 kcal",
      protein: "34g",
      carbohydrates: "72g",
      fat: "5g",
      fiber: "3g",
      sodium: "810mg",
    },
    chefTips: [
      "Use very fresh fish, sashimi grade.",
      "Keep fingers wet while shaping rice to avoid sticking.",
    ],
  },
  {
    image: "./imgs/img9.avif",
    title: "Margherita Pizza Pan",
    description:
      "Thin crust pizza baked on metal pan, classic mozzarella & basil",
    mealStats: {
      prepTime: 20,
      cookTime: 13,
      servings: 2,
    },
    rating: {
      average: 4.6,
      quantity: 75,
    },
    categoryInfo: {
      difficulty: "Medium",
      category: "Italian",
    },
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella",
      "Basil",
      "Olive oil",
    ],
    instructions: [
      "Preheat oven and pan.",
      "Roll dough, add sauce and mozzarella.",
      "Bake on pan until crust crisp and cheese melted.",
      "Top with basil and olive oil.",
    ],
    nutrition: {
      calories: "780 kcal",
      protein: "26g",
      carbohydrates: "98g",
      fat: "24g",
      fiber: "6g",
      sodium: "1150mg",
    },
    chefTips: [
      "Use pre heated pan to get crispy bottom crust.",
      "Rotate pizza halfway through bake for even cook.",
    ],
  },
  {
    image: "./imgs/img10.avif",
    title: "Salmon & Avocado Sushi Roll",
    description: "Hand rolled sushi with salmon, avocado and seasoned rice",
    mealStats: {
      prepTime: 30,
      cookTime: 0,
      servings: 2,
    },
    rating: {
      average: 4.5,
      quantity: 98,
    },
    categoryInfo: {
      difficulty: "Hard",
      category: "Japanese",
    },
    ingredients: [
      "Sushi rice",
      "Nori sheets",
      "Salmon",
      "Avocado",
      "Soy sauce",
      "Wasabi",
    ],
    instructions: [
      "Cook and season sushi rice.",
      "Slice salmon and avocado.",
      "Place rice on nori, add fillings, and roll tightly.",
      "Slice roll and serve with soy sauce.",
    ],
    nutrition: {
      calories: "520 kcal",
      protein: "30g",
      carbohydrates: "68g",
      fat: "7g",
      fiber: "5g",
      sodium: "820mg",
    },
    chefTips: [
      "Press roll gently but firmly for clean slices.",
      "Use fresh avocado to avoid browning.",
    ],
  },
  {
    image: "./imgs/img11.jpg",
    title: "Garlic Butter Steak",
    description: "Juicy ribeye steak cooked with garlic butter and herbs",
    mealStats: { prepTime: 10, cookTime: 15, servings: 2 },
    rating: { average: 4.9, quantity: 210 },
    categoryInfo: { difficulty: "Medium", category: "American" },
    ingredients: [
      "Ribeye steak",
      "Garlic cloves",
      "Butter",
      "Rosemary",
      "Salt & pepper",
    ],
    instructions: [
      "Season steak with salt and pepper.",
      "Melt butter in skillet, add garlic and rosemary.",
      "Cook steak to desired doneness, basting with butter.",
      "Let rest 5 minutes, then serve.",
    ],
    nutrition: {
      calories: "600 kcal",
      protein: "45g",
      carbohydrates: "0g",
      fat: "45g",
      fiber: "0g",
      sodium: "900mg",
    },
    chefTips: [
      "Let steak come to room temperature before cooking.",
      "Use a meat thermometer for perfect doneness.",
    ],
  },
  {
    image: "./imgs/img12.jpg",
    title: "Chicken Tacos",
    description: "Spicy grilled chicken tacos with fresh salsa and lime",
    mealStats: { prepTime: 15, cookTime: 10, servings: 3 },
    rating: { average: 4.7, quantity: 140 },
    categoryInfo: { difficulty: "Easy", category: "Mexican" },
    ingredients: [
      "Taco shells",
      "Chicken breast",
      "Lettuce",
      "Tomato",
      "Cheese",
      "Salsa",
      "Lime",
      "Chili powder",
    ],
    instructions: [
      "Season chicken with chili powder and grill.",
      "Chop lettuce and tomatoes.",
      "Assemble tacos with chicken, veggies, cheese, and salsa.",
      "Serve with lime wedges.",
    ],
    nutrition: {
      calories: "450 kcal",
      protein: "28g",
      carbohydrates: "35g",
      fat: "20g",
      fiber: "5g",
      sodium: "700mg",
    },
    chefTips: [
      "Use soft corn tortillas for authentic flavor.",
      "Marinate chicken for extra tenderness.",
    ],
  },
  {
    image: "./imgs/img13.jpg",
    title: "Shrimp Pad Thai",
    description: "Traditional Thai stir-fried noodles with shrimp and peanuts",
    mealStats: { prepTime: 47, cookTime: 10, servings: 2 },
    rating: { average: 4.8, quantity: 130 },
    categoryInfo: { difficulty: "Medium", category: "Thai" },
    ingredients: [
      "Rice noodles",
      "Shrimp",
      "Eggs",
      "Bean sprouts",
      "Green onions",
      "Peanuts",
      "Pad Thai sauce",
      "Lime",
    ],
    instructions: [
      "Soak noodles until soft.",
      "Stir-fry shrimp and eggs.",
      "Add noodles and sauce, toss with vegetables.",
      "Serve topped with peanuts and lime.",
    ],
    nutrition: {
      calories: "550 kcal",
      protein: "30g",
      carbohydrates: "65g",
      fat: "18g",
      fiber: "4g",
      sodium: "900mg",
    },
    chefTips: [
      "Do not overcook noodles they should remain slightly chewy.",
      "Fresh lime juice enhances the flavor.",
    ],
  },
  {
    image: "./imgs/img14.jpg",
    title: "Tonkotsu Ramen",
    description: "Creamy pork bone broth ramen with noodles and toppings",
    mealStats: { prepTime: 60, cookTime: 45, servings: 2 },
    rating: { average: 4.6, quantity: 95 },
    categoryInfo: { difficulty: "Hard", category: "Japanese" },
    ingredients: [
      "Ramen noodles",
      "Pork belly",
      "Soft boiled eggs",
      "Green onions",
      "Nori",
      "Tonkotsu broth",
    ],
    instructions: [
      "Cook pork belly until tender.",
      "Prepare broth and heat noodles.",
      "Assemble ramen with pork, egg, and toppings.",
      "Serve hot.",
    ],
    nutrition: {
      calories: "700 kcal",
      protein: "40g",
      carbohydrates: "80g",
      fat: "30g",
      fiber: "3g",
      sodium: "1200mg",
    },
    chefTips: [
      "Simmer broth for hours for richer flavor.",
      "Marinate eggs overnight for better taste.",
    ],
  },
  {
    image: "./imgs/img15.jpg",
    title: "Falafel Wrap",
    description: "Crispy falafel with hummus and fresh veggies in a wrap",
    mealStats: { prepTime: 20, cookTime: 15, servings: 2 },
    rating: { average: 4.5, quantity: 110 },
    categoryInfo: { difficulty: "Easy", category: "Middle Eastern" },
    ingredients: [
      "Falafel balls",
      "Tortilla or pita wrap",
      "Hummus",
      "Lettuce",
      "Tomato",
      "Cucumber",
      "Tahini",
    ],
    instructions: [
      "Cook falafel until crispy.",
      "Spread hummus on wrap.",
      "Add falafel and chopped veggies.",
      "Drizzle with tahini and wrap tightly.",
    ],
    nutrition: {
      calories: "480 kcal",
      protein: "18g",
      carbohydrates: "55g",
      fat: "20g",
      fiber: "8g",
      sodium: "700mg",
    },
    chefTips: [
      "Serve immediately to keep falafel crispy.",
      "Use fresh vegetables for best taste.",
    ],
  },
  {
    image: "./imgs/img16.jpg",
    title: "Shakshuka",
    description: "Poached eggs in spicy tomato sauce with herbs",
    mealStats: { prepTime: 10, cookTime: 20, servings: 2 },
    rating: { average: 4.7, quantity: 85 },
    categoryInfo: { difficulty: "Easy", category: "Middle Eastern" },
    ingredients: [
      "Eggs",
      "Tomato sauce",
      "Bell peppers",
      "Onion",
      "Garlic",
      "Spices",
      "Cilantro",
    ],
    instructions: [
      "Sauté onions, garlic, and bell peppers.",
      "Add tomato sauce and spices, simmer.",
      "Crack eggs into sauce, cover and cook until set.",
      "Garnish with cilantro and serve.",
    ],
    nutrition: {
      calories: "350 kcal",
      protein: "15g",
      carbohydrates: "25g",
      fat: "20g",
      fiber: "5g",
      sodium: "650mg",
    },
    chefTips: [
      "Cover pan while poaching eggs for perfect texture.",
      "Serve with warm bread to soak up sauce.",
    ],
  },
  {
    image: "./imgs/img17.jpg",
    title: "Berry Smoothie Bowl",
    description: "Refreshing smoothie bowl with mixed berries and granola",
    mealStats: { prepTime: 10, cookTime: 0, servings: 1 },
    rating: { average: 4.6, quantity: 90 },
    categoryInfo: { difficulty: "Easy", category: "Healthy" },
    ingredients: [
      "Mixed berries",
      "Banana",
      "Yogurt",
      "Granola",
      "Honey",
      "Chia seeds",
    ],
    instructions: [
      "Blend berries, banana, and yogurt until smooth.",
      "Pour into bowl, top with granola, honey and chia seeds.",
      "Serve chilled.",
    ],
    nutrition: {
      calories: "300 kcal",
      protein: "12g",
      carbohydrates: "50g",
      fat: "8g",
      fiber: "6g",
      sodium: "50mg",
    },
    chefTips: [
      "Freeze fruits beforehand for thicker smoothie.",
      "Add protein powder for extra nutrition.",
    ],
  },
  {
    image: "./imgs/img18.jpg",
    title: "Seafood Paella",
    description: "Spanish saffron rice with shrimp, mussels, and calamari",
    mealStats: { prepTime: 50, cookTime: 35, servings: 4 },
    rating: { average: 4.9, quantity: 125 },
    categoryInfo: { difficulty: "Hard", category: "Spanish" },
    ingredients: [
      "Rice",
      "Shrimp",
      "Mussels",
      "Calamari",
      "Saffron",
      "Bell peppers",
      "Peas",
    ],
    instructions: [
      "Sauté seafood and vegetables.",
      "Add rice and saffron infused broth, cook until rice is done.",
      "Arrange seafood on top and simmer briefly.",
      "Serve hot.",
    ],
    nutrition: {
      calories: "700 kcal",
      protein: "35g",
      carbohydrates: "90g",
      fat: "20g",
      fiber: "5g",
      sodium: "950mg",
    },
    chefTips: [
      "Do not stir rice too much to achieve a crispy bottom layer.",
      "Use fresh saffron for best flavor and color.",
    ],
  },
];
//current index
var currentIndex = 0;
//select elements
var mealImg = document.getElementById("recipe-img");
var ratingAvg = document.querySelector(".rating-avgerage");
var reviewsSpan = document.getElementById("reviews-count");
var prepTimeSPan = document.getElementById("prepartion-time");
var cookTimeSpan = document.getElementById("cook-time");
var servingsCount = document.getElementById("servings-count");
var mealDifficulty = document.querySelector(".meal-info .difficulty");
var mealCategory = document.querySelector(".meal-info .category");
var mealTitle = document.querySelector(".meal-info .meal-title");
var mealDescription = document.querySelector(".meal-info .meal-description");
var warningMsg = document.getElementById("warning-message");
var indgradientsList = document.getElementById("indgradients-list");
var instructionsContent = document.querySelector(
  "#instructions .instructions-content"
);
var caloriesValue = document.getElementById("calories-value");
var proteinValue = document.getElementById("protein-value");
var carbohydratesValue = document.getElementById("carbohydrates-value");
var fatValue = document.getElementById("fat-value");
var fiberValue = document.getElementById("fiber-value");
var sodiumValue = document.getElementById("sodium-value");
var chefTipsContent = document.getElementById("chef-tips-content");
var tryButton = document.getElementById("try-button");

//try btn click event
tryButton.onclick = function () {
  GenerateRandomMeal();
};

//call generate method
GenerateRandomMeal(); ///first call
//generate meal method
function GenerateRandomMeal() {
  //generate random index
  //this loop to generate different meal in each time
  while (true) {
    var randomIndex = Math.round(Math.random() * (mealsList.length - 1));
    if (randomIndex != currentIndex) {
      currentIndex = randomIndex;
      break;
    }
  }
  //meal image
  mealImg.src = mealsList[currentIndex].image;
  //rating average
  ratingAvg.innerHTML = mealsList[currentIndex].rating.average;
  //reviews
  reviewsSpan.innerHTML = mealsList[currentIndex].rating.quantity;
  //prep time
  prepTimeSPan.innerHTML = mealsList[currentIndex].mealStats.prepTime;
  //cook time
  cookTimeSpan.innerHTML = mealsList[currentIndex].mealStats.cookTime;
  //servings
  servingsCount.innerHTML = mealsList[currentIndex].mealStats.servings;
  //Meal Difficulty
  mealDifficulty.innerHTML = mealsList[currentIndex].categoryInfo.difficulty;
  //Meal Category
  mealCategory.innerHTML = mealsList[currentIndex].categoryInfo.category;
  //Meal Title
  mealTitle.innerHTML = mealsList[currentIndex].title;
  //meal description
  mealDescription.innerHTML = mealsList[currentIndex].description;
  //Warning Message
  warningMsg.innerHTML = generateWarningMsg();
  //Indgradients List
  indgradientsList.innerHTML = createIndgradientsList();
  //instructions
  instructionsContent.innerHTML = createInstructions();
  // Nutrition
  //calories
  caloriesValue.innerHTML = mealsList[currentIndex].nutrition.calories;
  //protein
  proteinValue.innerHTML = mealsList[currentIndex].nutrition.protein;
  //carbohydrates
  carbohydratesValue.innerHTML =
    mealsList[currentIndex].nutrition.carbohydrates;
  //fat
  fatValue.innerHTML = mealsList[currentIndex].nutrition.fat;
  //fiber
  fiberValue.innerHTML = mealsList[currentIndex].nutrition.fiber;
  //sodium
  sodiumValue.innerHTML = mealsList[currentIndex].nutrition.sodium;
  //chefTipsContent
  chefTipsContent.innerHTML = createChefTips();
}

//function that generate warning msg
function generateWarningMsg() {
  var warningMsge = "";
  if (mealsList[currentIndex].mealStats.prepTime > 45) {
    warningMsge = `<div
                  class="prep-time-warning p-3 mb-4 rounded-3 d-flex align-items-center"
                >
                  <div class="warning-icon">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                  </div>
                  <div class="warning-info">
                    <p class="warning-title">Extended Preparation Time</p>
                    <p class="warning-desc">
                      This recipe requires more than 45 minutes to prepare. Plan
                      accordingly!
                    </p>
                  </div>
                </div>`;
  }
  return warningMsge;
}
//function that create Indgradients
function createIndgradientsList() {
  var indgradientsListContent = "";
  for (var i = 0; i < mealsList[currentIndex].ingredients.length; i++) {
    indgradientsListContent += `

                            <li class="d-flex align-items-start">
                              <div
                                class="element-num d-flex justify-content-center align-items-center rounded-circle"
                              >
                                ${i + 1}
                              </div>
                              <span>${
                                mealsList[currentIndex].ingredients[i]
                              }</span>
                            </li>
                          `;
  }
  return indgradientsListContent;
}
//function that create instructions
function createInstructions() {
  var instructionsList = "";
  for (var i = 0; i < mealsList[currentIndex].instructions.length; i++) {
    instructionsList += ` <div
                          class="instruction-item d-flex align-items-start mb-4"
                          >
                            <div
                              class="instruction-icon d-flex justify-content-center align-items-center me-3 rounded-4"
                            >
                              ${i + 1}
                            </div>
                            <div class="instruction-title">
                              <div class="pt-2">
                                <p>
                                  ${mealsList[currentIndex].instructions[i]}
                                </p>
                              </div>
                            </div>
                        </div>`;
  }
  return instructionsList;
}
//function that create chef tips
function createChefTips() {
  var chefTips = "";
  for (var i = 0; i < mealsList[currentIndex].chefTips.length; i++) {
    chefTips += ` <div class="chef-tip mb-3 p-3 d-flex align-items-start">
                          <div class="chef-tip-icon">
                            <i class="fa-solid fa-circle-check"></i>
                          </div>
                          <p class="chef-tip-title">
                            ${mealsList[currentIndex].chefTips[i]}
                          </p>
                   </div>`;
  }
  return chefTips;
}
