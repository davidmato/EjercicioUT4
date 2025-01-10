import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaPalabrasComponent } from './biblioteca-palabras.component';

describe('BibliotecaPalabrasComponent', () => {
  let component: BibliotecaPalabrasComponent;
  let fixture: ComponentFixture<BibliotecaPalabrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibliotecaPalabrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliotecaPalabrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
