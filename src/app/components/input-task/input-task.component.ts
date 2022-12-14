import { Component, Input, OnInit } from '@angular/core';
import { ITask, LEVELS } from 'src/app/models/tasks.interface';

@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.css'],
})
export class InputTaskComponent implements OnInit {
  @Input() task: ITask = {
    title: '',
    description: '',
    completed: false,
    level: LEVELS.INFO,
  };

  constructor() {}

  ngOnInit(): void {}
}
