import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component3Component } from './feature98-component3.component';

describe('Feature98Component3Component', () => {
  let component: Feature98Component3Component;
  let fixture: ComponentFixture<Feature98Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature98Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
