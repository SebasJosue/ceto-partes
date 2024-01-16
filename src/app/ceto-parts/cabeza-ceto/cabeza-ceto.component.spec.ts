import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezaCetoComponent } from './cabeza-ceto.component';

describe('CabezaCetoComponent', () => {
  let component: CabezaCetoComponent;
  let fixture: ComponentFixture<CabezaCetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabezaCetoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabezaCetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
