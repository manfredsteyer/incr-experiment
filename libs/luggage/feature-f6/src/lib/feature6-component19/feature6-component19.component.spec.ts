import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component19Component } from './feature6-component19.component';

describe('Feature6Component19Component', () => {
  let component: Feature6Component19Component;
  let fixture: ComponentFixture<Feature6Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature6Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
