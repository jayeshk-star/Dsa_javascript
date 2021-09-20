var a=[3,5,6,1,8];
var n=a.length

var sum=0
for(let i=0;i<n-1;i++){
    var sub=a[i]-a[i+1];
    if(sub<0){
        sub=-sub;
    }else{
        sub=sub
    }
     sum=sum+sub
}
// console.log(sum)

var a=-11;
let b=Math.abs(a)
console.log(b)