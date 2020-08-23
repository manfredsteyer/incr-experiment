import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component3Component } from './feature28-component3.component';

describe('Feature28Component3Component', () => {
  let component: Feature28Component3Component;
  let fixture: ComponentFixture<Feature28Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature28Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
