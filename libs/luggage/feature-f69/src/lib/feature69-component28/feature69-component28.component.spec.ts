import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component28Component } from './feature69-component28.component';

describe('Feature69Component28Component', () => {
  let component: Feature69Component28Component;
  let fixture: ComponentFixture<Feature69Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature69Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
