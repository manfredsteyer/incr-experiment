import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component19Component } from './feature37-component19.component';

describe('Feature37Component19Component', () => {
  let component: Feature37Component19Component;
  let fixture: ComponentFixture<Feature37Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature37Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
