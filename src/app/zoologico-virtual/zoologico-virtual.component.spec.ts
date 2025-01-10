import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoologicoVirtualComponent } from './zoologico-virtual.component';

describe('ZoologicoVirtualComponent', () => {
  let component: ZoologicoVirtualComponent;
  let fixture: ComponentFixture<ZoologicoVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoologicoVirtualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoologicoVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
