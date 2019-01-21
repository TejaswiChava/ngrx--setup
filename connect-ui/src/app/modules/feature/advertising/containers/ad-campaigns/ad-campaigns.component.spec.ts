import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCampaignsComponent } from './ad-campaigns.component';

describe('AdCampaignsComponent', () => {
  let component: AdCampaignsComponent;
  let fixture: ComponentFixture<AdCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
