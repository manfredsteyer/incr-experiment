import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component4Component } from './feature53-component4.component';

describe('Feature53Component4Component', () => {
  let component: Feature53Component4Component;
  let fixture: ComponentFixture<Feature53Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature53Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
