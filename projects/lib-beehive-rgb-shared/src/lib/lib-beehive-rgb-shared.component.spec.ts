import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibBeehiveRGBSharedComponent } from './lib-beehive-rgb-shared.component';

describe('LibBeehiveRGBSharedComponent', () => {
  let component: LibBeehiveRGBSharedComponent;
  let fixture: ComponentFixture<LibBeehiveRGBSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibBeehiveRGBSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibBeehiveRGBSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
