import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component29Component } from './feature28-component29.component';

describe('Feature28Component29Component', () => {
  let component: Feature28Component29Component;
  let fixture: ComponentFixture<Feature28Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature28Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
