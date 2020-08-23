import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component29Component } from './feature29-component29.component';

describe('Feature29Component29Component', () => {
  let component: Feature29Component29Component;
  let fixture: ComponentFixture<Feature29Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature29Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
