import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component22Component } from './feature87-component22.component';

describe('Feature87Component22Component', () => {
  let component: Feature87Component22Component;
  let fixture: ComponentFixture<Feature87Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature87Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
