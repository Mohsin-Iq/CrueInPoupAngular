import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import {    Router } from '@angular/router';
import { SnackService } from '../services/snack.service';
import {  MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-emp-liste',
  templateUrl: './emp-liste.component.html',
  styleUrls: ['./emp-liste.component.scss']
})
export class EmpListeComponent  implements OnInit{

  
  employee = {
      employeeID: '',
      name: '',
      email: '',
      phone:''
      
    };
    ngOnInit(): void {  
      this.router.navigate(['']);
    }
    
  constructor ( private _server : EmployeeService,
                private router : Router ,
                 private _snack : SnackService,
                 private _dialog : MatDialogRef<EmpListeComponent>,
                 ){}

  saveTutorial() {
    const data = {
      name: this.employee.name,
      email: this.employee.email,
      phone: this.employee.phone,
      
    };
    this._server.createItem(data).subscribe({
      next :(value : any ) => {
        this._snack.openSnackBar('create Successfully' , ' done');
       this._dialog.close(true);
      },
      error :(error : any) => console.error(error)

    });
  }

  
}
