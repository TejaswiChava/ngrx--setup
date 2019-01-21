import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  urlValues: any;
  mainPath: any;
  path: string;
  selectedMenuActiveChild: any;
  selectedMenuActive: any;
  selectedMenuName: any;
  constructor( public location: Location) {
    this.path= location.path();
    if(this.path)
    this.path = this.path.substring(1);
    if (this.path === 'dashboard') {
      this.selectedMenuActive = 'dashboard';
      this.selectedMenuName = 'Dashboard';
    } else if (this.path === 'operator/operators' || this.path === 'operator/operators/createOperator') {
      this.selectedMenuActive = 'operator/operators';
      this.selectedMenuName = 'Operators';
    } else if (this.path === 'operator/user_management'  || this.path === 'operator/user_management/createUser') {
      this.selectedMenuActive = 'operator/operators';
      this.selectedMenuName = 'Operators';
    } else if (this.path === 'tms/devices' || this.path === 'tms/devices/createDevice') {
      this.selectedMenuActive = 'tms/devices';
      this.selectedMenuName = 'TMS';
    } else if (this.path === 'tms/models' || this.path === 'tms/models/createModel') {
      this.selectedMenuActive = 'tms/devices';
      this.selectedMenuName = 'TMS';
    } else if (this.path === 'tms/features'  || this.path === 'tms/features/createFeature') {
      this.selectedMenuActive = 'tms/devices';
      this.selectedMenuName = 'TMS';
    } else if (this.path === 'tms/factories'  || this.path === 'tms/factories/createFactory') {
      this.selectedMenuActive = 'tms/devices';
      this.selectedMenuName = 'TMS';
    } else if (this.path === 'ota/softwareimage' || this.path === 'ota/softwareimage/createSoftwareImage') {
      this.selectedMenuActive = 'ota/softwareimage';
      this.selectedMenuName = 'OTA';
    } else if (this.path === 'ota/otaupgrade' || this.path === 'ota/otaupgrade/createOTAupgrade') {
      this.selectedMenuActive = 'ota/softwareimage';
      this.selectedMenuName = 'OTA';
    } else if (this.path === 'ad/productCategory' || this.path === 'ad/productCategory/createCategory') {
      this.selectedMenuActive = 'ad/productCategory';
      this.selectedMenuName = 'Advertising';
    }  else if (this.path === 'ad/vendors' || this.path === 'ad/vendors/createVendor') {
      this.selectedMenuActive = 'ad/productCategory';
      this.selectedMenuName = 'Advertising';
    } else if (this.path === 'ad/ads' || this.path === 'ad/ads/createAd/campainSettings') {
      this.selectedMenuActive = 'ad/productCategory';
      this.selectedMenuName = 'Advertising';
    }  else if (this.path === 'ad/adBook' || this.path === 'ad/adBook/createAdBook') {
      this.selectedMenuActive = 'ad/productCategory';
      this.selectedMenuName = 'Advertising';
    }  else if (this.path === 'cms/channels' || this.path === 'cms/channels/createChannel') {
      this.selectedMenuActive = 'cms/channels';
      this.selectedMenuName = 'CMS';
    }  else if (this.path === 'cms/operatorChannel' || this.path === 'cms/operatorChannel/createOperatorChannel') {
      this.selectedMenuActive = 'cms/channels';
      this.selectedMenuName = 'CMS';
    }  else if (this.path === 'cms/epg' || this.path === 'cms/epg/createEpg') {
      this.selectedMenuActive = 'cms/channels';
      this.selectedMenuName = 'CMS';
    } else {
      this.selectedMenuActive = this.path;
    }
   }

  ngOnInit() {
    this.loadSidebarChanges();
  }
  loadSidebarChanges() {
    this.urlValues = [
      {
        'urlLink': 'operator/operator_management', 'urlName': 'Operators', 'id': 'user', 'mbIcon' : 'icon icon-mb-operator pull-right',
        childs: [
          {'urlLink': 'operators/operators', 'urlName': 'Operator Management'},
          {'urlLink': 'operators/users', 'urlName': 'User Management'},
        ]
      },
      {
        'urlLink': 'tms/devices', 'urlName': 'TMS', 'id': 'tms', 'mbIcon' : 'icon icon-mb-terminal pull-right',
        childs: [
            {'urlLink': 'tms/devices', 'urlName': 'Device Management'},
            {'urlLink': 'tms/models', 'urlName': 'Model Management'},
            {'urlLink': 'tms/features', 'urlName': 'Feature Management'},
            {'urlLink': 'tms/factories', 'urlName': 'Factory Management'}
        ]
      },
      {
        'urlLink': 'ota/softwareImage', 'urlName': 'OTA', 'id': 'ota', 'mbIcon' : 'icon icon-mb-ota pull-right',
        childs: [
          {'urlLink': 'ota/softwareImages', 'urlName': 'Software Image'},
          {'urlLink': 'ota/otaUpgrade', 'urlName': 'OTA Upgrade'}
          ]
      },
      {
        'urlLink': 'ad/productCategory', 'urlName': 'Advertising', 'id': 'ad', 'mbIcon' : 'icon icon-mb-ad pull-right',
        childs: [
          {'urlLink': 'advertising/productCategory', 'urlName': 'Product Category'},
          {'urlLink': 'advertising/vendors', 'urlName': 'Vendors'},
          {'urlLink': 'advertising/ads', 'urlName': 'Ad-Campaigns'},
          {'urlLink': 'advertising/adBook', 'urlName': 'Ad-Book Deals'},
        ]
      },
      {
        'urlLink': 'cms/channels', 'urlName': 'CMS', 'id': 'cms', 'mbIcon' : 'icon icon-mb-cms pull-right',
        childs: [
          {'urlLink': 'cms/channels', 'urlName': 'Channels'},
          {'urlLink': 'cms/operatorChannels', 'urlName': 'Operator Channels'},
          {'urlLink': 'cms/epg', 'urlName': 'EPG'}
        ]
      }
    ];
}
sideMenuActiveFun(urlLink, list, index): void {
  this.selectedMenuActive = urlLink;
}

}
