

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
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // var drinkInst = response.drinks[0].strInstructions;
        // var drinkImg = response.drinks[0].strDrinkThumb
        var drinkGlass = response.drinks[0].strGlass;
        var drinkIng1 = response.drinks[0].strIngredient1;
        var drinkIng2 = response.drinks[0].strIngredient2;
        // var drinkIng3 = response.drinks[0].strIngredient3;
        // var drinkIng4 = response.drinks[0].strIngredient4;
        // var drinkIng5 = response.drinks[0].strIngredient5;
        // var drinkIng6 = response.drinks[0].strIngredient6;
        // var drinkIng7 = response.drinks[0].strIngredient7;
        var drinkMeasure1 = response.drinks[0].strMeasure1;
        var drinkMeasure2 = response.drinks[0].strMeasure2;
        // var drinkMeasure3 = response.drinks[0].strMeasure3;
        // var drinkMeasure4 = response.drinks[0].strMeasure4;
        // var drinkMeasure5 = response.drinks[0].strMeasure5;
        // var drinkMeasure6 = response.drinks[0].strMeasure6;
        // var drinkMeasure7 = response.drinks[0].strMeasure7;



        var currentDiv = document.getElementById("drinksDiv");
        var drinkNameDiv = document.createElement("h2");
        var drinkGlassDiv = document.createElement("h3");
        var drinkIngList = document.createElement("li");
        drinkNameDiv.textContent = response.drinks[0].strDrink;
        drinkGlassDiv.textContent = drinkGlass;
        drinkIngList.textContent = (drinkIng1, drinkMeasure1);
        currentDiv.appendChild(drinkNameDiv);
        currentDiv.appendChild(drinkGlassDiv);
        currentDiv.appendChild(drinkIngList);

    });
}


$(".recipe-btn").on("click", function(){

	// var returnResultsNum = $("#exampleFormControlSelect1"); //on pause
	var userSearchTerm = $("#searchBar").val();
	
	var rapidKey = '6231706c36msh4d43c424ff96c50p195ed0jsn6762f2140659'
	var queryUrl= `https://api.spoonacular.com/food/products/search?query=${userSearchTerm}&apiKey=${rapidKey}`
	 $('#firstContent').empty()
	 $('#secondContent').empty()
	 $('#thirdContent').empty()
	 $('#fourthContent').empty()
	 $('#fithContent').empty()
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=${userSearchTerm}`,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
			"x-rapidapi-key": "6231706c36msh4d43c424ff96c50p195ed0jsn6762f2140659"
		}
	}
		$.ajax(settings).then(function(response){  
			console.log(response);
			// console.log(returnResultsNum);
	
			// var newDiv = $("<div>");
			
			// var title = $("<h1>").text(JSON.stringify(response.docs[0].abstract));
			for(var i = 0;i<5;i++)
			switch(i) {
				case 0:
					$( "#firstHeader" ).text(response[i].title)
					$("#firstContent").append(`<p><img src="${response[i].image}" alt="${response[i].title}"></p>`)
				  break;
				case 1:
					$( "#secondHeader" ).text(response[i].title)
					$("#secondContent").append(`<p><img src="${response[i].image}" alt="${response[i].title}"></p>`)
				  break;
				case 2:
					$( "#thirdHeader" ).text(response[i].title)
					$("#thirdContent").append(`<p><img src="${response[i].image}" alt="${response[i].title}"></p>`)
				  break;
				case 3:
					$( "#forthHeader" ).text(response[i].title)
					$("#forthContent").append(`<p><img src="${response[i].image}" alt="${response[i].title}"></p>`)	
				break;
				default:
					$( "#fithHeader" ).text(response[i].title)
					$("#fithContent").append(`<p><img src="${response[i].image}" alt="${response[i].title}"></p>`)
				  // code block
			  }
			
			//document.getElementById("recipeHere").innerHTML = response[0].title;
		});
		
		
	});
	 $( "#accordion" ).accordion();
