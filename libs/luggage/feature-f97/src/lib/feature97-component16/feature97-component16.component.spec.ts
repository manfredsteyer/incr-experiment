import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component16Component } from './feature97-component16.component';

describe('Feature97Component16Component', () => {
  let component: Feature97Component16Component;
  let fixture: ComponentFixture<Feature97Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature97Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
