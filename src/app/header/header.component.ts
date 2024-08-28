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
  @ViewChild('menu') linkDesktop!: ElementRef;
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

  toggleDesktopMenu(num: Number) {
    let menu = document.getElementById("desktop-menu");
    let menu2 = document.getElementById("desktop-menu2");
    let menu3 = document.getElementById("desktop-menu3");
    if (num===1) {  
      menu?.classList.add("desktop-menu");
      menu?.classList.remove("noShow");
      menu2?.classList.add("noShow");
      menu2?.classList.remove("desktop-menu");
      menu3?.classList.add("noShow");
      menu3?.classList.remove("desktop-menu");
    }else if(num===2){
      menu2?.classList.add("desktop-menu");
      menu2?.classList.remove("noShow");
      menu3?.classList.add("noShow");
      menu3?.classList.remove("desktop-menu");
      menu?.classList.add("noShow");
      menu?.classList.remove("desktop-menu");
    }else{
      menu3?.classList.add("desktop-menu");
      menu3?.classList.remove("noShow");
      menu2?.classList.add("noShow");
      menu2?.classList.remove("desktop-menu");
      menu?.classList.add("noShow");
      menu?.classList.remove("desktop-menu");
    }
  }

  out(num: Number){
    let menu = document.getElementById("desktop-menu");
    let menu2 = document.getElementById("desktop-menu2");
    let menu3 = document.getElementById("desktop-menu3");
    if (num===1) {  
      menu?.classList.remove("desktop-menu");
      menu?.classList.add("noShow");
    }else if(num===2){
      menu2?.classList.remove("desktop-menu");
      menu2?.classList.add("noShow");
    }else{
      menu3?.classList.remove("desktop-menu");
      menu3?.classList.add("noShow");
    }
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
