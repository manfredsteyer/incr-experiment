import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component19Component } from './feature38-component19.component';

describe('Feature38Component19Component', () => {
  let component: Feature38Component19Component;
  let fixture: ComponentFixture<Feature38Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature38Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
