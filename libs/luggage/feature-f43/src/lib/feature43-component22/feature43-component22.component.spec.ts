import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component22Component } from './feature43-component22.component';

describe('Feature43Component22Component', () => {
  let component: Feature43Component22Component;
  let fixture: ComponentFixture<Feature43Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature43Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
