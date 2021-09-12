import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  ngOnInit(): void {
  }

  constructor(public dialog:MatDialog){}

  gotoLogin()
  {
    this.dialog.open(LoginComponent);
  }
  gotoSignin()
  {
   
    this.dialog.open(SignupComponent);
   
  }

}
