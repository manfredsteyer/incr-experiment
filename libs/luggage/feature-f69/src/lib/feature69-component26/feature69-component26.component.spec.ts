import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component26Component } from './feature69-component26.component';

describe('Feature69Component26Component', () => {
  let component: Feature69Component26Component;
  let fixture: ComponentFixture<Feature69Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature69Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
