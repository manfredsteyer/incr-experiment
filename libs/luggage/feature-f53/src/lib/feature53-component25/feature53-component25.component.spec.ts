import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component25Component } from './feature53-component25.component';

describe('Feature53Component25Component', () => {
  let component: Feature53Component25Component;
  let fixture: ComponentFixture<Feature53Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature53Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
