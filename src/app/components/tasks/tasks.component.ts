import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ITask, LEVELS } from 'src/app/models/tasks.interface';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  color: string = '';
  hoverColor: string = ''
  todo: ITask[] = [
    {
      title: 'Aprender Angular',
      description: 'Seguir con avanzando',
      completed: false,
      level: LEVELS.INFO
    },
    {
      title: 'Aprender React',
      description: 'Seguir con avanzando',
      completed: false,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Aprender Js',
      description: 'Seguir con avanzando',
      completed: false,
      level: LEVELS.URGENTE
    }
  ]

  done: ITask[] = [
    {
      title: 'Aprender VSC',
      description: 'Seguir con avanzando',
      completed: true,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Aprender TypeScript',
      description: 'Seguir con avanzando',
      completed: true,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Aprender Git',
      description: 'Seguir con avanzando',
      completed: true,
      level: LEVELS.BLOCKING
    }
  ]


  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      //actualizar el valor del completed
      event.previousContainer.data[event.previousIndex].completed = event.previousContainer.data[event.previousIndex].completed
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
