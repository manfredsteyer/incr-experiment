import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component3Component } from './feature72-component3.component';

describe('Feature72Component3Component', () => {
  let component: Feature72Component3Component;
  let fixture: ComponentFixture<Feature72Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature72Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
