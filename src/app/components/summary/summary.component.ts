import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonDataService } from 'src/app/common-data.service';
import { MtplCalculatorService } from '../mtpl-calculator/mtpl-calculator.service';
import { MtplPolicyService } from '../mtpl-policy/mtpl-policy.service';

@Component({
selector: 'app-summary',
templateUrl: './summary.component.html',
styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
constructor(
  private fb: FormBuilder,
  private commonDataService: CommonDataService,
  private mtplCalculatorService: MtplCalculatorService,
  private mtplPolicyService: MtplPolicyService
  ) {}

summaryForm: FormGroup;
mtplCalculatorData;
mplPolicyData;
installmentData;
vehicleinfo;
insuringparty;
policy;
installment;
additionalcovers;
contactinformation;
deliveryinformation;
personalinformation;
vehicleownerinformation;

@Output() changeStep = new EventEmitter();
@Output() moveTab = new EventEmitter();
@Output() Installment = new EventEmitter<any>();
@Output() AdditionalCovers = new EventEmitter<any>();
@Output() VehicleInfo = new EventEmitter<any>();
@Output() InsuringParty = new EventEmitter<any>();
@Output() VehicleOwner = new EventEmitter<any>();
@Output() Delivery = new EventEmitter<any>();
@Output() PolicyDates = new EventEmitter<any>();

moveToCalculator = (index) => {
this.moveTab.emit(index);
if (index === 0) {
this.VehicleInfo.emit('Vehicle edit button clicked');
}
if (index === 1) {
this.InsuringParty.emit('Insuring Party edit button clicked');
}
if (index === 2) {
this.PolicyDates.emit('Policy Dates edit button clicked');
}
if (index === 3) {
this.Installment.emit('Installment edit button clicked');
}
if (index === 4) {
this.AdditionalCovers.emit('Additional Covers edit button clicked');
}
}

ngOnInit(): void {
this.commonDataService.vehicleinfo.subscribe((data) => {
this.vehicleinfo = data;
});
this.commonDataService.insuringparty.subscribe((data) => {
this.insuringparty = data;
});
this.commonDataService.policy.subscribe((data) => {
this.policy = data;
});
this.commonDataService.installment.subscribe((data) => {
this.installment = data;
});
this.commonDataService.additionalcovers.subscribe((data) => {
this.additionalcovers = data;
});
this.commonDataService.contactinformation.subscribe((data) => {
this.contactinformation = data;
});
this.commonDataService.deliveryinformation.subscribe((data) => {
this.deliveryinformation = data;
});
this.commonDataService.personalinformation.subscribe((data) => {
this.personalinformation = data;
});
this.commonDataService.vehicleownerinformation.subscribe((data) => {
this.vehicleownerinformation = data;
});

this.summaryForm = this.fb.group({
AgreeToAll: [false, Validators.requiredTrue],
receiveNewsletter: [false, Validators.requiredTrue],
generalTerms: [false, Validators.requiredTrue],
});
}
edit = (index) => {
if (index === 2) {
this.VehicleOwner.emit('Vehicle owner edit button clicked');
}
if (index === 3) {
this.Delivery.emit('Delivery edit button clicked');
}
this.changeStep.emit(index);
}
saveData = () => {
confirm('You are about to save data and proceed to payment');
const mtplCalculator = {
id: sessionStorage.getItem('id'),
vehicleinfo: this.vehicleinfo,
insuringparty: this.insuringparty,
policy: this.policy,
installment: this.installment,
additionalcovers: this.additionalcovers,
};
const mtplPolicy = {
id: sessionStorage.getItem('id'),
contactinformation: this.contactinformation,
deliveryinformation: this.deliveryinformation,
personalinformation: this.personalinformation,
vehicleownerinformation: this.vehicleownerinformation,
};
this.mtplCalculatorService.postData(mtplCalculator).subscribe(
(res) => {},
(err) => {}
);
this.mtplPolicyService.postData(mtplPolicy).subscribe(
(res) => {},
(err) => {}
);
}
}
