import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component7Component } from './feature99-component7.component';

describe('Feature99Component7Component', () => {
  let component: Feature99Component7Component;
  let fixture: ComponentFixture<Feature99Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature99Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
