import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component28Component } from './feature37-component28.component';

describe('Feature37Component28Component', () => {
  let component: Feature37Component28Component;
  let fixture: ComponentFixture<Feature37Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature37Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
