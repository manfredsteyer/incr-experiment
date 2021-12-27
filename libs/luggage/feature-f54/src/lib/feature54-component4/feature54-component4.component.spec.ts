import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component4Component } from './feature54-component4.component';

describe('Feature54Component4Component', () => {
  let component: Feature54Component4Component;
  let fixture: ComponentFixture<Feature54Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature54Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
