import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component25Component } from './feature70-component25.component';

describe('Feature70Component25Component', () => {
  let component: Feature70Component25Component;
  let fixture: ComponentFixture<Feature70Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature70Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
