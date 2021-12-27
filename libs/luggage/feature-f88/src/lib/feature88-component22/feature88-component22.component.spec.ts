import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component22Component } from './feature88-component22.component';

describe('Feature88Component22Component', () => {
  let component: Feature88Component22Component;
  let fixture: ComponentFixture<Feature88Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature88Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
