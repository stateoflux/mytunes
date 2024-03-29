// LibraryView.js - Defines a backbone view class for the music library.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.LibraryView = Backbone.View.extend({

  tagName: "table",
  className: "table library",

  initialize: function() {
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    this.$el.html('<thead><tr><th>Artist</th><th>Song Title</th><th>Play Count</th></tr></thead>').append(
      this.collection.map(function(song){
        return new MyTunes.Views.LibraryEntryView({model: song}).render();
      })
    );
  }

});
  