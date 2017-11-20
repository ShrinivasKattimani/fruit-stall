import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitCenterComponent } from './fruit-center.component';

describe('FruitCenterComponent', () => {
  let component: FruitCenterComponent;
  let fixture: ComponentFixture<FruitCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
