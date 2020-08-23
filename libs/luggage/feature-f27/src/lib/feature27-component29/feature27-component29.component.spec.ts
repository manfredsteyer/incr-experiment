import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component29Component } from './feature27-component29.component';

describe('Feature27Component29Component', () => {
  let component: Feature27Component29Component;
  let fixture: ComponentFixture<Feature27Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature27Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
