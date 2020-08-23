import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component3Component } from './feature63-component3.component';

describe('Feature63Component3Component', () => {
  let component: Feature63Component3Component;
  let fixture: ComponentFixture<Feature63Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature63Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
