import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component19Component } from './feature48-component19.component';

describe('Feature48Component19Component', () => {
  let component: Feature48Component19Component;
  let fixture: ComponentFixture<Feature48Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature48Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
