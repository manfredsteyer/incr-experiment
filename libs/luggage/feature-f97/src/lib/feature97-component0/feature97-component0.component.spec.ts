import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component0Component } from './feature97-component0.component';

describe('Feature97Component0Component', () => {
  let component: Feature97Component0Component;
  let fixture: ComponentFixture<Feature97Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature97Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
