var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		let newArray = [];
		for (let item of arr) {
			newArray.push(item * item)
		}
		return newArray;
	},

	sum: function (arr) {
		let total = 0;
		for (let item of arr) {
			total += item;
		}
		return total;
	},

	// findDuplicates: function (arr) {

	// },

	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
