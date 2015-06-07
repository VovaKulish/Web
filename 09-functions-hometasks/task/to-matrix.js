function toMatrix(data, rowSize) {
    var matrix = [], i, k;
    	for (i = 0, k = -1; i < data.length; i++) {
        	if (i % rowSize === 0) {
            	k++;
            	matrix[k] = [];
        }
        matrix[k].push(data[i]);
    }
    return matrix;
}