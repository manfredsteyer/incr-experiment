import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component19Component } from './feature61-component19.component';

describe('Feature61Component19Component', () => {
  let component: Feature61Component19Component;
  let fixture: ComponentFixture<Feature61Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature61Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
