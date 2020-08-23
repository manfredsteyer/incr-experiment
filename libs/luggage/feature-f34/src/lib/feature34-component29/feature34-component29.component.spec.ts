import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component29Component } from './feature34-component29.component';

describe('Feature34Component29Component', () => {
  let component: Feature34Component29Component;
  let fixture: ComponentFixture<Feature34Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature34Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
