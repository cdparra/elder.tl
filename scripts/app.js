/**
 * The dynamic structure of Reminiscens' application is inside the variable 
 * RE including routers, collections, models, views, etc. 
 */
var RE = {
	Auth : {},
	URL : {},
	Lang : {},
	Routers : {},
	Collections : {},
	Models : {},
	Views : {},
	Utils : {},
	Helpers : {},

	init : function() {		
		new RE.Routers.Home();	
		Backbone.history.start();
	}
};

RE.URL.Person = "api/person/{0}";
RE.URL.PersonList = "api/person.json";

RE.URL.Memento = "api/memento/{0}";
RE.URL.OrganizerList = "api/memento.json";