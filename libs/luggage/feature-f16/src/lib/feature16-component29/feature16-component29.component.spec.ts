import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component29Component } from './feature16-component29.component';

describe('Feature16Component29Component', () => {
  let component: Feature16Component29Component;
  let fixture: ComponentFixture<Feature16Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
