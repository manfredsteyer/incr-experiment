import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component8Component } from './feature28-component8.component';

describe('Feature28Component8Component', () => {
  let component: Feature28Component8Component;
  let fixture: ComponentFixture<Feature28Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature28Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
