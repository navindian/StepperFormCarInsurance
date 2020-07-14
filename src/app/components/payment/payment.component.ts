import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MtplCalculatorService } from '../mtpl-calculator/mtpl-calculator.service';
import { MtplPolicyService } from '../mtpl-policy/mtpl-policy.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  constructor(
    private mtplCalculatorService: MtplCalculatorService,
    private mtplPolicyService: MtplPolicyService
  ) {}
  optradio: boolean;
  selectedPayment
  @Input() Ppayment: string;
  @Output() OnSubmission = new EventEmitter<any>();
  enable = true;
  dataToPost = {
  PAYEE_ACCOUNT: 'karanshirsath97@gmail.com',
	PAYEE_NAME: 'karan',
	PAYMENT_AMOUNT: 1,
	PAYMENT_UNITS: 'USD',
	PAYMENT_ID: '',
	STATUS_URL: 'https://api.epay.com/pay_result.jsp',
	PAYMENT_URL: 'https://api.epay.com/pay_result1.jsp',
	PAYMENT_URL_METHOD: 'post',
	NOPAYMENT_URL: 'https://api.epay.com/pay_result1.jsp',
	NOPAYMENT_URL_METHOD: 'post',
	SUGGESTED_MEMO: 'abc',
	SUGGESTED_MEMO_NOCHANGE: '',
	FORCED_PAYER_ACCOUNT: '',
	INTERFACE_LANGUAGE: 'EN_US',
	CHARACTER_ENCODING: 'UTF-8',
  V2_HASH: '96511492bb663818bfb70fc8c51126b0'
  };

  ngOnInit(): void {}
  check() {
    console.log(this.selectedPayment);
    
    this.optradio = true;
  }
  box(e) {
    if (e.checked) {
      this.enable = false;
    } else {
      this.enable = true;
    }
  }
  action() {
    this.OnSubmission.emit('Payment method selected!');
  }
  getData = () => {
    if(this.selectedPayment=="epay"){
      this.ePay()
    }
    else{
alert('Check console for see data saved at Backend');
    const idObj = { id: sessionStorage.getItem('id') };
    this.mtplCalculatorService.getData(idObj).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    this.mtplPolicyService.getData(idObj).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    }
    
  }
  ePay = () => {
    const form = window.document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'https://api.epay.com/paymentApi/merReceive');
    form.setAttribute('target', '_self');

    form.appendChild(this.createHiddenElement('PAYEE_ACCOUNT', this.dataToPost.PAYEE_ACCOUNT));
    form.appendChild(this.createHiddenElement('PAYEE_NAME', this.dataToPost.PAYEE_NAME));
    form.appendChild(this.createHiddenElement('PAYMENT_AMOUNT', this.dataToPost.PAYMENT_AMOUNT));
    form.appendChild(this.createHiddenElement('PAYMENT_UNITS', this.dataToPost.PAYMENT_UNITS));
    form.appendChild(this.createHiddenElement('PAYMENT_ID', this.dataToPost.PAYMENT_ID));
    form.appendChild(this.createHiddenElement('STATUS_URL', this.dataToPost.STATUS_URL));
    form.appendChild(this.createHiddenElement('PAYMENT_URL', this.dataToPost.PAYMENT_URL));
    form.appendChild(this.createHiddenElement('PAYMENT_URL_METHOD', this.dataToPost.PAYMENT_URL_METHOD));
    form.appendChild(this.createHiddenElement('NOPAYMENT_URL', this.dataToPost.NOPAYMENT_URL));
    form.appendChild(this.createHiddenElement('NOPAYMENT_URL_METHOD', this.dataToPost.NOPAYMENT_URL_METHOD));
    form.appendChild(this.createHiddenElement('SUGGESTED_MEMO', this.dataToPost.SUGGESTED_MEMO));
    form.appendChild(this.createHiddenElement('SUGGESTED_MEMO_NOCHANGE', this.dataToPost.SUGGESTED_MEMO_NOCHANGE));
    form.appendChild(this.createHiddenElement('FORCED_PAYER_ACCOUNT', this.dataToPost.FORCED_PAYER_ACCOUNT));
    form.appendChild(this.createHiddenElement('INTERFACE_LANGUAGE', this.dataToPost.INTERFACE_LANGUAGE));
    form.appendChild(this.createHiddenElement('CHARACTER_ENCODING', this.dataToPost.CHARACTER_ENCODING));
    form.appendChild(this.createHiddenElement('V2_HASH', this.dataToPost.V2_HASH));

    window.document.body.appendChild(form);
    form.submit();
  }
  createHiddenElement(name, value): HTMLInputElement {
    const hiddenField = document.createElement('input');
    hiddenField.setAttribute('name', name);
    hiddenField.setAttribute('value', value);
    hiddenField.setAttribute('type', 'hidden');
    return hiddenField;
  }
}


