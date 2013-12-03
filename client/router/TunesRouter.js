window.MyTunes = window.MyTunes || {};
window.MyTunes.Router = window.MyTunes.Router || {};

MyTunes.Router.TunesRouter = Backbone.Router.extend({


    routes: {
        'play/:title': 'playSong'
    },

    initialize: function(attributes) {
        this.model = attributes.model;
        Backbone.history.start();
    },

    search: function(query) {
        //statements
    },

    playSong: function(title) {
      this.model.get('library').findWhere({'title':title}).enqueue();
        //statements
    }
});
