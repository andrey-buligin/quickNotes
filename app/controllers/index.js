function doClick(e) {  
    alert($.label.text);
}

var animation = require('alloy/animation');

$.sfb.setHandlers({
  success: function(books) {
    var data = [];
    _.each(books, function(book) {
      var args = {
        title: book.title,
        authors: book.authors,
        image: book.image
      };
      var row = Alloy.createController('row', args).getView();
      data.push(row);
    });
    $.table.setData(data);
  }
});

$.index.open();
