import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component23Component } from './feature99-component23.component';

describe('Feature99Component23Component', () => {
  let component: Feature99Component23Component;
  let fixture: ComponentFixture<Feature99Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature99Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
