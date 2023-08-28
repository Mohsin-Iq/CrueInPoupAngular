import { Component, Inject, OnInit} from '@angular/core';
import {  Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { SnackService } from '../services/snack.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
  
})
export class UpdateComponent  implements OnInit  {

  constructor(private router: Router,
                private _server: EmployeeService,
                private _snack : SnackService,
                private _dialog : MatDialog,
                @Inject(MAT_DIALOG_DATA) public data : any,
                ) {}

    employee : any  = [];


  ngOnInit(): void { 
this.employee = this.data;
  
  }
  Updateit( emp : any){ 
    this._server.updateData(emp).subscribe( response  =>
    {
      this._snack.openSnackBar(response.message , 'done');
      this._dialog.closeAll();
    },
    error => console.log(error)
    )
    
  }
}
