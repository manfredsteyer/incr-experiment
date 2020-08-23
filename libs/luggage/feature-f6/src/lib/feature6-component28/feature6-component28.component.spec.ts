import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component28Component } from './feature6-component28.component';

describe('Feature6Component28Component', () => {
  let component: Feature6Component28Component;
  let fixture: ComponentFixture<Feature6Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature6Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
