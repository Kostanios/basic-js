module.exports = function createDreamTeam(members) {
 if(!Array.isArray(members)){return false}
  var nameArray = [];
  for(var i = 0; i < members.length ; i++){
    if(typeof (members[i]) =="string"){
      fakeArray = members[i].split(" ");
      for(var k = 0 ; k <fakeArray.length ; k++){
        if(fakeArray[k] !=" " && fakeArray[k] !=""){
          nameArray.push(fakeArray[k]);
          break;
        }
      }
    } 

  }

  members = nameArray;

  console.log(members);
  
  var recalName = '';
  for(var i = 0 ; i < members.length - 1; i++){
    for(var k = 0; k < members.length - 1; k++){
    if(members[k][0].toLowerCase().charCodeAt() > members[k+1][0].toLowerCase().charCodeAt()){
      var fake = members[k];
      members[k] = members[k+1];
      members[k+1] = fake;
    }
   }
  }
  for(var i = 0; i < members.length ; i++){
    recalName+=members[i][0].toUpperCase();
  }
  console.log(recalName);
  return recalName;
};
