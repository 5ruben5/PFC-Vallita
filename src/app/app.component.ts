import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { PostComponent } from './components/post/post.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ArticleComponent, CardComponent, FooterComponent, HeaderComponent, HeaderComponent, ModalComponent, PostComponent, JumbotronComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
