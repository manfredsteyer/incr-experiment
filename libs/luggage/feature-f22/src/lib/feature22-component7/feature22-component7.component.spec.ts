import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component7Component } from './feature22-component7.component';

describe('Feature22Component7Component', () => {
  let component: Feature22Component7Component;
  let fixture: ComponentFixture<Feature22Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature22Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
