import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component26Component } from './feature81-component26.component';

describe('Feature81Component26Component', () => {
  let component: Feature81Component26Component;
  let fixture: ComponentFixture<Feature81Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature81Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
