import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackService } from '../services/snack.service';
import { MatDialog } from '@angular/material/dialog';
import { EmpListeComponent } from '../emp-liste/emp-liste.component';
import { UpdateComponent } from '../update/update.component';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
 
  constructor(private _server : EmployeeService ,
              private router : Router ,
               private route : ActivatedRoute,
               private _snack : SnackService,
               private _dialog : MatDialog,

              ){}
               
  ngOnInit() {
 this.Show();    

  }
  AllData : any[] =[]
  Show(){
   this._server.GetData().subscribe((data : any[]) => {
   this._server.AllData = data;
  this.AllData = this._server.AllData;
   }); 
  }
  Onclick()
  {
   const dialogRef = this._dialog.open(EmpListeComponent);
   dialogRef.afterClosed().subscribe(
    {next:( value ) => {
      if(value){
        this.Show();
      }
    },
  });  
  }
  deleteAll( employeeID : any ) {
    
    this._server.DeleteItem(employeeID).subscribe((response:any) =>{
     this._snack.openSnackBar(response.message , ' done');

    this.Show();
    });
    
   this.router.navigate([`../`], {relativeTo : this.route });  
  }
  Update(data : any) {

   this._dialog.open(UpdateComponent, 
    {
      data,
    })
     
  }

  details(data : any) {
  
  debugger;
    this._dialog.open(DetailsComponent, 
      {
        data,
      })

  }

}
