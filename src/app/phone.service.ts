import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor() { }

  getPhones() {
    return [
      { "id": 0,
        "name": "Xiaomi pocophone f1",
        "cpu": "snapdragon 845",
        "numberOfCams": 2,
        "mainCamera": 20,
        "secondaryCamera": 12 ,
        "thirdCamera": 0,
        "Battery": 4000 },
        {"id": 1,
        "name": "Xiaomi Redmi 5 Plus",
        "cpu": "snapdragon 625",
        "numberOfCams": 2,
        "mainCamera": 16,
        "secondaryCamera": 12 ,
        "thirdCamera": 0,
        "Battery": 4100 },
        { "id": 2,
          "name": "Samsung S10",
        "cpu": "Mongoose M4",
        "numberOfCams": 3,
        "mainCamera": 12,
        "secondaryCamera": 10 ,
        "thirdCamera": 16,
        "Battery": 3400 }
    ]
  }
}
