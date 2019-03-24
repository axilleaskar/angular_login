import { Component, OnInit, Input } from '@angular/core';
import { PhoneService } from 'src/app/phone.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() phoneId;
  @Input() clickedBool;
  public phones = [];
  constructor(private phoneService: PhoneService) { }

  ngOnInit() {
    this.phones = this.phoneService.getPhones();
  }

}
