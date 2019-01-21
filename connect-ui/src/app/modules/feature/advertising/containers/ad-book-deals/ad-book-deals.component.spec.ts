import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBookDealsComponent } from './ad-book-deals.component';

describe('AdBookDealsComponent', () => {
  let component: AdBookDealsComponent;
  let fixture: ComponentFixture<AdBookDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdBookDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdBookDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
