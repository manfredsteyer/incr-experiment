import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component8Component } from './feature22-component8.component';

describe('Feature22Component8Component', () => {
  let component: Feature22Component8Component;
  let fixture: ComponentFixture<Feature22Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature22Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
