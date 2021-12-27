import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component19Component } from './feature68-component19.component';

describe('Feature68Component19Component', () => {
  let component: Feature68Component19Component;
  let fixture: ComponentFixture<Feature68Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature68Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
