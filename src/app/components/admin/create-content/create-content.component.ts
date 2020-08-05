import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  contentForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contentForm=this.fb.group({
      title: ['',Validators.required],
      description: ['',Validators.required]
    })
  }
  get formControls() {
    return this.contentForm.controls;
  }
  submit(){
    console.log("Content form submitted")
    console.log(this.contentForm.value);
  }
}
