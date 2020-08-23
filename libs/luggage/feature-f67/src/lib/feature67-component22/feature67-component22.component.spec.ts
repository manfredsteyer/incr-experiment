import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component22Component } from './feature67-component22.component';

describe('Feature67Component22Component', () => {
  let component: Feature67Component22Component;
  let fixture: ComponentFixture<Feature67Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature67Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
