import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component28Component } from './feature8-component28.component';

describe('Feature8Component28Component', () => {
  let component: Feature8Component28Component;
  let fixture: ComponentFixture<Feature8Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature8Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
