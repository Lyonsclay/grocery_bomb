// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

/*
 * What are the objects in this exercise?
 * What are their properties and methods?
 * How do your objects interact with their respective DOM elements?
 */

function Item(name, price) {
  this.name = name;
  this.price = price;
};

function GroceryList(){
  this.all = []
  };

GroceryList.prototype.add = function(item) {
  this.all.push(item)
};

GroceryList.prototype.total = function() {
  var total = 0;
  var itemsLength = this.length;
  var price_list = this.all.map(function(n) { return n.price});
  var total = price_list.reduce(function(a, b) { return a + b })
  return total
};

var groceryStore = {
  init: function(storeItems) {
    this.items = storeItems
  },
  find_item: function(item_name) {
    return $.grep(storeItems, function(e){ return e.name == item_name; })[0]
  },
  find_item_price: function(item_name) {
    return $.grep(storeItems, function(e){ return e.name == item_name; })[0].price
  }

};
var storeItems = [
  new Item("Apple", 0.69),
  new Item("Tofu", 3.49),
  new Item("Granola", 4.55),
  new Item("Flatbread", 6.21),
  new Item("Zucchini", 1.22),
  new Item("Organic beef", 12.99),
];

myGroceries = new GroceryList
$(function() {
  $(".item").draggable({
    helper: "clone"
  });

  $("#grocery_list").droppable({
    drop: function(event, ui) {
      var name = ui.draggable.find(".item_name").text();
      item = groceryStore.find_item(name);
      console.log(item)
      myGroceries.add(item);
      price = item.price
      grandTotal = myGroceries.total()
      var totalNode = "<td>" + grandTotal.toFixed(2) + "</td>"
      var node = "<tr><td>" + name + "</td><td>" + price + "</td></tr>"
      $(node).prependTo("#grocery_list tbody");
      $("#total_cost").empty()
      $(totalNode).appendTo("#total_cost");
      }
  });
});