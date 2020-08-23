import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component3Component } from './feature61-component3.component';

describe('Feature61Component3Component', () => {
  let component: Feature61Component3Component;
  let fixture: ComponentFixture<Feature61Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature61Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
