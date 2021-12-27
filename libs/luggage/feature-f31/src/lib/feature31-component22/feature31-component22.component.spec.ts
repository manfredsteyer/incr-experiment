import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component22Component } from './feature31-component22.component';

describe('Feature31Component22Component', () => {
  let component: Feature31Component22Component;
  let fixture: ComponentFixture<Feature31Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature31Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
