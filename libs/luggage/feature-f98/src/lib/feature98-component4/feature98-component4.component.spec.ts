import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component4Component } from './feature98-component4.component';

describe('Feature98Component4Component', () => {
  let component: Feature98Component4Component;
  let fixture: ComponentFixture<Feature98Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature98Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
