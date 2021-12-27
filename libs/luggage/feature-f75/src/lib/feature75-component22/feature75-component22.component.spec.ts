import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component22Component } from './feature75-component22.component';

describe('Feature75Component22Component', () => {
  let component: Feature75Component22Component;
  let fixture: ComponentFixture<Feature75Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature75Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
