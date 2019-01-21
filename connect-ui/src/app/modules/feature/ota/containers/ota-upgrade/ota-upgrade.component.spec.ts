import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtaUpgradeComponent } from './ota-upgrade.component';

describe('OtaUpgradeComponent', () => {
  let component: OtaUpgradeComponent;
  let fixture: ComponentFixture<OtaUpgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtaUpgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtaUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
