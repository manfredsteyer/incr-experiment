import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component4Component } from './feature97-component4.component';

describe('Feature97Component4Component', () => {
  let component: Feature97Component4Component;
  let fixture: ComponentFixture<Feature97Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature97Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
