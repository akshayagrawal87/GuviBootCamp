var fs=require('fs')
fs.writeFile('demo.txt','this is akshay fro zen',function(err){

    if(err){

        console.log(err)

    }
console.log("File Created")
})