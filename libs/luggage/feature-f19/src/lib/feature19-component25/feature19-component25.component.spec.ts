import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component25Component } from './feature19-component25.component';

describe('Feature19Component25Component', () => {
  let component: Feature19Component25Component;
  let fixture: ComponentFixture<Feature19Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature19Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
