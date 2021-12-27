import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component19Component } from './feature28-component19.component';

describe('Feature28Component19Component', () => {
  let component: Feature28Component19Component;
  let fixture: ComponentFixture<Feature28Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature28Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
