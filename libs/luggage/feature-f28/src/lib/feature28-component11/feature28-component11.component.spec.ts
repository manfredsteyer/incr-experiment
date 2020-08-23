import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component11Component } from './feature28-component11.component';

describe('Feature28Component11Component', () => {
  let component: Feature28Component11Component;
  let fixture: ComponentFixture<Feature28Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature28Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
