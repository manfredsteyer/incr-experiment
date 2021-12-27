import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component19Component } from './feature42-component19.component';

describe('Feature42Component19Component', () => {
  let component: Feature42Component19Component;
  let fixture: ComponentFixture<Feature42Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature42Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
