import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component22Component } from './feature62-component22.component';

describe('Feature62Component22Component', () => {
  let component: Feature62Component22Component;
  let fixture: ComponentFixture<Feature62Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature62Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
