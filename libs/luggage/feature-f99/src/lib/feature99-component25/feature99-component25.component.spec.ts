import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component25Component } from './feature99-component25.component';

describe('Feature99Component25Component', () => {
  let component: Feature99Component25Component;
  let fixture: ComponentFixture<Feature99Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature99Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
