import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { CommonDataService } from 'src/app/common-data.service';

@Component({
selector: 'app-policy-details',
templateUrl: './policy-details.component.html',
styleUrls: ['./policy-details.component.css'],
})
export class PolicyDetailsComponent implements OnInit {
@Output() Toggle = new EventEmitter();
@Output() Submission = new EventEmitter<any>();
@Input() policyDateSelected: Date;
@Input() policyLengthEntered: number;
registerForm: FormGroup;
todaydate = new Date();
day = '';
month = '';
mindate = '';
policyLength = [
{ value: 1, name: '1 Month' },
{ value: 3, name: '3 Months' },
{ value: 6, name: '6 Months' },
{ value: 12, name: '12 Months' },
];

constructor(
private formBuilder: FormBuilder,
private commonDataService: CommonDataService,
private GAService: GoogleAnalyticsService
) {}

ngOnInit() {
this.registerForm = this.formBuilder.group({
policyDate: ['', Validators.required],
policyLength: ['', Validators.required],
check1: ['', Validators.requiredTrue],
check2: ['', Validators.requiredTrue],
});
// Disable dates before todays date on datepicker
this.todaydate.setDate(this.todaydate.getDate() + 1);
if (this.todaydate.getMonth() + 1 < 10) {
this.month = '0' + (this.todaydate.getMonth() + 1);
}
else {
this.month = '' + (this.todaydate.getMonth() + 1);
}
if (this.todaydate.getDate() < 10) {
this.day = '0' + this.todaydate.getDate();
} else {
this.day = '' + this.todaydate.getDate();
}
this.mindate =
'' + this.todaydate.getFullYear() + '-' + this.month + '-' + this.day;
}
submit = () => {
this.GAService.event(
'Calculate Button clicked',
'Policy Details',
'Calculate'
);

this.commonDataService.policy.next(this.registerForm.value);
this.Submission.emit('Policy Details form is submitted!');
}

change = () => {
if (this.registerForm.valid) {
this.Toggle.emit(true);
this.commonDataService.policy.next(this.registerForm.value);
} else {
this.Toggle.emit(false);
}
}

get formControls() {
return this.registerForm.controls;
}
}
