var name = [2, 3, 11, 34, 3, 1, 7, 2, 1, 8, 34];
var uniqueName = [];

for(var i = 0; i < name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);
