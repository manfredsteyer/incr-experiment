import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component3Component } from './feature92-component3.component';

describe('Feature92Component3Component', () => {
  let component: Feature92Component3Component;
  let fixture: ComponentFixture<Feature92Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature92Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
