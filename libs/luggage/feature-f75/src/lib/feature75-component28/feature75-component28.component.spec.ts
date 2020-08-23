import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component28Component } from './feature75-component28.component';

describe('Feature75Component28Component', () => {
  let component: Feature75Component28Component;
  let fixture: ComponentFixture<Feature75Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature75Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
