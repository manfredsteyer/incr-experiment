import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component22Component } from './feature17-component22.component';

describe('Feature17Component22Component', () => {
  let component: Feature17Component22Component;
  let fixture: ComponentFixture<Feature17Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature17Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
