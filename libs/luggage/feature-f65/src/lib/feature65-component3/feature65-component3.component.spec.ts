import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component3Component } from './feature65-component3.component';

describe('Feature65Component3Component', () => {
  let component: Feature65Component3Component;
  let fixture: ComponentFixture<Feature65Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature65Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
