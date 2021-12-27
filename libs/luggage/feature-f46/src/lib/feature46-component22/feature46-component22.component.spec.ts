import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component22Component } from './feature46-component22.component';

describe('Feature46Component22Component', () => {
  let component: Feature46Component22Component;
  let fixture: ComponentFixture<Feature46Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature46Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
