import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component29Component } from './feature26-component29.component';

describe('Feature26Component29Component', () => {
  let component: Feature26Component29Component;
  let fixture: ComponentFixture<Feature26Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature26Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
