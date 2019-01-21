import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareImagesComponent } from './software-images.component';

describe('SoftwareImagesComponent', () => {
  let component: SoftwareImagesComponent;
  let fixture: ComponentFixture<SoftwareImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
