import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component20Component } from './feature22-component20.component';

describe('Feature22Component20Component', () => {
  let component: Feature22Component20Component;
  let fixture: ComponentFixture<Feature22Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature22Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});