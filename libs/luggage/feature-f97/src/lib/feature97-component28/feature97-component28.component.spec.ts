import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component28Component } from './feature97-component28.component';

describe('Feature97Component28Component', () => {
  let component: Feature97Component28Component;
  let fixture: ComponentFixture<Feature97Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature97Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
