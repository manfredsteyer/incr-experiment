import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component29Component } from './feature47-component29.component';

describe('Feature47Component29Component', () => {
  let component: Feature47Component29Component;
  let fixture: ComponentFixture<Feature47Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature47Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});