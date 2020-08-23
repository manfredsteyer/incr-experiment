import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component3Component } from './feature69-component3.component';

describe('Feature69Component3Component', () => {
  let component: Feature69Component3Component;
  let fixture: ComponentFixture<Feature69Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature69Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
