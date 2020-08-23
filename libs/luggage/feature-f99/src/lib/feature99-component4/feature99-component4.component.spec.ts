import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component4Component } from './feature99-component4.component';

describe('Feature99Component4Component', () => {
  let component: Feature99Component4Component;
  let fixture: ComponentFixture<Feature99Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
