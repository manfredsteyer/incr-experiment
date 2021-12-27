import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component19Component } from './feature29-component19.component';

describe('Feature29Component19Component', () => {
  let component: Feature29Component19Component;
  let fixture: ComponentFixture<Feature29Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature29Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
