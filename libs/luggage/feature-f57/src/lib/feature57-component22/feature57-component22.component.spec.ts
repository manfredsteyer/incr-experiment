import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component22Component } from './feature57-component22.component';

describe('Feature57Component22Component', () => {
  let component: Feature57Component22Component;
  let fixture: ComponentFixture<Feature57Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature57Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
