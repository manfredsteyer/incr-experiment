import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component19Component } from './feature41-component19.component';

describe('Feature41Component19Component', () => {
  let component: Feature41Component19Component;
  let fixture: ComponentFixture<Feature41Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature41Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
