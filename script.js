
var searchDrink = "";

// function createRandDrink() {
//     var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
//     var drink = response.drinks[0];

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {

//     });
//     //append tile is-parent
// }

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

        var drinkMeasure1 = response.drinks[0].strMeasure1;
        var drinkMeasure2 = response.drinks[0].strMeasure2;
        var drinkMeasure3 = response.drinks[0].strMeasure3;
        var drinkMeasure4 = response.drinks[0].strMeasure4;
        var drinkMeasure5 = response.drinks[0].strMeasure5;
        var drinkMeasure6 = response.drinks[0].strMeasure6;

        var currentDiv = document.getElementById("drinksDiv");
        var drinkPicDiv = document.getElementById("drinkPicDiv")
        var drinkNameDiv = document.createElement("h2");
        drinkNameDiv.id = "drinkNameh2";
        var drinkGlassDiv = document.createElement("h3");
        var drinkDis = document.getElementById("drinkDisc");

        // var ingredientNum = 1;
        // var ingredients = []; // array to push ingredients to once you pull them from the object; an array will be easier to work with in your code

        // while (response.drinks[0]["strIngredient" + ingredientNum]) {
        //     ingredients.push(response["strIngredient" + ingredientNum]);
        //     ingredientNum++;
        //     var drinkIngList = response.drinks[0].strIngredient + ingredientNum;

        //     for (i = 0; i < ingredients.length; i++) {
        //         drinkIngList[i] = document.createElement("li");
        //         drinkIngList[i].textContent = (drinkIng[i] + ": " + drinkMeasure[i]);
        //     }
        // }

        // console.log("final ingredients array:", ingredients);

        // Create For Loops for Ingredients if possible
        var drinkIngList1 = document.createElement("li");
        var drinkIngList2 = document.createElement("li");
        var drinkIngList3 = document.createElement("li");
        var drinkIngList4 = document.createElement("li");
        var drinkIngList5 = document.createElement("li");
        var drinkIngList6 = document.createElement("li");
        var drinkInstList = document.createElement("p");
        var drinkImage = document.createElement("p");
        drinkImage.id = "drinkPic";


        drinkNameDiv.textContent = response.drinks[0].strDrink;
        drinkGlassDiv.textContent = ("Glass: " + drinkGlass);
        drinkIngList1.textContent = (drinkIng1 + ": " + drinkMeasure1);
        drinkIngList2.textContent = (drinkIng2 + ": " + drinkMeasure2);
        drinkIngList3.textContent = (drinkIng3 + ": " + drinkMeasure3);
        drinkIngList4.textContent = (drinkIng4 + ": " + drinkMeasure4);
        drinkIngList5.textContent = (drinkIng5 + ": " + drinkMeasure5);
        drinkIngList6.textContent = (drinkIng6 + ": " + drinkMeasure6);
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
        drinkDis.appendChild(drinkInstList);
        drinkPicDiv.appendChild(drinkImage);

    });
}