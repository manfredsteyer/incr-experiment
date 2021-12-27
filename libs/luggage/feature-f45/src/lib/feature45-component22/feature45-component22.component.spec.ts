import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component22Component } from './feature45-component22.component';

describe('Feature45Component22Component', () => {
  let component: Feature45Component22Component;
  let fixture: ComponentFixture<Feature45Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
