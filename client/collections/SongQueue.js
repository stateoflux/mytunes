// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({

  model: MyTunes.Models.SongModel,
  initialize: function(){

    window.sq = this;

    this.on('add', function(song)  {
      if (this.length ===1) {
        this.playFirst();
      }
    // this.saveToLS(this);
    });

    this.on('songEnded', function(song) {
      this.remove(song);
      if (this.length >= 1)  {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      this.remove(song);
      console.log("Triggering stopPlay");
      this.trigger("stopPlay");
      if (this.length >= 1)  {
        this.playFirst();
      }
      // this.saveToLS(this);
    }, this);


  },

  saveToLS: function(songQueue) {
    var cids = [];
    for (var i = 0; i < songQueue.length; i++) {
      cids.push(songQueue.models[i]["cid"]);
    }
   
   
    window.localStorage["sq"] = cids;
  },

  playFirst: function() {
    this.at(0).play();
  }
 

});
