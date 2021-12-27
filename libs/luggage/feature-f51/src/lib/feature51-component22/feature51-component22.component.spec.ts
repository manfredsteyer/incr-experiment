import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component22Component } from './feature51-component22.component';

describe('Feature51Component22Component', () => {
  let component: Feature51Component22Component;
  let fixture: ComponentFixture<Feature51Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature51Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
