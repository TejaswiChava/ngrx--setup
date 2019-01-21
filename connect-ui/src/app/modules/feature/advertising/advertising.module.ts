import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisingRoutingModule } from './advertising-routing.module';
import { VendorsComponent } from './containers/vendors/vendors.component';
import { ProductCategoryComponent } from './containers/product-category/product-category.component';
import { AdBookDealsComponent } from './containers/ad-book-deals/ad-book-deals.component';
import { AdCampaignsComponent } from './containers/ad-campaigns/ad-campaigns.component';

@NgModule({
  declarations: [VendorsComponent, ProductCategoryComponent, AdBookDealsComponent, AdCampaignsComponent],
  imports: [
    CommonModule,
    AdvertisingRoutingModule
  ]
})
export class AdvertisingModule { }
