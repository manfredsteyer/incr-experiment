import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component25Component } from './feature56-component25.component';

describe('Feature56Component25Component', () => {
  let component: Feature56Component25Component;
  let fixture: ComponentFixture<Feature56Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature56Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
