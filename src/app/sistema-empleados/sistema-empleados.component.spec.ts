import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaEmpleadosComponent } from './sistema-empleados.component';

describe('SistemaEmpleadosComponent', () => {
  let component: SistemaEmpleadosComponent;
  let fixture: ComponentFixture<SistemaEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaEmpleadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
