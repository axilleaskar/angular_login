import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { PhoneService } from '../phone.service';

export interface BestPhone  {
  name:string;
  numberOfCams:string;
  mainCamera:string; 
  secondaryCamera:string;
  thirdCamera:string;
  Battery:string;
}
@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  public phones = [];
  phoneOneId:number;
  phoneTwoId:number;
  myBool= false;
  bestPhone:BestPhone = {name:"",numberOfCams: "", mainCamera: "", secondaryCamera:"",thirdCamera:"",Battery:""};
  counterone = 0;
  countertwo = 0;
 

  constructor(private phoneService: PhoneService) { }

  ngOnInit() {
    this.phones = this.phoneService.getPhones();
  }
  firstControl = new FormControl('', [Validators.required]);
  secondControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  comparePhones(phoneone,phonetwo){
    if(phoneone.name != undefined && phonetwo.name !=undefined && phoneone.id != phonetwo.id){
      this.myBool = true;
      console.log(phoneone.name);
      this.phoneOneId = phoneone.id
      console.log(phonetwo.name);
      this.phoneTwoId = phonetwo.id

      if(phoneone.mainCamera > phonetwo.mainCamera){
        this.bestPhone.mainCamera = phoneone.mainCamera + " " + phoneone.name + " wins";
        this.counterone++;
      }else if(phoneone.mainCamera < phonetwo.mainCamera){
        this.bestPhone.mainCamera = phonetwo.mainCamera + " " + phonetwo.name + " wins";
        this.countertwo++;
      }else{
        this.bestPhone.mainCamera =  phonetwo.mainCamera + " " + phoneone.name + " & "+ phonetwo.name;
      }

      if(phoneone.numberOfCams > phonetwo.numberOfCams){
        this.bestPhone.numberOfCams = phoneone.numberOfCams + " " + phoneone.name + " wins";
        this.counterone++;
      }else if(phoneone.numberOfCams < phonetwo.numberOfCams){
        this.bestPhone.numberOfCams = phonetwo.numberOfCams + " " + phonetwo.name + " wins";
        this.countertwo++;
      }else {
        this.bestPhone.numberOfCams = phonetwo.numberOfCams + " " + phoneone.name + " & "+ phonetwo.name;
      }

      if(phoneone.secondaryCamera > phonetwo.secondaryCamera){
        this.bestPhone.secondaryCamera = phoneone.secondaryCamera + " " + phoneone.name + " wins";
        this.counterone++;
      }else if(phoneone.secondaryCamera < phonetwo.secondaryCamera){
        this.bestPhone.secondaryCamera = phonetwo.secondaryCamera + " " + phonetwo.name + " wins";
        this.countertwo++;
      }else{
        this.bestPhone.secondaryCamera = phonetwo.secondaryCamera + " " + phoneone.name + " & "+ phonetwo.name;
      }

      if(phoneone.thirdCamera > phonetwo.thirdCamera){
        this.bestPhone.thirdCamera = phoneone.thirdCamera + " " + phoneone.name + " wins";
        this.counterone++;
      }else if(phoneone.thirdCamera < phonetwo.thirdCamera){
        this.bestPhone.thirdCamera = phonetwo.thirdCamera + " " + phonetwo.name + " wins";
        this.countertwo++;
      }else{
        this.bestPhone.thirdCamera = phonetwo.thirdCamera + " " + phoneone.name + " & "+ phonetwo.name;
      }

      if(phoneone.Battery > phonetwo.Battery){
        this.bestPhone.Battery = phoneone.Battery + " " + phoneone.name + " wins";
        this.counterone++;
      }else if(phoneone.Battery < phonetwo.Battery){
        this.bestPhone.Battery = phonetwo.Battery + " " + phonetwo.name + " wins";
        this.countertwo++;
      }else{
        this.bestPhone.Battery = phonetwo.Battery + " " + phoneone.name + " & "+ phonetwo.name;
      }

      if(this.counterone > this.countertwo) {
        this.bestPhone.name = phoneone.name;
      }else if(this.counterone < this.countertwo){
        this.bestPhone.name = phonetwo.name
      }else {
        this.bestPhone.name = "Both " + phoneone.name + " and " + phonetwo.name + " are pretty good."
      }
      
      this.counterone=0;
      this.countertwo=0;



    }else{alert("Select two different Phones");
    this.myBool = false;
  }
  }

}
