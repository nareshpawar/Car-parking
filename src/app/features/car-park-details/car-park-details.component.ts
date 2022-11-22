import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-car-park-details',
  templateUrl: './car-park-details.component.html',
  styleUrls: ['./car-park-details.component.scss']
})
export class CarParkDetailsComponent implements OnInit {

  public formCar!: FormGroup;
  validationMessages: any

  constructor(private formBuilder: FormBuilder, private appservice : AppserviceService ) {
    this.validationMessages = {
      carNumber: {
        required: "Please enter car number",
      },
      vehicalType:{
        required: "Please enter Vehical type",

      },
      carOwnerName: {
        required: "Please enter car owner name",
      },
      email: {
        required: "Please enter email ID",
      },
      phone: {
        required: "Please enter cell",
      },
      num_Vehicals:{
        required: "Please enter car person details",
      },
      address:{
        required:"Please enter address"
      }
    }
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formCar = this.formBuilder.group({
      carNumber: [
        null,
        [Validators.required],
      ],
      vehicalType: [
        null,
        [Validators.required],
      ],
      carOwnerName: [
        null,
        [Validators.required],
      ],
      email: [
        null,
        [Validators.required],
      ],
      phone: [
        null,
        [Validators.required],
      ],
      num_Vehicals: [
        null,
        [Validators.required],
      ],
      address: [
        null,
        [Validators.required],
      ],
    })
  }

  public showValidationMessages(control: string): string[] {
    const messages: any[] = [];
    if(this.formCar && this.formCar.get(control)){
      Object.keys(this.validationMessages[control]).forEach((validator) => {
        if(this.formCar!=null){
          if ((this.formCar.get(control)?.touched || this.formCar.get(control)?.dirty) && this.formCar.get(control)?.errors) {
            if (this.formCar.get(control)?.errors && this.formCar.get(control)?.errors?.[validator]) {
              messages.push(this.validationMessages[control][validator]);
            }
          }
        }
      });
    }
    return messages;
  }


  submitForm(){
      console.log(this.formCar.value);
      let carDetails = {
        "address": this.formCar.value.address,
        "car_number": this.formCar.value.carNumber,
        "car_owner_name": this.formCar.value.carOwnerName,
        "emailId": this.formCar.value.email,
        "mobile": this.formCar.value.phone,
        "no_of_cars": this.formCar.value.num_Vehicals,
        "vehicleType": this.formCar.value.vehicalType
      }    


      if(this.formCar.valid){
        this.appservice.submitParkingDetails(carDetails).subscribe(res=>{
          console.log(res);
        },error=>{
            
        })
        
      }else{
        alert("Please Fill the Form");

      }
  }




}


