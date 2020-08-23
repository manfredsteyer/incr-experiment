import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component21Component } from './feature29-component21.component';

describe('Feature29Component21Component', () => {
  let component: Feature29Component21Component;
  let fixture: ComponentFixture<Feature29Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature29Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
