import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component29Component } from './feature83-component29.component';

describe('Feature83Component29Component', () => {
  let component: Feature83Component29Component;
  let fixture: ComponentFixture<Feature83Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature83Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
