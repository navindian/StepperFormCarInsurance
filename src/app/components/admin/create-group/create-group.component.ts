import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  groupsForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.groupsForm = this.formBuilder.group({
      groupName: ['', Validators.required],
      description: ['', Validators.required]
    })
  };

  submit(){
    console.log("Group form submitted")
    console.log(this.groupsForm.value);
  };

  get formControls() {
    return this.groupsForm.controls;
  }

}