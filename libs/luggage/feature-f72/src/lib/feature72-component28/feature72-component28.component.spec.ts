import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component28Component } from './feature72-component28.component';

describe('Feature72Component28Component', () => {
  let component: Feature72Component28Component;
  let fixture: ComponentFixture<Feature72Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature72Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
