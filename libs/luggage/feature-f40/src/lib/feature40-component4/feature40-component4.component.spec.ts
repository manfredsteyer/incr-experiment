import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component4Component } from './feature40-component4.component';

describe('Feature40Component4Component', () => {
  let component: Feature40Component4Component;
  let fixture: ComponentFixture<Feature40Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature40Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
