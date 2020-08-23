import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component3Component } from './feature35-component3.component';

describe('Feature35Component3Component', () => {
  let component: Feature35Component3Component;
  let fixture: ComponentFixture<Feature35Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature35Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
