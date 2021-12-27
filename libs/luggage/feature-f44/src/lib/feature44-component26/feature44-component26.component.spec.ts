import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component26Component } from './feature44-component26.component';

describe('Feature44Component26Component', () => {
  let component: Feature44Component26Component;
  let fixture: ComponentFixture<Feature44Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature44Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
