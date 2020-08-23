import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component29Component } from './feature5-component29.component';

describe('Feature5Component29Component', () => {
  let component: Feature5Component29Component;
  let fixture: ComponentFixture<Feature5Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature5Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
