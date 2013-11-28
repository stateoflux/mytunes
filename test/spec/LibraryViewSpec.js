describe("LibraryView", function() {
  var view, fakeSongs, fakeSongData, fakeSubview;

  beforeEach(function() {
    fakeSongData = [
      {
        artist: 'Fakey McFakerson',
        title: 'Never Gonna Mock You Up',
        url: 'example/url'
      },
      {
        artist: 'BittyBacon',
        title: 'Sizzle Sundays',
        url: 'fake/url'
      }
    ];
    fakeSongs = new Backbone.Collection(fakeSongData);

    fakeSubview = { render: jasmine.createSpy() };

    view = new MyTunes.Views.LibraryView({collection: fakeSongs});
    spyOn(MyTunes.Views, 'LibraryEntryView').andReturn(fakeSubview);
  });

  it("should render its subviews when you render it", function(){
    view.render();
    expect(fakeSubview.render.callCount).toEqual(fakeSongData.length);
  });
  it("should have a header element after being rendered", function(){
    expect(view.$el.children().length).toBe(2);
    view.render();
    expect(view.$el.children()[0].tagName).toBe('TH');
  });
});
