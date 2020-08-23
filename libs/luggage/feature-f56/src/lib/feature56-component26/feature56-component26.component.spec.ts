import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component26Component } from './feature56-component26.component';

describe('Feature56Component26Component', () => {
  let component: Feature56Component26Component;
  let fixture: ComponentFixture<Feature56Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature56Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
