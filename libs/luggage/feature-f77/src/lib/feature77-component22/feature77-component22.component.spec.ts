import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component22Component } from './feature77-component22.component';

describe('Feature77Component22Component', () => {
  let component: Feature77Component22Component;
  let fixture: ComponentFixture<Feature77Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature77Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
