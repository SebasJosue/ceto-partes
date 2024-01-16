import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazosCetoComponent } from './brazos-ceto.component';

describe('BrazosCetoComponent', () => {
  let component: BrazosCetoComponent;
  let fixture: ComponentFixture<BrazosCetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrazosCetoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrazosCetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
