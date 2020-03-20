module.exports = function countCats(matrix) {
  if(matrix.length < 1){return 0}
  var catsearsnumber = 0;
  for(var i = 0; i < matrix.length ; i ++ ){
    for(var k = 0; k < matrix[0].length ; k ++){
        if(matrix[i][k]=='^^'){catsearsnumber++;}
        
    }
  }
  return catsearsnumber;
};
