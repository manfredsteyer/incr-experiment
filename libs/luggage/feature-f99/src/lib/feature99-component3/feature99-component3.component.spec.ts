import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component3Component } from './feature99-component3.component';

describe('Feature99Component3Component', () => {
  let component: Feature99Component3Component;
  let fixture: ComponentFixture<Feature99Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
