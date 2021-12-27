import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component22Component } from './feature70-component22.component';

describe('Feature70Component22Component', () => {
  let component: Feature70Component22Component;
  let fixture: ComponentFixture<Feature70Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature70Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
