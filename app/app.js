var feed = {
	data: [],
	templates: ["item"],
	getData: function(){
		this.data = testdata();
	},
	init: function(){ //go get templates from div id = templates
		var that = this;
		$("#templates").remove().children().each(function(i) {
			that["#" + $(this).attr("id")] = $(this).removeAttr("id").clone();
		});
		this.getData();
		this.output();
	}
	output: function(){
		for (var i = 0; i<this.data.length; i++){
			
		}
	},	
}


function testdata{
	return [
		{
			id: "1",
			name: "Sefi Grossman",
			action: "added 2 items",
			items: [
				{
					name: "Apple Macbook Pro 17",
					img: "mbp17.jpg"
				},
				{
					name: "Apple 27\" LED Cinema",
					img: "27LED.jpg"
				}
			]	
		},
		{
			id: "2"
			name: "Charles Johnson",
			action: "added purchased item",
			items: [
				{
					name: "Aston Martin DB9",
					img: "db9.jpg"
				}
			]
		},
		{
			id: "3"
			name: "Aaron Smith",
			action: "added an item",
			items: [
				{
					name: "Apple iPhone 5",
					img: "iPhone.jpg"
				}
			]
		}
	]
	
}

$(function(){
	
});