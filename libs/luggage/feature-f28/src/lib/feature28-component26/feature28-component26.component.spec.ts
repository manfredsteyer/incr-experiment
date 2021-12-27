import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component26Component } from './feature28-component26.component';

describe('Feature28Component26Component', () => {
  let component: Feature28Component26Component;
  let fixture: ComponentFixture<Feature28Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature28Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
