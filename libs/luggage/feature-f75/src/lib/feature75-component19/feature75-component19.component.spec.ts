import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component19Component } from './feature75-component19.component';

describe('Feature75Component19Component', () => {
  let component: Feature75Component19Component;
  let fixture: ComponentFixture<Feature75Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature75Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
