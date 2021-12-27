import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component26Component } from './feature53-component26.component';

describe('Feature53Component26Component', () => {
  let component: Feature53Component26Component;
  let fixture: ComponentFixture<Feature53Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature53Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
