var task1 = {
	title: "Создать объект из двух массивов",
	description: "Сделай объект",
	depends: {
		task: [{
			uri: "extend-object",
			strength: 3
		}, {
			uri: "query-string-to-object",
			strength: 6
		}]
	},
	relates: {
		article: [{
			uri: "about-objects",
			strength: 10
		}],
		task: [{
			uri: "split-object-into-arrays",
			strength: 5
		}]
	}
};


var task2 = {
	title: "Сложить только положительные числа из массива",
	description: "Сложить",
	depends: {
		task: [{
			uri: "summ",
			strength: 5
		}],
		relates: {}
	}
}