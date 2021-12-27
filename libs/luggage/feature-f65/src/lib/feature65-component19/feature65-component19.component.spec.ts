import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component19Component } from './feature65-component19.component';

describe('Feature65Component19Component', () => {
  let component: Feature65Component19Component;
  let fixture: ComponentFixture<Feature65Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature65Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
