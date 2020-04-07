





$(".recipe-btn").on("click", function(){

	// var returnResultsNum = $("#exampleFormControlSelect1"); //on pause
	var userSearchTerm = $("#searchBar").val();
	
	var rapidKey = '6231706c36msh4d43c424ff96c50p195ed0jsn6762f2140659'
	var queryUrl= `https://api.spoonacular.com/food/products/search?query=${userSearchTerm}&apiKey=${rapidKey}`
	  
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
			document.getElementById("recipeHere").innerHTML = response[0].title;
		});
		
		
	});
	 