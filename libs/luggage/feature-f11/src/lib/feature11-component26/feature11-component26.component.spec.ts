import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component26Component } from './feature11-component26.component';

describe('Feature11Component26Component', () => {
  let component: Feature11Component26Component;
  let fixture: ComponentFixture<Feature11Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature11Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
