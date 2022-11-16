import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Itask } from 'src/app/interfaces/itask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!:Itask;
  // ngOnChanges(){
  //   return this.task.priority_level = "medium"
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
