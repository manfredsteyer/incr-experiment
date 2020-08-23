import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component15Component } from './feature28-component15.component';

describe('Feature28Component15Component', () => {
  let component: Feature28Component15Component;
  let fixture: ComponentFixture<Feature28Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature28Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
