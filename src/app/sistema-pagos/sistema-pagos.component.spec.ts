import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaPagosComponent } from './sistema-pagos.component';

describe('SistemaPagosComponent', () => {
  let component: SistemaPagosComponent;
  let fixture: ComponentFixture<SistemaPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaPagosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
