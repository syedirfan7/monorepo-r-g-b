import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeBlueSharkComponent } from './bee-blue-shark.component';

describe('BeeBlueSharkComponent', () => {
  let component: BeeBlueSharkComponent;
  let fixture: ComponentFixture<BeeBlueSharkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeeBlueSharkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeBlueSharkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
