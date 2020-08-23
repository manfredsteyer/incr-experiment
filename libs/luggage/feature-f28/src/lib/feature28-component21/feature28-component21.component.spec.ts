import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component21Component } from './feature28-component21.component';

describe('Feature28Component21Component', () => {
  let component: Feature28Component21Component;
  let fixture: ComponentFixture<Feature28Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature28Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
