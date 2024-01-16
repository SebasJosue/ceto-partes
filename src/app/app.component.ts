import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CetoPartsComponent } from './ceto-parts/ceto-parts.component';
import { CabezaCetoComponent } from './ceto-parts/cabeza-ceto/cabeza-ceto.component';
import { CuerpoCetoComponent } from './ceto-parts/cuerpo-ceto/cuerpo-ceto.component';
import { BrazosCetoComponent } from './ceto-parts/brazos-ceto/brazos-ceto.component';
import { ColaCetoComponent } from './ceto-parts/cola-ceto/cola-ceto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , CetoPartsComponent , CabezaCetoComponent , CuerpoCetoComponent , BrazosCetoComponent , ColaCetoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ceto-partes';
}
