import { CommonDataService } from 'src/app/common-data.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
@Component({
selector: 'app-v-info',
templateUrl: './v-info.component.html',
styleUrls: ['./v-info.component.css'],
})
export class VInfoComponent implements OnInit {
@Output() Toggle = new EventEmitter();
@Output() Submission = new EventEmitter<any>();
@Input() registrationNo: string;
@Input() certificateNo: string;
@Input() purposeSelected: string;
@Input() drivingOutsideYesNo: string;
vehicleInfoForm: FormGroup;
purposeList = ['Personal Use', 'Public Use'];
constructor(private formBuilder: FormBuilder, private commonDataService: CommonDataService,
            private GAService: GoogleAnalyticsService
) {}
// Form field validators
ngOnInit(): void {
this.vehicleInfoForm = this.formBuilder.group({
registrationNumber: [
'',
[Validators.required, Validators.minLength(8), Validators.maxLength(8)],
],
certificateNumber: [
'',
[Validators.required, Validators.minLength(9), Validators.maxLength(9)],
],
purpose: ['', Validators.required],
yesNo: ['', Validators.required],
});
}
// on form submit submit function will get call
submit = () => {
this.GAService.event('Next Button clicked', 'Vehicle Infomation', 'Next');
this.commonDataService.vehicleinfo.next(this.vehicleInfoForm.value);
this.Submission.emit('Vehicle Information form is submitted!');
}
// On change of form field change() function will get call
change = () => {
if (this.vehicleInfoForm.valid) {
this.Toggle.emit(true);
this.commonDataService.vehicleinfo.next(this.vehicleInfoForm.value);
} else {
this.Toggle.emit(false);
}
}

get formsControl() {
return this.vehicleInfoForm.controls;
}
}
