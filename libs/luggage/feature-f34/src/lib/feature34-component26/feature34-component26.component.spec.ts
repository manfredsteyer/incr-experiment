import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component26Component } from './feature34-component26.component';

describe('Feature34Component26Component', () => {
  let component: Feature34Component26Component;
  let fixture: ComponentFixture<Feature34Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature34Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
