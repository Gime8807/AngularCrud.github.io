import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Crud';

  employees= [
    {name:'Facundo', position:'Manager', email:'email@email.com'},
    {name:'Pablo', position:'Designer',email:'email@email.com'},
    {name:'Elena', position:'Programmer', email:'email@email.com'}
  ];
  
  model:any= {};
  model2:any= {};
  msg:string= '';
  hideUpdate:boolean= true;

  addEmployee(): void{
    this.employees.push (this.model);
    this.msg= 'Record is successfuly Save'
  }

  deleteEmployee(i):void{
    var answer = confirm ('Are you sure you want to delete');
    if (answer) { this.employees.splice(i,1);
    this.msg= 'Record is successfully Delete';
    }
  }
  

  myValue;

  editEmployee(i):void {
    this.hideUpdate= false;
    this.model2.name= this.employees[i].name;
    this.model2.position= this.employees[i].position;
    this.model2.email= this.employees[i].email;
    this.myValue=i;
  }

  updateEmployee(): void{
    let i= this.myValue;
    for (let j=0;j<this.employees.length; j++){
      if (i==j){
        this.employees[i]=this.model2;
        this.model2={};
        this.msg='Record is successfuly Updated'
      }
    }
  }

  closeAlert():void {
    this.msg='';
  }
}
