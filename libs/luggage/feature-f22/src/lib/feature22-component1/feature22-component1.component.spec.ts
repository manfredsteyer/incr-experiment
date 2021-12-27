import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component1Component } from './feature22-component1.component';

describe('Feature22Component1Component', () => {
  let component: Feature22Component1Component;
  let fixture: ComponentFixture<Feature22Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature22Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
