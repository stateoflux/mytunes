// PlayerView.js - Defines a backbone view class for the music player.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    this.model.on('stopPlay', function() {
      console.log("stopPlay");
      this.setSong(null);
    }, this);
  },

  events: {
    'ended': 'songHasEnded'
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  pauseSong: function(song) {
    this.el.pause();
    this.$el.attr('src', "");
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url'));
  },

  songHasEnded: function() {
    console.log("playerView: song has ended")
    this.model.ended();
  }

});
