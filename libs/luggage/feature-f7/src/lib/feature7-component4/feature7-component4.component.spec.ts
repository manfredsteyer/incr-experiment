import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component4Component } from './feature7-component4.component';

describe('Feature7Component4Component', () => {
  let component: Feature7Component4Component;
  let fixture: ComponentFixture<Feature7Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature7Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
