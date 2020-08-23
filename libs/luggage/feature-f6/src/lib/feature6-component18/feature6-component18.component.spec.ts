import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component18Component } from './feature6-component18.component';

describe('Feature6Component18Component', () => {
  let component: Feature6Component18Component;
  let fixture: ComponentFixture<Feature6Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature6Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
