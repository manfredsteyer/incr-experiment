import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component4Component } from './feature6-component4.component';

describe('Feature6Component4Component', () => {
  let component: Feature6Component4Component;
  let fixture: ComponentFixture<Feature6Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature6Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
