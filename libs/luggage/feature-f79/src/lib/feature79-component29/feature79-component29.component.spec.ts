import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component29Component } from './feature79-component29.component';

describe('Feature79Component29Component', () => {
  let component: Feature79Component29Component;
  let fixture: ComponentFixture<Feature79Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature79Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
