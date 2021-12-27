import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component22Component } from './feature91-component22.component';

describe('Feature91Component22Component', () => {
  let component: Feature91Component22Component;
  let fixture: ComponentFixture<Feature91Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature91Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
