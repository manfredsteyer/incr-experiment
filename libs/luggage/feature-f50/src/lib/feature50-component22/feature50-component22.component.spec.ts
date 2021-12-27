import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component22Component } from './feature50-component22.component';

describe('Feature50Component22Component', () => {
  let component: Feature50Component22Component;
  let fixture: ComponentFixture<Feature50Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature50Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
