var feed = {
	data: [],
	templates: ["item"],
	itemTemplate: null,
	loadTemplate: function(){
		$.ajax({
		  url: 'http://stash/app/feedItemTemplate.html',
		  success: function (html) { 
		    console.log('Template Loaded:', html);
		  	feed.itemTemplate = html;
		  	feed.loadData();
		  	
		  },
		});
		
	},
	loadData: function(){
		$.ajax({
		  dataType: 'jsonp',
		  data: '',
		  jsonpCallback: 'callback',
		  url: 'http://stash/app/feed.json',
		  success: function (data) {
		  	console.log("Data Loaded:", data);
		    feed.output(data);
		  },
		});
	},
	init: function(){ //go get templates from div id = templates
		var that = this;
		$("#templates").remove().children().each(function(i) {
			that["#" + $(this).attr("id")] = $(this).removeAttr("id").clone();
		});
		this.getData();
		this.output();
	},
	output: function(data){
		for (var i = 0; i<data.length; i++){
			var post = data[i];
			var template = feed.itemTemplate;
			template = template.replace("{userName}", post.name);
			template = template.replace("{action}", post.action);
			template = template.replace("{profilePic}", post.profilePic);
			console.log(template);
			console.log(post.name);
			
			$("#feed").append(template).listview('refresh');
			
		}
	}	
}




$(function(){
	feed.loadTemplate();
});