import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component12Component } from './feature28-component12.component';

describe('Feature28Component12Component', () => {
  let component: Feature28Component12Component;
  let fixture: ComponentFixture<Feature28Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature28Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
