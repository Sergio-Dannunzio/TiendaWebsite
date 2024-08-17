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
  @ViewChild('menuIcon') menuIcon!: ElementRef;
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
    const clickedIcon = this.menuIcon.nativeElement.contains(event.target);
    const clickedInside = this.menu.nativeElement.contains(event.target);
    if (this.menuOpen && !clickedInside && !clickedIcon) {
      menu?.classList.add("noShow");
      this.menuOpen = false;
    }
  }

  displayData() {
    let data = document.getElementById("displayData");
    if (data?.className=="noShow") {
      data.classList.remove("noShow");
      data.classList.add("displayData");
    }else{
      data?.classList.add("noShow");
      data?.classList.remove("displayData");
    }
  }
}
