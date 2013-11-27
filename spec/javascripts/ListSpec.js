describe("GroceryList", function() {

	it("contains a list of items", function() {
		var my_list = new GroceryList
		expect(my_list.all).toBe([]);
	});

	it("can have an item added", function() {
		var item = new Item("Banana", .50),
		my_list.add(item);
		expect(my_list.all[0].name).toBe("Banana");
	});

	it("calculates a total cost for all items", function(){
	expect(my_list.total).toBe(.50);
	});
});