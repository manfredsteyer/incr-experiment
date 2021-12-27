import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component4Component } from './feature71-component4.component';

describe('Feature71Component4Component', () => {
  let component: Feature71Component4Component;
  let fixture: ComponentFixture<Feature71Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature71Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
