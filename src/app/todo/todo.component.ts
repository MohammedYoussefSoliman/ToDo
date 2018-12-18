import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
TodoTitle:String ='';
TodoDesc:string ='';
TodoTiList:string[] = [];
TodoDesList:string[] = [];
Todo:TodoItem[];
TodoList:object=[
  {
    Title:'',
    Description:''
  }
];
TodoListMulti:object = [];

// geTDes(event:Event){
//   return this.TodoDesList.push((<HTMLInputElement>event.target).value);
// }


// submit(){

//   if(this.TodoTitle !='' && this.TodoDesc !=''){
//     this.TodoTitle=this.Todo['Title']
//     this.TodoDesc=this.Todo['Description']
//   }else{
//     alert('Please add a Todo item');
//     }
//   }

submit(value1,value2) {
  if(value1 !=''){
  this.TodoTiList.push(value1);
  this.TodoDesList.push(value2);
} // I couldn't merge the result two arrays TodoTiList and TodoDesList into one object in order to loop on it and creat a single ngFor that will allow me to include a description to the ToDo.
else{
  alert('Please add a ToDo title')
}
}

deleteItem(t){
  for(let i=0 ;i<= this.TodoTiList.length ;i++){
   if(t== this.TodoTiList[i]){
    this.TodoTiList.splice(i,1)
   }
  }
 }

  constructor() { }

  ngOnInit() {
  }

}
