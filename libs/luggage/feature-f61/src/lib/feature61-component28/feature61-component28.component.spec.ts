import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component28Component } from './feature61-component28.component';

describe('Feature61Component28Component', () => {
  let component: Feature61Component28Component;
  let fixture: ComponentFixture<Feature61Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature61Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
