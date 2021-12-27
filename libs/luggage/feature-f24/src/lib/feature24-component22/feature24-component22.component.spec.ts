import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component22Component } from './feature24-component22.component';

describe('Feature24Component22Component', () => {
  let component: Feature24Component22Component;
  let fixture: ComponentFixture<Feature24Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature24Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
