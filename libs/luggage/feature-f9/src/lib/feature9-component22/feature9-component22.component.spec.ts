import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component22Component } from './feature9-component22.component';

describe('Feature9Component22Component', () => {
  let component: Feature9Component22Component;
  let fixture: ComponentFixture<Feature9Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature9Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
