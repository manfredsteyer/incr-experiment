import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component22Component } from './feature95-component22.component';

describe('Feature95Component22Component', () => {
  let component: Feature95Component22Component;
  let fixture: ComponentFixture<Feature95Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature95Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
