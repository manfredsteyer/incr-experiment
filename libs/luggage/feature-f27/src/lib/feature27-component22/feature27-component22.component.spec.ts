import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component22Component } from './feature27-component22.component';

describe('Feature27Component22Component', () => {
  let component: Feature27Component22Component;
  let fixture: ComponentFixture<Feature27Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature27Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});