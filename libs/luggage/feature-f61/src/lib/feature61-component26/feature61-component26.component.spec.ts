import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component26Component } from './feature61-component26.component';

describe('Feature61Component26Component', () => {
  let component: Feature61Component26Component;
  let fixture: ComponentFixture<Feature61Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature61Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
