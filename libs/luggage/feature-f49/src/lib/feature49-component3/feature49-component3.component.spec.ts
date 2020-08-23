import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component3Component } from './feature49-component3.component';

describe('Feature49Component3Component', () => {
  let component: Feature49Component3Component;
  let fixture: ComponentFixture<Feature49Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature49Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
