import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public phones = [];
  public phoneId:number;
  public phoneName:string;
  public clickedBool = false;
  

  constructor(private phoneService: PhoneService) { }

  ngOnInit() {
    this.phones = this.phoneService.getPhones();
  }
  selectPhone(phone) {
    this.phoneId = phone.id;
    this.clickedBool = true;
  }
}