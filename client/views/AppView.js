// AppView.js - Defines a backbone view class for the whole music app.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new MyTunes.Views.PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new MyTunes.Views.LibraryView({collection: this.model.get('library')});
    this.songQueueView = new MyTunes.Views.SongQueueView({collection: this.model.get('songQueue')});

    this.model.on('change:currentSong', function(model){
      console.log("appView: heard change:currentSong event", model);
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.model.get('songQueue').on('stopPlay', function(model) {
      this.playerView.pauseSong();
    }, this);
  },

  addFromLS: function() {
    var self = this;
    if (window.localStorage["sq"] !== undefined) {
      var songData = JSON.parse(window.localStorage["sq"]);
    
      for (var i = 0; i < songData.length; i++) {
        this.model.get('songQueue').add(songData[i]);
      }
      // this.model.get('songQueue').at(0).play();
    }
  },

  render: function(){
    
    $('.player-shell').append(this.playerView.$el);
    $('.playlist-shell').append(this.songQueueView.$el);
    // this.addFromLS();
    return this.$el.html( this.libraryView.$el );
  }

});
