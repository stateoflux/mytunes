// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><span class="fui-volume"></span></td><td class="queue"><%= artist %></td><td><%= title %></td> <td><span class="fui-cross"></span></td>'),

  events: {
    'click .queue': function() {
      this.model.play();
      console.log("Clicked on queue");  
      // this.model.enqueue();
    },
    'click .fui-cross': function() {
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
