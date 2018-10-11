let Task = require("mongoose").model("Task");

class TaskController{

    update(req,res){
        Task.findOne({_id:req.params.id},(e,task)=>{
            task.title = req.body.title || task.title;
            task.description = req.body.description || task.description;
            task.completed = req.body.completed || task.completed;

            task.save( (e)=>{
                if(e) return res.json(e);
                return res.json(task);
            } );
        })
    }

    destroy(req,res){
        Task.findOne({_id:req.params.id},(e,task)=>{
            if(!task) return res.json(e);

            Task.deleteOne( { _id:req.params.id } , (e)=>{
                if(e) return res.json(e);
                return res.json(task);
            } )
        })
    }

    findById(req,res){
        Task.findOne( { _id:req.params.id }, ( e,task )=>{
            if(!task) return res.json(e);
            return res.json(task);
        } )
    }

    all(req,res){
        Task.find({}, ( err, tasks )=>{
            if(err) return res.json(err);
            return res.json(tasks);
        } )
    }

    create(req,res){
        let task = new Task(req.body);

        task.save( (err)=>{
            if(err){return res.json(err);}

            return res.json(task);
        } );
    }

}

module.exports = new TaskController();