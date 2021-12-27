import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component19Component } from './feature56-component19.component';

describe('Feature56Component19Component', () => {
  let component: Feature56Component19Component;
  let fixture: ComponentFixture<Feature56Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature56Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
