const express = require("express")
const app = express()
const cors = require("cors")
const http = require('http').Server(app);
const PORT = 4000
const fs = require("fs")
const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:5173"
    }
});
const savedData = fs.readFileSync("data.json")
const objectData = JSON.parse(savedData)

app.use(cors())

 
function findProduct(nameKey, myArray, last_bidder, amount){
   

 for (let i=0; i < myArray.length; i++) {
   // for(let i=0; i <10; i++) {
      if (myArray[i].name === nameKey) {
         myArray[i].last_bidder = last_bidder
         myArray[i].price = amount 
         
      }
      
    }
    
  const stringData = JSON.stringify(objectData, null, 2)
  fs.writeFile("data.json", stringData, (err)=> {
    console.error(err)
  })
}



socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });

    socket.on('addProduct', (data) => {
      console.log('newMesage!!!!!!!!!!!!!!!',data);
        objectData["products"].push(data)
        const stringData = JSON.stringify(objectData, null, 2)
        fs.writeFile("data.json", stringData, (err)=> {
          console.error(err)
        })
    socket.broadcast.emit("addProductResponse", data)
  });

  socket.on("bidProduct", data => {
   

    findProduct(data.name, objectData["products"], data.last_bidder, data.amount) 
       
    socket.broadcast.emit("bidProductResponse", data)
    console.log('newMesage2!!!!!!!!!!!!!!!',data)
  });
   /***Server-side Just to get the ball rolling I'm going to write a little code in my app.js file right at the bottom to setup a very crude counter. */   
   let countdown = 1000;
   setInterval(function() {
     countdown--;
     socketIO.sockets.emit('timer', {countdown: countdown});
   }, 1000);
   
   socketIO.sockets.on('connection', function(socket) {
     socket.on('reset', function(data) {
       countdown = 1000;
       socketIO.sockets.emit('timer', {countdown: countdown});
     });
   });

});

app.get("/api", (req, res) => {
  const data = fs.readFileSync("data.json")
  const products =  JSON.parse(data)
  res.json(products)
});

   
http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
