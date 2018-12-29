$(document).ready(function(){
	
	console.log('js is working');

	$("#search-form").submit(function(e){
		e.preventDefault();
		
		var search = $("#books").val();

		if(search == ''){
			alert("Please type in a book first!");
		}

		else {
			var url = '';
			var img = '';
			var title = '';
			var author = '';

			jQuery.get("https://www.googleapis.com/books/v1/volumes?q=tech" + search,function(response){
				
				for(i=0; i<response.items.length;i++){

					title=$('<h3 class="center black-text">' + response.items[i].volumeInfo.title + '<br>'+ '</h5>');
					author=$('<h5 class="center black-text">' + response.items[i].volumeInfo.authors + '</h5>');
					img = $('<img class="img-thumbnail" id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton" class="btn-primary">Read More</button></a>');
					url = response.items[i].volumeInfo.imageLinks.thumbnail;
					img.attr('src',url);

					title.appendTo("#results");
					author.appendTo("#results");
					img.appendTo("#results");
				}

			});
		}
	});

});