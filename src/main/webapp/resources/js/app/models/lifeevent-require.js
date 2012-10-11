/**
 * LifeEvent Model
 */
 
define([
    'backbone' // depends and imports Backbone
], function (Backbone) {
    /**
     * The LifeEvent model class definition
     * Used for CRUD operations against individual events
     */
     
    var LifeEvent = Backbone.Model.extend({
        urlRoot:'lifeevent' // the URL for perfoming CRUD operations
        initialize : function() {
	    },
    });
    // export the Event class
    return LifeEvent;
});