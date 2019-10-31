//作业1
var str = "hello  lovia"
var str=str.split(' ')
for(var i=0;i<str.length;i++){
  var b=str[i].slice(0,1).toUpperCase();
  var s=str[i].slice(1);
  str[i]=b+s;
}
console.log(str.join(' '))
//作业2
var arr=[6,3,8,2]
arr.sort(function(a,b){return a-b});
console.log(arr)
//作业3
var arr = [ [1,2] , 3,[4,[5,[6]] , 7] ]
var arr1=arr.toString()
console.log('['+arr2+']')