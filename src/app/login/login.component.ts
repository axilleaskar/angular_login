import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public logincredentials = []
  public msg;
  constructor(private router: Router, private loginService: LoginService) { }
  ngOnInit() {
    this.loginService.getLogin().subscribe(data => this.logincredentials = data);
    
  }
  check(uname: string, p : string)
  {
    let output = this.loginService.login(uname, p);
    if(output == true)
    {
      this.router.navigate(['/home']);
    }
    else{
console.log('Invalid username or password');
    }
  }

  }
