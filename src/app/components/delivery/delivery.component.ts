import { Component, EventEmitter, Input, OnInit, Output, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { CommonDataService } from '../shared/common-data.service';
import { DeliveryServiceService } from './delivery-service.service';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
})
export class DeliveryComponent implements OnInit, AfterViewInit, OnDestroy {
  private mediaSub: Subscription;

  @Output() OnToggle = new EventEmitter();
  @Output() OnSubmission = new EventEmitter<any>();
  @Input() DfullName: string;
  @Input() Dcity: string;
  @Input() Dpincode: string;
  @Input() Dstreet: string;
  @Input() Dnumber: string;
  @Input() Dblock: string;
  @Input() Dentrance: string;
  @Input() Dappt: string;
  @Input() Dnotes: string;
  @Input() Dtype: string;
  @Input() Dcontact: string;
  detailsForm: FormGroup;
  provincesArray;
  cities: string[] = [
    'New Delhi',
    'Mumbai',
    'Chennai',
    'Bangalore',
    'Kolkata',
    'Mysore',
    'Pune',
    'Jaipur',
  ];

  codes: number[] = [55, 86, 33, 49, 91];

  submitted = false;

  constructor(
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver,
    private formBuilder: FormBuilder,
    private deliveryService: DeliveryServiceService,
    private GAService: GoogleAnalyticsService,
    private commonDataService: CommonDataService
  ) {}

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (change: MediaChange) => {
      }
    );

    this.detailsForm = this.formBuilder.group({
      fullName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z ]+'),
        ]),
      ],
      city: ['', Validators.required],
      pincode: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(6)]),
      ],
      street: [''],
      number: [''],
      block: [''],
      entrance: [''],
      appt: [''],
      contact: [
        '',
        Validators.compose([
          Validators.required,
          Validators.max(999999999),
          Validators.min(10000000),
        ]),
      ],
      business: ['', Validators.required],
      notes: [''],
    });
    this.getProvinces();
  }

  change = () => {
    if (this.detailsForm.valid) {
      this.OnToggle.emit(true);
      this.commonDataService.deliveryinformation.next(this.detailsForm.value);
    } else {
      this.OnToggle.emit(false);
    }
  }
  toggle() {
    this.submitted = true;
  }

  toggle1() {
    this.submitted = false;
  }

  ngAfterViewInit() {}

  ngOnDestroy() {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }

  getProvinces() {
    this.deliveryService.getProvinces().subscribe((response) => {
      this.provincesArray = response;
    });
  }

  register() {
    this.GAService.event('Next Button clicked', 'Delivery', 'Next');
    this.commonDataService.deliveryinformation.next(this.detailsForm.value);
    this.OnSubmission.emit('Delivery form is submitted!');
  }
  get formControls() {
    return this.detailsForm.controls;
  }
}
