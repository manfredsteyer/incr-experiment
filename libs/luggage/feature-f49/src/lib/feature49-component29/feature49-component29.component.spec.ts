import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component29Component } from './feature49-component29.component';

describe('Feature49Component29Component', () => {
  let component: Feature49Component29Component;
  let fixture: ComponentFixture<Feature49Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature49Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
