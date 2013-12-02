// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="queue"><%= artist %></td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.play();
      // this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
