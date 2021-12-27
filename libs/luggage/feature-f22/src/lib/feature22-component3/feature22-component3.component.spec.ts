import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component3Component } from './feature22-component3.component';

describe('Feature22Component3Component', () => {
  let component: Feature22Component3Component;
  let fixture: ComponentFixture<Feature22Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature22Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
