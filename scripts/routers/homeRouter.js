CA.Routers.Home = Backbone.Router.extend({
	routes : {
		"/" : "displayHome",
		"*path"	: "notFound"
			
	},
	
	displayHome : function() {
		
		console.log("display");
		
		var home = new CA.Views.Home({
			el : '.page'
		});
		
		home.render();
		
	},
	
	notFound : function() {
		window.location.hash = "#/";
	}
});