import { Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { CartaComponent } from "./views/carta/carta.component";
import { ContactoComponent } from "./views/contacto/contacto.component";


export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'carta', component: CartaComponent },
    { path: 'contacto', component: ContactoComponent }

];

