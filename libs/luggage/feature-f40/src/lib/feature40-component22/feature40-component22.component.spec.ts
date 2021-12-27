import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component22Component } from './feature40-component22.component';

describe('Feature40Component22Component', () => {
  let component: Feature40Component22Component;
  let fixture: ComponentFixture<Feature40Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature40Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
