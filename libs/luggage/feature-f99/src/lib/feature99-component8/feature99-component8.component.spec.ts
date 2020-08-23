import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component8Component } from './feature99-component8.component';

describe('Feature99Component8Component', () => {
  let component: Feature99Component8Component;
  let fixture: ComponentFixture<Feature99Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
