import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component28Component } from './feature48-component28.component';

describe('Feature48Component28Component', () => {
  let component: Feature48Component28Component;
  let fixture: ComponentFixture<Feature48Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature48Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
