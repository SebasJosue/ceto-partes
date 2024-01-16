import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoCetoComponent } from './cuerpo-ceto.component';

describe('CuerpoCetoComponent', () => {
  let component: CuerpoCetoComponent;
  let fixture: ComponentFixture<CuerpoCetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuerpoCetoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuerpoCetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
