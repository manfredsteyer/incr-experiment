import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component19Component } from './feature69-component19.component';

describe('Feature69Component19Component', () => {
  let component: Feature69Component19Component;
  let fixture: ComponentFixture<Feature69Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature69Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
