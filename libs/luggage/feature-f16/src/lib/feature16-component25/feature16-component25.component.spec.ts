import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component25Component } from './feature16-component25.component';

describe('Feature16Component25Component', () => {
  let component: Feature16Component25Component;
  let fixture: ComponentFixture<Feature16Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
