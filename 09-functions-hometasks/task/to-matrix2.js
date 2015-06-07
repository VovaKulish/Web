function toMatrix(data, rowSize) {
 'use strict';
 var matrix = [];
 for (var i = 0; i < data.length; i += rowSize) {
  matrix.push(data.slice(i, i + rowSize));
 }
 return matrix;
}