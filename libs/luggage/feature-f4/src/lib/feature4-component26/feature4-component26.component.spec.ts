import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component26Component } from './feature4-component26.component';

describe('Feature4Component26Component', () => {
  let component: Feature4Component26Component;
  let fixture: ComponentFixture<Feature4Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature4Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
