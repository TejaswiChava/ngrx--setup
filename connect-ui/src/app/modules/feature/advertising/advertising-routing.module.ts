import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorsComponent } from './containers/vendors/vendors.component';
import { ProductCategoryComponent } from './containers/product-category/product-category.component';
import { AdCampaignsComponent } from './containers/ad-campaigns/ad-campaigns.component';
import { AdBookDealsComponent } from './containers/ad-book-deals/ad-book-deals.component';

const routes: Routes = [
  { path: 'productCategory', pathMatch: 'full', component: ProductCategoryComponent },
  { path: 'vendors', pathMatch: 'full', component: VendorsComponent },
  { path: 'ads', pathMatch: 'full', component: AdCampaignsComponent },
  { path: 'adBook', pathMatch: 'full', component: AdBookDealsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisingRoutingModule { }
