// SongQueueView.js - Defines a backbone view class for the song queue.
window.MyTunes = window.MyTunes || {};

MyTunes.Views.SongQueueView = Backbone.View.extend({

  tagName: "table",
  className: "table table-hover queue",

  initialize: function() {
    this.render();

    this.collection.on('add', function() {
      this.render();
    }, this);

    this.collection.on('remove', function() {
      this.render();
    }, this);

  },

  render: function() {
    // return this.$el;
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    this.$el.html('<thead><tr><th></th><th>Artist</th><th>Song Title</th></tr></thead>').append(
      this.collection.map(function(song){
        return new MyTunes.Views.SongQueueEntryView({model: song}).render();
      })
    );
  }

});
