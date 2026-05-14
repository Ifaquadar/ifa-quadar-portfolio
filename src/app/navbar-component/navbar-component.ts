import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  imports: [RouterLink],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss',
})
export class NavbarComponent {
  activeLink: string = 'home';

  menuOpen = false;
  link = ['home','about', 'experience', 'skills', 'contact'];

  
   setActive(link: string): void {
    this.activeLink = link;

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY + 150; 
    // offset helps activate slightly before reaching exact top

    const pageBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

    // If user reached bottom → activate contact
    if (pageBottom) {
      this.activeLink = 'contact';
      return;
    }


    for (const section of this.link) {
      const element = document.getElementById(section);

      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          this.activeLink = section;
        }
      }
    }
  }

toggleMenu() { this.menuOpen = !this.menuOpen; }
closeMenu()  { this.menuOpen = false; }
 
}
