import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component19Component } from './feature54-component19.component';

describe('Feature54Component19Component', () => {
  let component: Feature54Component19Component;
  let fixture: ComponentFixture<Feature54Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature54Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
