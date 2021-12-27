import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component22Component } from './feature1-component22.component';

describe('Feature1Component22Component', () => {
  let component: Feature1Component22Component;
  let fixture: ComponentFixture<Feature1Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature1Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
