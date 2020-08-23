import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component29Component } from './feature92-component29.component';

describe('Feature92Component29Component', () => {
  let component: Feature92Component29Component;
  let fixture: ComponentFixture<Feature92Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature92Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
