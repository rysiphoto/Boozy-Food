
// on load call the init function which will call the getRecipe function
// to pre-populate the recipe accordion with pork chop recipes
window.onload = function () {
    this.init()
    
  }

  function init(){
    getRecipe('pork chops')
}

var searchDrink = "";
function createDrinkDiv() {
    $("#drinksDiv").empty();
    $("#drinkPicDiv").empty();
    $("#drinkDisc").empty();
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var drinkInst = response.drinks[0].strInstructions;
        var drinkImg = response.drinks[0].strDrinkThumb
        var drinkGlass = response.drinks[0].strGlass;
        var drinkIng1 = response.drinks[0].strIngredient1;
        var drinkIng2 = response.drinks[0].strIngredient2;
        var drinkIng3 = response.drinks[0].strIngredient3;
        var drinkIng4 = response.drinks[0].strIngredient4;
        var drinkIng5 = response.drinks[0].strIngredient5;
        var drinkIng6 = response.drinks[0].strIngredient6;
        var drinkIng7 = response.drinks[0].strIngredient7;
        var drinkIng8 = response.drinks[0].strIngredient8;

        var drinkMeasure1 = response.drinks[0].strMeasure1;
        var drinkMeasure2 = response.drinks[0].strMeasure2;
        var drinkMeasure3 = response.drinks[0].strMeasure3;
        var drinkMeasure4 = response.drinks[0].strMeasure4;
        var drinkMeasure5 = response.drinks[0].strMeasure5;
        var drinkMeasure6 = response.drinks[0].strMeasure6;
        var drinkMeasure7 = response.drinks[0].strMeasure7;
        var drinkMeasure8 = response.drinks[0].strMeasure8;


        var currentDiv = document.getElementById("drinksDiv");
        var drinkNameDiv = document.createElement("h2");
        var drinkGlassDiv = document.createElement("h3");
        var drinkDis = document.getElementById("drinkDisc");

        // var ingredientNum = 1;
        // var ingredients = []; // array to push ingredients to once you pull them from the object; an array will be easier to work with in your code

        // while (response.drinks[0]["strIngredient" + ingredientNum]) {
        //     ingredients.push(response.drinks[0]["strIngredient" + ingredientNum]);
        //     ingredientNum++;

        // }


        // Create For Loops for Ingredients if possible

        var drinkIngList1 = document.createElement("li");
        var drinkIngList2 = document.createElement("li");
        var drinkIngList3 = document.createElement("li");
        var drinkIngList4 = document.createElement("li");
        var drinkIngList5 = document.createElement("li");
        var drinkIngList6 = document.createElement("li");
        var drinkIngList7 = document.createElement("li");
        var drinkIngList8 = document.createElement("li");
        var drinkInstList = document.createElement("p");
        var drinkImage = document.createElement("p");
        drinkImage.id = "drinkPic";




        // console.log("final ingredients array:", ingredients);
        drinkNameDiv.textContent = response.drinks[0].strDrink;
        drinkGlassDiv.textContent = ("Glass: " + drinkGlass);
        drinkIngList1.textContent = (drinkIng1 + ": " + drinkMeasure1);
        drinkIngList2.textContent = (drinkIng2 + ": " + drinkMeasure2);
        drinkIngList3.textContent = (drinkIng3 + ": " + drinkMeasure3);
        drinkIngList4.textContent = (drinkIng4 + ": " + drinkMeasure4);
        drinkIngList5.textContent = (drinkIng5 + ": " + drinkMeasure5);
        drinkIngList6.textContent = (drinkIng6 + ": " + drinkMeasure6);
        drinkIngList7.textContent = (drinkIng7 + ": " + drinkMeasure7);
        drinkIngList8.textContent = (drinkIng8 + ": " + drinkMeasure8);
        drinkInstList.textContent = drinkInst;
        drinkImage.innerHTML = ("<img src='" + drinkImg + "'>");






        currentDiv.appendChild(drinkNameDiv);
        currentDiv.appendChild(drinkGlassDiv);
        currentDiv.appendChild(drinkIngList1);
        currentDiv.appendChild(drinkIngList2);
        currentDiv.appendChild(drinkIngList3);
        currentDiv.appendChild(drinkIngList4);
        currentDiv.appendChild(drinkIngList5);
        currentDiv.appendChild(drinkIngList6);
        currentDiv.appendChild(drinkIngList7);
        currentDiv.appendChild(drinkIngList8);
        drinkDis.appendChild(drinkInstList);
        drinkPicDiv.appendChild(drinkImage);


    });

}
$(".recipe-btn").on("click", function () {
    var userSearchTerm = $("#searchBar").val();
    getRecipe(userSearchTerm)   
  });
  
function getRecipe(searchTerm){
var rapidKey = '6231706c36msh0aa2e9f7a2ee4f409cae6e1dc3cdad9c4d43c424ff96c50p195ed0jsn6762f2140659'
    var queryUrl = `https://api.spoonacular.com/food/products/search?query=${searchTerm}&apiKey=${rapidKey}`
    $('#accordion').empty()
   
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=${searchTerm}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "6231706c36msh4d43c424ff96c50p195ed0jsn6762f2140659"
        }
    }   //first call
    $.ajax(settings).then(function (response) {

        for (var i = 0; i < 5; i++) {
            var recipeID = response[i].id
          
            var newSettings = {
                "async": true,
                "crossDomain": true,
                "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeID}/information?includeNutrition=false`,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                    "x-rapidapi-key": "6231706c36msh4d43c424ff96c50p195ed0jsn6762f2140659",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
                }
            }
            //second call
            $.ajax(newSettings).then(function (results) {
                console.log(results)

                var h3 = $(`<h3>${results.title}</h3>`)
                var content = $('<div>')
                content.append(`<img src="${results.image}" alt="${results.title}">`)
                var content = $(`<div><img src="${results.image}" alt="${results.title}"><p><strong>STEPS:</strong></p></div>`)
                for (var i=0;i<results.analyzedInstructions[0].steps.length;i++){
                    
                    content.append(`<p><strong>${results.analyzedInstructions[0].steps[i].number}</strong> ${results.analyzedInstructions[0].steps[i].step}`)
                }
                $("#accordion").append(h3, content)
                $("#accordion").accordion("refresh");

               

            })

        }
       
    });

}
















  $("#accordion").accordion();