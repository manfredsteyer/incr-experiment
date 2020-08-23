import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component6Component } from './feature97-component6.component';

describe('Feature97Component6Component', () => {
  let component: Feature97Component6Component;
  let fixture: ComponentFixture<Feature97Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature97Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
