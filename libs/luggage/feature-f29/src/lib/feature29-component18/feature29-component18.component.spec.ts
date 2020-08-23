import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component18Component } from './feature29-component18.component';

describe('Feature29Component18Component', () => {
  let component: Feature29Component18Component;
  let fixture: ComponentFixture<Feature29Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature29Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
