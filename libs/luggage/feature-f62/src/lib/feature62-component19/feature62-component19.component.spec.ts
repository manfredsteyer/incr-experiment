import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component19Component } from './feature62-component19.component';

describe('Feature62Component19Component', () => {
  let component: Feature62Component19Component;
  let fixture: ComponentFixture<Feature62Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature62Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
