import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component22Component } from './feature8-component22.component';

describe('Feature8Component22Component', () => {
  let component: Feature8Component22Component;
  let fixture: ComponentFixture<Feature8Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature8Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
