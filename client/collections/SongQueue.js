// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({

  model: MyTunes.Models.SongModel,
  initialize: function(){
    this.on('add', function(song)  {
      if (this.length ===1) {
        this.playFirst();
      }
    });


    this.on('songEnded', function(song) {
      console.log(song);
      this.remove(song);
      if (this.length >= 1)  {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      console.log(song);
      this.remove(song);
      if (this.length >= 1)  {
        this.playFirst();
      }
    }, this);

  },

  playFirst: function() {
    this.at(0).play();
  }
 

});
