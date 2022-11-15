import { Component, OnInit } from '@angular/core';
import { Itask } from 'src/app/interfaces/itask';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks!: Itask[];
  
  constructor(private service:TasksService) {
    service.getTasks().subscribe((results) => {
      this.tasks = results;
    });
  }

  ngOnInit(): void {
  }

}
