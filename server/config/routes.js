let TaskController = require("../controllers/TaskController.js");
let UserController = require("../controllers/UserController.js");
let path = require("path");

module.exports=(app)=>{
    app.get("/api/tasks",TaskController.all);
    app.post("/api/tasks",TaskController.create);
    app.get("/api/tasks/:id",TaskController.findById);
    app.patch("/api/tasks/:id",TaskController.update);
    app.delete("/api/tasks/:id",TaskController.destroy);

    app.post("/api/users",UserController.create);
    app.get("/api/users/:id",UserController.findById);

    // app.all("*", (req,res,next) => {
    //     res.sendFile(path.resolve("../client/dist/client/index.html"));
    // });
}