import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component22Component } from './feature16-component22.component';

describe('Feature16Component22Component', () => {
  let component: Feature16Component22Component;
  let fixture: ComponentFixture<Feature16Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
