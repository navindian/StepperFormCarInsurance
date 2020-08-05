import { Component, OnInit } from '@angular/core';
import {Profile} from '../profile/profile';
import { ProfileService } from './profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService:ProfileService) { }
  profile:Profile;

  ngOnInit(): void {

    this.profileService.getProfile().subscribe(
      data => { this.profile = data; }
    )
      console.log(this.profile.firstName);
  }

}
