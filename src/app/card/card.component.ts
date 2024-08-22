import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  @Input() tipo: string | undefined;

  constructor(private activatedRoute: ActivatedRoute,private router: Router) {}

  addIdToUrl() {
    // Obtiene la URL actual
    const currentUrl = this.activatedRoute.snapshot.url.join('/');
    // Navega a la misma URL con el nuevo ID como fragmento
    if (this.tipo) {
      this.router.navigate([this.tipo.toLowerCase(),  this.id] );
    }
  }
}
