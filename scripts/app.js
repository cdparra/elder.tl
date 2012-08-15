/**
 * CA is the main variable of ComeAlong (called: our application), it contains
 * the dynamic structure of our application.
 */
var CA = {
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
		new CA.Routers.Home();
		
		Backbone.history.start();
	}
};

CA.URL.Event = "api/event/{0}";
CA.URL.EventList = "api/event.json";

CA.URL.Organizer = "api/organizer/{0}";
CA.URL.OrganizerList = "api/organizer.json";