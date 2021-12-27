import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component22Component } from './feature73-component22.component';

describe('Feature73Component22Component', () => {
  let component: Feature73Component22Component;
  let fixture: ComponentFixture<Feature73Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature73Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
