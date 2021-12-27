import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component8Component } from './feature92-component8.component';

describe('Feature92Component8Component', () => {
  let component: Feature92Component8Component;
  let fixture: ComponentFixture<Feature92Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature92Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
