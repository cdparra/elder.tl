RE.Routers.Index = Backbone.Router.extend({
	routes : {
		"/" : "displayLanding",
		"/start" : "startProfile",
		"*path"	: "notFound"
			
	},
	
	displayLanding : function() {	
	    
	    console.log("display landing page");
		
	    this._displayHeader();
	    
        var displayIndex = new RE.Views.Index({
			el : REConfig.UIComponent.centralID,
		});
        displayIndex.render();
        
	    this._displayFooter();
	},
	
	startProfile : function() {
	    this._displayHeader();
		this._displayRegisterForm();
        this._displayFooter();
	},

	_displayRegisterForm : function() {
		console.log("display register form");
		var home = new RE.Views.RegisterForm({
			el : REConfig.UIComponent.centralID
		});		
		home.render();
	},
	
	_displayHeader : function() {
	    console.log("display header");
		var displayHeader = new RE.Views.Header({
			el : REConfig.UIComponent.headerID 
		});
    	displayHeader.render();
	}, 

	_displayFooter : function() {
	    console.log("display footer");
		var displayHeader = new RE.Views.Footer({
			el : REConfig.UIComponent.footerID 
		});
    	displayHeader.render();
	}, 
	
	notFound : function() {
		window.location.hash = "#/";
	}
});