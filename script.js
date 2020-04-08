





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