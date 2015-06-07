function isArray(object) {
	return Object.prototype.toString.call(object) === '[object Array]';
}

function createList(listData, listContainer, itemContainer) {
	listContainer = listContainer || 'ul';
	itemContainer = itemContainer || 'li';
	var res = document.createElement(listContainer);
	var listItemContainer;
	for (var i = 0; i < listData.length; i += 1) {
		listItemContainer = document.createElement(itemContainer);
		if (isArray(listData[i])) {
			listItemContainer.appendChild(createList(listData[i], listContainer, itemContainer));
		} else {
			listItemContainer.innerText = listData[i];
		}
		res.appendChild(listItemContainer);
	}
	return res;
}

// createList(['мясо', ['яблоки', 'бананы']], 'ol');
createList(['мясо', ['яблоки', 'бананы']], 'div', 'div');