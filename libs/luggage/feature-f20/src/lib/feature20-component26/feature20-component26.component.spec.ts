import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component26Component } from './feature20-component26.component';

describe('Feature20Component26Component', () => {
  let component: Feature20Component26Component;
  let fixture: ComponentFixture<Feature20Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature20Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
