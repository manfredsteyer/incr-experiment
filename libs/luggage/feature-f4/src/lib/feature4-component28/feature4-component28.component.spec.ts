import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component28Component } from './feature4-component28.component';

describe('Feature4Component28Component', () => {
  let component: Feature4Component28Component;
  let fixture: ComponentFixture<Feature4Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature4Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
