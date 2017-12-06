var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		let newArray = arr.map(x => x * x)

		return newArray
	},

	sum: function (arr) {
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		const sum = arr.reduce(reducer);
		return sum;
	},

	findDuplicates: function (arr) {
		let newArray = [];
		let duplicatesArray = [];
		for (let item of arr) {
			if (newArray.includes(item) && !duplicatesArray.includes(item)) {
				duplicatesArray.push(item);
			}
		newArray.push(item);
		}
		return duplicatesArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		if (arr.includes(valueToRemove)) {
			for (let item of arr) {
				if (item === valueToRemove) {
					arr.splice(arr.indexOf(item), 1)
				}
			}
		}
		return arr;
	},

	findIndexesOf: function (arr, itemToFind) {
		if (arr.includes(itemToFind)) {
			let newArray = []
			for (let item of arr) {
				if (item === itemToFind) {
					newArray.push(arr.indexOf(item));
				}
			}
		}
		return newArray;
	},

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
