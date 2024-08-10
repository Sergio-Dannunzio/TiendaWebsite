import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;

  @ViewChild('menu') menu!: ElementRef;

  openMenu() {
    let menu = document.getElementById("mobile-menu");
    if(menu?.className=="noShow"){
      menu.classList.remove("noShow");
      this.menuOpen = true;
    }else{
      menu?.classList.add("noShow");
      this.menuOpen = false
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    let menu = document.getElementById("mobile-menu");
    if (this.menuOpen && !this.menu.nativeElement.contains(event.target)) {
      menu?.classList.add("noShow");
      this.menuOpen = false;
    }
  }
}
