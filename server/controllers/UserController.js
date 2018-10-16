let User = require("mongoose").model("User");

class UserController{

    create(req,res){
        let user = new User(req.body);

        user.save(e=>{
            if(e) return res.json(e);
            return res.json(user);
        });
    }

    findById(req,res){
        User.findOne({ _id:req.params.id })
        .populate({
            path:"tasks",
            ref:"Task"
        })
        .exec((e,user)=>{
            if(!user) return res.json(e);
            return res.json(user);
        })
    }
}

module.exports = new UserController();