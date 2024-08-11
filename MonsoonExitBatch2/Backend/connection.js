const mongoose = require("mongoose");
//Write missing code 
mongoose.connect('mongodb+srv://paulantonythevarib21ec1246:romelo77@cluster0.gbbofqj.mongodb.net/empdb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
  console.log('DB is connected')
}).catch((res)=>{
  console.log('DB not connected')
})

