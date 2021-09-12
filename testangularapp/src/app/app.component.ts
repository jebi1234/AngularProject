import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testangularapp';
  
  // constructor(private router :Router){}

  // constructor(public dialog:MatDialog){}

  // gotoLogin()
  // {
  //   this.dialog.open(LoginComponent);
  // }

  // gotoLogin()
  // {
  //   this.router.navigate(["loginpage"]);
  // }
 
  
  
 

}
