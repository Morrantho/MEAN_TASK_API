let mongoose   = require("mongoose");
let Schema     = mongoose.Schema;
let ForeignKey = Schema.Types.ObjectId;

mongoose.model("User",new Schema({
    
    name:{
        type:String,
        required:true,
        maxlength:10
    },

    tasks:[{
        type:ForeignKey,
        ref:"Task"  
    }]

}))