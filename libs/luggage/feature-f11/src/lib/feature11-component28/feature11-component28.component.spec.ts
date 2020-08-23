import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component28Component } from './feature11-component28.component';

describe('Feature11Component28Component', () => {
  let component: Feature11Component28Component;
  let fixture: ComponentFixture<Feature11Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature11Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
