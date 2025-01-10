import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformacionListadoProductosComponent } from './transformacion-listado-productos.component';

describe('TransformacionListadoProductosComponent', () => {
  let component: TransformacionListadoProductosComponent;
  let fixture: ComponentFixture<TransformacionListadoProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformacionListadoProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformacionListadoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
