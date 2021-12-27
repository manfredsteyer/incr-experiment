import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component22Component } from './feature13-component22.component';

describe('Feature13Component22Component', () => {
  let component: Feature13Component22Component;
  let fixture: ComponentFixture<Feature13Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature13Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
