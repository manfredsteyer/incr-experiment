import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component28Component } from './feature34-component28.component';

describe('Feature34Component28Component', () => {
  let component: Feature34Component28Component;
  let fixture: ComponentFixture<Feature34Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature34Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
