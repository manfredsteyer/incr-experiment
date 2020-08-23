import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component19Component } from './feature47-component19.component';

describe('Feature47Component19Component', () => {
  let component: Feature47Component19Component;
  let fixture: ComponentFixture<Feature47Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature47Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
