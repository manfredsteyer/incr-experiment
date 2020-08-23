import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component3Component } from './feature7-component3.component';

describe('Feature7Component3Component', () => {
  let component: Feature7Component3Component;
  let fixture: ComponentFixture<Feature7Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature7Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
