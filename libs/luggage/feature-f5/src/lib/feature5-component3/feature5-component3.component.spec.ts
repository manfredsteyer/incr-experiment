import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component3Component } from './feature5-component3.component';

describe('Feature5Component3Component', () => {
  let component: Feature5Component3Component;
  let fixture: ComponentFixture<Feature5Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature5Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
