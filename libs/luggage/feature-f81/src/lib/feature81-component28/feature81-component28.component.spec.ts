import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component28Component } from './feature81-component28.component';

describe('Feature81Component28Component', () => {
  let component: Feature81Component28Component;
  let fixture: ComponentFixture<Feature81Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature81Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
