import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component10Component } from './feature99-component10.component';

describe('Feature99Component10Component', () => {
  let component: Feature99Component10Component;
  let fixture: ComponentFixture<Feature99Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});