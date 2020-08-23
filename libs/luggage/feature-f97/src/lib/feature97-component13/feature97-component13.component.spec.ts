import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component13Component } from './feature97-component13.component';

describe('Feature97Component13Component', () => {
  let component: Feature97Component13Component;
  let fixture: ComponentFixture<Feature97Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature97Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
