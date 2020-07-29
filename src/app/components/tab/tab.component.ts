import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  welcomeuser = sessionStorage.getItem('welcomename');
  // welcomeuser=this.cookie.get('welcomename');
  activeTab = 0;
  policyTabToggle = true;
  mtplCalculatorStep;
  constructor(private cookie:CookieService) {}

  ngOnInit(): void {}

  changeTab = data => {
    this.policyTabToggle = false;
    this.activeTab = data;
  }
  switch = index => {
    this.activeTab = 0;
    this.mtplCalculatorStep = index;
  }
}
