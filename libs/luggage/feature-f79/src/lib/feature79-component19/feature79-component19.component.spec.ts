import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component19Component } from './feature79-component19.component';

describe('Feature79Component19Component', () => {
  let component: Feature79Component19Component;
  let fixture: ComponentFixture<Feature79Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature79Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
