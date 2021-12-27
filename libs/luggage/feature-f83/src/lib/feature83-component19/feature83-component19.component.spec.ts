import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component19Component } from './feature83-component19.component';

describe('Feature83Component19Component', () => {
  let component: Feature83Component19Component;
  let fixture: ComponentFixture<Feature83Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature83Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
