import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component19Component } from './feature4-component19.component';

describe('Feature4Component19Component', () => {
  let component: Feature4Component19Component;
  let fixture: ComponentFixture<Feature4Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature4Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
