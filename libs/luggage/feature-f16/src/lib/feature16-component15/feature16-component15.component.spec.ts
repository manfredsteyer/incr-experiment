import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component15Component } from './feature16-component15.component';

describe('Feature16Component15Component', () => {
  let component: Feature16Component15Component;
  let fixture: ComponentFixture<Feature16Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
