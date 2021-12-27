import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component11Component } from './feature22-component11.component';

describe('Feature22Component11Component', () => {
  let component: Feature22Component11Component;
  let fixture: ComponentFixture<Feature22Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature22Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
