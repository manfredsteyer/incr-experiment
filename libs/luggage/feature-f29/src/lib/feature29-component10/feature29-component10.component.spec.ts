import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component10Component } from './feature29-component10.component';

describe('Feature29Component10Component', () => {
  let component: Feature29Component10Component;
  let fixture: ComponentFixture<Feature29Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature29Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
