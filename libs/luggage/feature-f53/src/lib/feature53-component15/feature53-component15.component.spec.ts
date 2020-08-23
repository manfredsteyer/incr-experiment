import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component15Component } from './feature53-component15.component';

describe('Feature53Component15Component', () => {
  let component: Feature53Component15Component;
  let fixture: ComponentFixture<Feature53Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature53Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
