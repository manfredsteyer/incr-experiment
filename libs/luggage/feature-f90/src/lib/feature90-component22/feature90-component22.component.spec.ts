import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component22Component } from './feature90-component22.component';

describe('Feature90Component22Component', () => {
  let component: Feature90Component22Component;
  let fixture: ComponentFixture<Feature90Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
