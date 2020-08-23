import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component29Component } from './feature75-component29.component';

describe('Feature75Component29Component', () => {
  let component: Feature75Component29Component;
  let fixture: ComponentFixture<Feature75Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature75Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
