// Song.js - Defines a backbone model class for songs.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Models = window.MyTunes.Models || {};

MyTunes.Models.SongModel = Backbone.Model.extend({

  initialize: function() {
    this.on('ended', function (song) {
      this.collection.trigger('songEnded', this);
    }, this);

    this.on('enqueue', function(song) {
      console.log("responding to enqueue event", song);
    })
  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.count = this.count + 1;
  },

  enqueue: function() {
    console.log("about to trigger enqueue event");
    this.trigger('enqueue', this);
  },

  ended: function() {
    console.log("song: song has ended")
    this.trigger('songEnded', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  }
});
