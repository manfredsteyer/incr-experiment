import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component22Component } from './feature96-component22.component';

describe('Feature96Component22Component', () => {
  let component: Feature96Component22Component;
  let fixture: ComponentFixture<Feature96Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature96Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
