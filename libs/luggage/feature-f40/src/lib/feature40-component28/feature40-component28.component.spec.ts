import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component28Component } from './feature40-component28.component';

describe('Feature40Component28Component', () => {
  let component: Feature40Component28Component;
  let fixture: ComponentFixture<Feature40Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature40Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
