import { Component, OnInit } from '@angular/core';
import { TaskService } from "../task.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
    private tasks:any;

    constructor(private taskService:TaskService){}

    ngOnInit() {
        this.taskService.all(data => { console.log(data); this.tasks = data} );
    }
}
