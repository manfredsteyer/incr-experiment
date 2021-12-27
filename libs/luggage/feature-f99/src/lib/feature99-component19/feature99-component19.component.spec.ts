import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component19Component } from './feature99-component19.component';

describe('Feature99Component19Component', () => {
  let component: Feature99Component19Component;
  let fixture: ComponentFixture<Feature99Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature99Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
