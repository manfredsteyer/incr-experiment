import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component26Component } from './feature58-component26.component';

describe('Feature58Component26Component', () => {
  let component: Feature58Component26Component;
  let fixture: ComponentFixture<Feature58Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature58Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
