import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasExplorarComponent } from './categorias-explorar.component';

describe('CategoriasExplorarComponent', () => {
  let component: CategoriasExplorarComponent;
  let fixture: ComponentFixture<CategoriasExplorarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriasExplorarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasExplorarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
