import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component22Component } from './feature82-component22.component';

describe('Feature82Component22Component', () => {
  let component: Feature82Component22Component;
  let fixture: ComponentFixture<Feature82Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature82Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
