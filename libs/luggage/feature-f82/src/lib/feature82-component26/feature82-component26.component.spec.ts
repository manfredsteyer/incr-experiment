import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component26Component } from './feature82-component26.component';

describe('Feature82Component26Component', () => {
  let component: Feature82Component26Component;
  let fixture: ComponentFixture<Feature82Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature82Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
