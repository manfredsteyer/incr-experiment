import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component18Component } from './feature99-component18.component';

describe('Feature99Component18Component', () => {
  let component: Feature99Component18Component;
  let fixture: ComponentFixture<Feature99Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
