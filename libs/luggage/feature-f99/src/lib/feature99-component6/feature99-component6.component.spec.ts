import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component6Component } from './feature99-component6.component';

describe('Feature99Component6Component', () => {
  let component: Feature99Component6Component;
  let fixture: ComponentFixture<Feature99Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature99Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
