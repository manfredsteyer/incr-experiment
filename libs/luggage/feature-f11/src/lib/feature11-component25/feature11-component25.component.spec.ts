import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component25Component } from './feature11-component25.component';

describe('Feature11Component25Component', () => {
  let component: Feature11Component25Component;
  let fixture: ComponentFixture<Feature11Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature11Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
