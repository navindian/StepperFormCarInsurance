import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-broker-company',
  templateUrl: './broker-company.component.html',
  styleUrls: ['./broker-company.component.css']
})
export class BrokerCompanyComponent implements OnInit {

  brokerForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.brokerForm=this.fb.group({
      companyName:['',[Validators.required]],
      companyType:['',[Validators.required]],
      sellerCode:['',[Validators.required]]
    })
  }
  send=()=>{
    console.log(this.brokerForm.value);
    
  }

}
