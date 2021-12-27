import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component22Component } from './feature10-component22.component';

describe('Feature10Component22Component', () => {
  let component: Feature10Component22Component;
  let fixture: ComponentFixture<Feature10Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature10Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
