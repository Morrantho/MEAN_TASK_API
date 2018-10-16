let express = require("express");
let bp      = require("body-parser");
let session = require("express-session");
let app     = express();
const PORT  = 8000;

app.use(bp.urlencoded({extended:true}));
app.use(express.json());
app.use(session({secret:"hideme"}));

let clientDir = __dirname.substring(0,__dirname.length-6)+"client";
app.use(express.static( clientDir+'/dist/client' ));

// Connect to DB and Load Models
require("./config/db.js");
// Give our routing file access to our app.
require("./config/routes.js")(app);

app.listen(PORT,()=>{
    console.log("LISTENING ON: ",PORT);
});