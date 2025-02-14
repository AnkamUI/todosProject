import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  toDoList: any = [];

  constructor() { }

  setToDosData(value: any): void {
    this.toDoList= value;
  }
}
