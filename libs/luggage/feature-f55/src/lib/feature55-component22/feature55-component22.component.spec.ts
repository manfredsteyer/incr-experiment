import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component22Component } from './feature55-component22.component';

describe('Feature55Component22Component', () => {
  let component: Feature55Component22Component;
  let fixture: ComponentFixture<Feature55Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature55Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
