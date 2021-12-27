import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component22Component } from './feature20-component22.component';

describe('Feature20Component22Component', () => {
  let component: Feature20Component22Component;
  let fixture: ComponentFixture<Feature20Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature20Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
