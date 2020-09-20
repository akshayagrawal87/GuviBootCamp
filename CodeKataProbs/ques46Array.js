// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  let arr=userInput[1].split(' ').map(Number)
  
  function subArrayCreator(start,end,arr){
      
      var temp=[]
      
      if(end<arr.length)
      for(let i=start;i<=end;i++){
          temp.push(arr[i])
      }
      return temp
  }
  
  function sumArray(num){
      
      return num.reduce((total,item)=>{
          return total+item
      },0)
      
  }
  
 let subarray=[]
 
for(let i=0;i<arr.length;i++){
    
    for(j=0;j<arr.length;j++){
        
        var temp=subArrayCreator(i,j,arr)
        if(temp.length!==0)
        subarray.push(temp)
    }
    
}


let max=-9999



for(var a of subarray){
    
    let temp=sumArray(a)
   
 
    if(temp>max)
    max=temp
    
}


console.log(max)
  //end-here
});