import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component22Component } from './feature32-component22.component';

describe('Feature32Component22Component', () => {
  let component: Feature32Component22Component;
  let fixture: ComponentFixture<Feature32Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature32Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
