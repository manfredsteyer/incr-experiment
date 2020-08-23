import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component22Component } from './feature18-component22.component';

describe('Feature18Component22Component', () => {
  let component: Feature18Component22Component;
  let fixture: ComponentFixture<Feature18Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature18Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
