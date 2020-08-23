import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component28Component } from './feature50-component28.component';

describe('Feature50Component28Component', () => {
  let component: Feature50Component28Component;
  let fixture: ComponentFixture<Feature50Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature50Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
