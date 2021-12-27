import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component4Component } from './feature86-component4.component';

describe('Feature86Component4Component', () => {
  let component: Feature86Component4Component;
  let fixture: ComponentFixture<Feature86Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature86Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
