import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component22Component } from './feature38-component22.component';

describe('Feature38Component22Component', () => {
  let component: Feature38Component22Component;
  let fixture: ComponentFixture<Feature38Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature38Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
