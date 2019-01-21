import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  tms() {
    this.router.navigate(['tms/devices']);
    // this.headerBrandName = 'TMS';
    // this.cookieService.putObject('headerBrandName', this.headerBrandName);
  }
  ad() {
    this.router.navigate(['advertising/ads']);
  }
  epg() {
    this.router.navigate(['cms/channels']);
  }
  adbook() {
    this.router.navigate(['advertising/adBook']);
  }
}
