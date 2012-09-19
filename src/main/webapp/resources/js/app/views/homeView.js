CA.Views.Home = Backbone.View.extend({

	initialize : function() {
		
	},

	events : {
	},

	render : function() {
		this._renderSkeleton();
		this._loadEvents();
		this._loadGroups();
	},

	/* Helpers. */

	_renderSkeleton : function() {
		var self = this;

		var html = new EJS({
			url : './scripts/ejs/skeleton.ejs'
		}).render();

		$(this.el).html(html);
	},

	_loadEvents : function() {
		var self = this;
		var events = new CA.Collections.EventList();

		events.fetch({
			success : function(collection) {
				var html = new EJS({
					url : './scripts/ejs/events.ejs'
				}).render({
					collection : collection.toJSON()
				});

				$(self.el).find('.events').html(html);				
				
			}
		});
	},
	
	_loadGroups : function() {
		var self = this;
		var organizer = new CA.Collections.OrganizerList();

		organizer.fetch({
			success : function(collection) {
				var html = new EJS({
					url : './scripts/ejs/groups.ejs'
				}).render({
					collection : collection.toJSON()
				});

				$(self.el).find('.groups').html(html);				
				
			}
		});
	}	

});