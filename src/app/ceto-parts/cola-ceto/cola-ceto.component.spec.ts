import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaCetoComponent } from './cola-ceto.component';

describe('ColaCetoComponent', () => {
  let component: ColaCetoComponent;
  let fixture: ComponentFixture<ColaCetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaCetoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColaCetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
