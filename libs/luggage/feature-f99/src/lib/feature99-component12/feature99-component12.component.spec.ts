import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component12Component } from './feature99-component12.component';

describe('Feature99Component12Component', () => {
  let component: Feature99Component12Component;
  let fixture: ComponentFixture<Feature99Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature99Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
