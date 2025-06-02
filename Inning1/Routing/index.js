const express = require("express")
const app = express();
const port = 3000

//import item router file
const item = require("./routes/item")
const birds = require('./routes/Birds')




// ->/api/  ->item Home page
// ->/api/itms ->item post request
// ->/api/itms/id ->put/delete request 


//Loading routes
app.use('/api',item); 
app.use('/bird',birds);

app.listen(port,()=>{
    console.log(`Our Application is runnig on the port no ${port}`)
})