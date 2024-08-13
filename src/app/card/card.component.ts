import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() imgUrl: string | undefined;
  @Input() wspUrl: string | undefined;
  @Input() desc: string | undefined;
  @Input() id: string | undefined;

}
