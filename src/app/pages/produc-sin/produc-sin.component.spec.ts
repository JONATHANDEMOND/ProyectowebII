import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducSinComponent } from './produc-sin.component';

describe('ProducSinComponent', () => {
  let component: ProducSinComponent;
  let fixture: ComponentFixture<ProducSinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducSinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProducSinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
