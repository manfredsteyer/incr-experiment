import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component6Component } from './feature63-component6.component';

describe('Feature63Component6Component', () => {
  let component: Feature63Component6Component;
  let fixture: ComponentFixture<Feature63Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature63Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
