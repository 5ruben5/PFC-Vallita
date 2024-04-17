import { NgClass, NgStyle } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

  @Input() title: string = 'My title';
  @Input() text: string = 'My text';
  @Input() photo: string = 'url(https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/10/19/15084107498663.jpg)';
  @Output() data = new EventEmitter<{title: string, photo: string}>();

  public onClick(): void {
    this.data.emit({ title: this.title, photo: this.photo});
  }

}
