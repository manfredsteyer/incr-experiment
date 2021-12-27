import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component19Component } from './feature86-component19.component';

describe('Feature86Component19Component', () => {
  let component: Feature86Component19Component;
  let fixture: ComponentFixture<Feature86Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature86Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
