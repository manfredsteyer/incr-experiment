import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component5Component } from './feature28-component5.component';

describe('Feature28Component5Component', () => {
  let component: Feature28Component5Component;
  let fixture: ComponentFixture<Feature28Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature28Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
