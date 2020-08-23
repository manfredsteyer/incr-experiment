import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component29Component } from './feature71-component29.component';

describe('Feature71Component29Component', () => {
  let component: Feature71Component29Component;
  let fixture: ComponentFixture<Feature71Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
