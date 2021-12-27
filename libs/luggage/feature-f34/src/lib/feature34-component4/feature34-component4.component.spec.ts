import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component4Component } from './feature34-component4.component';

describe('Feature34Component4Component', () => {
  let component: Feature34Component4Component;
  let fixture: ComponentFixture<Feature34Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature34Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
