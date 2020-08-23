import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component19Component } from './feature5-component19.component';

describe('Feature5Component19Component', () => {
  let component: Feature5Component19Component;
  let fixture: ComponentFixture<Feature5Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature5Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
