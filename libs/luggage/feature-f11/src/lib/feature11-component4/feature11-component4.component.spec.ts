import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component4Component } from './feature11-component4.component';

describe('Feature11Component4Component', () => {
  let component: Feature11Component4Component;
  let fixture: ComponentFixture<Feature11Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature11Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
