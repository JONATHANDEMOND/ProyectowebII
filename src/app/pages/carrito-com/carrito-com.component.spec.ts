import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoComComponent } from './carrito-com.component';

describe('CarritoComComponent', () => {
  let component: CarritoComComponent;
  let fixture: ComponentFixture<CarritoComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoComComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarritoComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
