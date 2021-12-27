import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component22Component } from './feature39-component22.component';

describe('Feature39Component22Component', () => {
  let component: Feature39Component22Component;
  let fixture: ComponentFixture<Feature39Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature39Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
