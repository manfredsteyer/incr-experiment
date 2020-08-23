import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component1Component } from './feature97-component1.component';

describe('Feature97Component1Component', () => {
  let component: Feature97Component1Component;
  let fixture: ComponentFixture<Feature97Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature97Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
