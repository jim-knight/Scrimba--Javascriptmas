import products from './data.js';

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(data) {
	let shoppingCart = data.map((product) => {
		let itemObj = {
			item: product.item,
			price: product.price,
			type: product.type,
		};
		return itemObj;
	});
	return shoppingCart.filter((item) => item.type == 'sweet');
}
console.log(getSaleItems(products));

// Refactor
function getSaleItems2(data) {
	let shoppingCart = data
		.filter((product) => product.type === 'sweet')
		.map((product) => {
			return { item: product.item, price: product.price };
		});
	return shoppingCart;
}
console.log(getSaleItems2(products));
