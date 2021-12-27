import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component25Component } from './feature28-component25.component';

describe('Feature28Component25Component', () => {
  let component: Feature28Component25Component;
  let fixture: ComponentFixture<Feature28Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature28Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
