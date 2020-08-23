import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component4Component } from './feature15-component4.component';

describe('Feature15Component4Component', () => {
  let component: Feature15Component4Component;
  let fixture: ComponentFixture<Feature15Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature15Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
