import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component7Component } from './feature47-component7.component';

describe('Feature47Component7Component', () => {
  let component: Feature47Component7Component;
  let fixture: ComponentFixture<Feature47Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature47Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
