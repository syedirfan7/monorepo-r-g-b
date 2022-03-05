import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeBlueWhaleComponent } from './bee-blue-whale.component';

describe('BeeBlueWhaleComponent', () => {
  let component: BeeBlueWhaleComponent;
  let fixture: ComponentFixture<BeeBlueWhaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeeBlueWhaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeBlueWhaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
