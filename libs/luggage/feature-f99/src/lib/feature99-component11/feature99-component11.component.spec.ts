import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component11Component } from './feature99-component11.component';

describe('Feature99Component11Component', () => {
  let component: Feature99Component11Component;
  let fixture: ComponentFixture<Feature99Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
