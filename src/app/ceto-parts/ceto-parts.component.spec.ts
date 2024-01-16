import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetoPartsComponent } from './ceto-parts.component';

describe('CetoPartsComponent', () => {
  let component: CetoPartsComponent;
  let fixture: ComponentFixture<CetoPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CetoPartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CetoPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
