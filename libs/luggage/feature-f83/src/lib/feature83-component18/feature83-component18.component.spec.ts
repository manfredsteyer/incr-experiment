import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component18Component } from './feature83-component18.component';

describe('Feature83Component18Component', () => {
  let component: Feature83Component18Component;
  let fixture: ComponentFixture<Feature83Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature83Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
