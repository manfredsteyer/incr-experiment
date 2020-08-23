import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component18Component } from './feature92-component18.component';

describe('Feature92Component18Component', () => {
  let component: Feature92Component18Component;
  let fixture: ComponentFixture<Feature92Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature92Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
