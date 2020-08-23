import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component5Component } from './feature16-component5.component';

describe('Feature16Component5Component', () => {
  let component: Feature16Component5Component;
  let fixture: ComponentFixture<Feature16Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
