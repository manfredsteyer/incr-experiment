import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component15Component } from './feature99-component15.component';

describe('Feature99Component15Component', () => {
  let component: Feature99Component15Component;
  let fixture: ComponentFixture<Feature99Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature99Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
