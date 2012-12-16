function Controller() {
    function doClick(e) {
        alert($.label.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.index = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    }), "Window", null);
    $.addTopLevelView($.__views.index);
    $.__views.label = A$(Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, World",
        id: "label"
    }), "Label", $.__views.index);
    $.__views.index.add($.__views.label);
    $.__views.label.on("click", function() {
        doClick.apply(this, Array.prototype.slice.apply(arguments));
    });
    $.__views.sfb = Alloy.createWidget("com.appcelerator.searchForBooks", "widget", {
        id: "sfb"
    });
    $.__views.sfb.setParent($.__views.index);
    var __alloyId2 = [];
    $.__views.table = A$(Ti.UI.createTableView({
        top: "90dp",
        bottom: 0,
        id: "table"
    }), "TableView", $.__views.index);
    $.__views.index.add($.__views.table);
    _.extend($, $.__views);
    var animation = require("alloy/animation");
    $.sfb.setHandlers({
        success: function(books) {
            var data = [];
            _.each(books, function(book) {
                var args = {
                    title: book.title,
                    authors: book.authors,
                    image: book.image
                }, row = Alloy.createController("row", args).getView();
                data.push(row);
            });
            $.table.setData(data);
        }
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;