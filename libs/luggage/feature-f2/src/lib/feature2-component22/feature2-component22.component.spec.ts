import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component22Component } from './feature2-component22.component';

describe('Feature2Component22Component', () => {
  let component: Feature2Component22Component;
  let fixture: ComponentFixture<Feature2Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
