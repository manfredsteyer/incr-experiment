import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component25Component } from './feature97-component25.component';

describe('Feature97Component25Component', () => {
  let component: Feature97Component25Component;
  let fixture: ComponentFixture<Feature97Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature97Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
