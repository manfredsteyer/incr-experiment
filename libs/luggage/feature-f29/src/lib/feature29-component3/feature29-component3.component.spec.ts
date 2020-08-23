import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component3Component } from './feature29-component3.component';

describe('Feature29Component3Component', () => {
  let component: Feature29Component3Component;
  let fixture: ComponentFixture<Feature29Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature29Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
