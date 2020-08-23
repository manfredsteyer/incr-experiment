import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component21Component } from './feature97-component21.component';

describe('Feature97Component21Component', () => {
  let component: Feature97Component21Component;
  let fixture: ComponentFixture<Feature97Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature97Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
