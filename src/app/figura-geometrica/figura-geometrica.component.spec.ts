import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguraGeometricaComponent } from './figura-geometrica.component';

describe('FiguraGeometricaComponent', () => {
  let component: FiguraGeometricaComponent;
  let fixture: ComponentFixture<FiguraGeometricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiguraGeometricaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiguraGeometricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
