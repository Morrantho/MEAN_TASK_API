let mongoose   = require("mongoose");
let Schema     = mongoose.Schema;
let ForeignKey = Schema.Types.ObjectId;

let Task = new Schema({
    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },
    
    completed:{
        type:Boolean,
        default:false
    },

    user:{
        type:ForeignKey,
        ref:"User",
        required:true
    }

},{timestamps:true})

mongoose.model("Task",Task);