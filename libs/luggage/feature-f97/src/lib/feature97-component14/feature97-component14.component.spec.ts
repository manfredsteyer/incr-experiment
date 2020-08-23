import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component14Component } from './feature97-component14.component';

describe('Feature97Component14Component', () => {
  let component: Feature97Component14Component;
  let fixture: ComponentFixture<Feature97Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature97Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
