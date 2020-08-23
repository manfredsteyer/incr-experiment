import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component15Component } from './feature97-component15.component';

describe('Feature97Component15Component', () => {
  let component: Feature97Component15Component;
  let fixture: ComponentFixture<Feature97Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature97Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
