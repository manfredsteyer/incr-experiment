import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component29Component } from './feature61-component29.component';

describe('Feature61Component29Component', () => {
  let component: Feature61Component29Component;
  let fixture: ComponentFixture<Feature61Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature61Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
