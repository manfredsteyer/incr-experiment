import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component6Component } from './feature56-component6.component';

describe('Feature56Component6Component', () => {
  let component: Feature56Component6Component;
  let fixture: ComponentFixture<Feature56Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature56Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
