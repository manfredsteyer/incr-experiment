import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component26Component } from './feature46-component26.component';

describe('Feature46Component26Component', () => {
  let component: Feature46Component26Component;
  let fixture: ComponentFixture<Feature46Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature46Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
