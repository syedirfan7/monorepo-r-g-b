import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeGreenFlyComponent } from './bee-green-fly.component';

describe('BeeGreenFlyComponent', () => {
  let component: BeeGreenFlyComponent;
  let fixture: ComponentFixture<BeeGreenFlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeeGreenFlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeGreenFlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
