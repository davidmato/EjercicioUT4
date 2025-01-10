import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionpedidosComponent } from './gestionpedidos.component';

describe('GestionpedidosComponent', () => {
  let component: GestionpedidosComponent;
  let fixture: ComponentFixture<GestionpedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionpedidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionpedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
