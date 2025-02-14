import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
  name: string; 
  initArray: any = [];
  nameArray:any =[];

  constructor(public toDoService : TodoServiceService){ }

  ngOnInit(): void {
  }

  onSubmit(value: any): void {
    console.log(value)

    if (value===null || value ===undefined || value === "") {
      alert('Task cannot be empty.');
    } 
    else{
      this.initArray.push({name: value, checked: false});
      
      this.toDoService.setToDosData(this.initArray);
      this.updateRoDosArrayFromService();
      this.name='';
    }
  }

  updateRoDosArrayFromService(): void {
    this.nameArray = this.toDoService.toDoList;
  }

  deleteRow(index: number) {
    this.nameArray.splice(index,1);
  }

  onCheckboxChange(value: any, i: number): void {
    if (value.target.checked ) {
      this.nameArray[i].checked = true;
    } else {
      this.nameArray[i].checked = false;
    }
  }
}
