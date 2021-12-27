import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component26Component } from './feature93-component26.component';

describe('Feature93Component26Component', () => {
  let component: Feature93Component26Component;
  let fixture: ComponentFixture<Feature93Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature93Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
