import { Component, Inject, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { SnackService } from '../services/snack.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  

constructor(
            private _server : EmployeeService ,
            private _snack : SnackService,
            private _dialog : MatDialog,
            @Inject(MAT_DIALOG_DATA) public data : any,
            ){}

  ngOnInit(): void {
this.employee = this.data;
    
  }
    employee = {
    employeeID: '',
    name: '',
    email: '',
    phone:''
  };

   deleteAll( employeeID : any ) {
    
    this._server.DeleteItem(employeeID).subscribe((response:any) =>{
     this._snack.openSnackBar(response.message , ' done');
     this._dialog.closeAll();
    });
  }
  edit(data : any){
    
   this._dialog.open(UpdateComponent, { data,})
  }
}
