import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component28Component } from './feature86-component28.component';

describe('Feature86Component28Component', () => {
  let component: Feature86Component28Component;
  let fixture: ComponentFixture<Feature86Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature86Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
