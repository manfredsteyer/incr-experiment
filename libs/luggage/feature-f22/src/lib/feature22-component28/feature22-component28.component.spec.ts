import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component28Component } from './feature22-component28.component';

describe('Feature22Component28Component', () => {
  let component: Feature22Component28Component;
  let fixture: ComponentFixture<Feature22Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature22Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
