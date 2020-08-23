import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component5Component } from './feature56-component5.component';

describe('Feature56Component5Component', () => {
  let component: Feature56Component5Component;
  let fixture: ComponentFixture<Feature56Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature56Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
