import { Component } from '@angular/core';
import { JumbotronComponent } from "../../components/jumbotron/jumbotron.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [JumbotronComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
