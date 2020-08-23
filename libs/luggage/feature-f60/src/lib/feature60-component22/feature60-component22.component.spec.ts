import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component22Component } from './feature60-component22.component';

describe('Feature60Component22Component', () => {
  let component: Feature60Component22Component;
  let fixture: ComponentFixture<Feature60Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature60Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
