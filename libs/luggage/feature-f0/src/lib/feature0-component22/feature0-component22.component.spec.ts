import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component22Component } from './feature0-component22.component';

describe('Feature0Component22Component', () => {
  let component: Feature0Component22Component;
  let fixture: ComponentFixture<Feature0Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature0Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
