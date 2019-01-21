import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorChannelsComponent } from './operator-channels.component';

describe('OperatorChannelsComponent', () => {
  let component: OperatorChannelsComponent;
  let fixture: ComponentFixture<OperatorChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorChannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
