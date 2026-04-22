import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar-component/navbar-component";
import { Header } from "./header/header";
import { About } from "./about/about";
import { Projects } from "./projects/projects";
import { Contact } from "./contact/contact";
import { Experience } from "./experience/experience";
import { Skill } from "./skill/skill";

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, CommonModule, NavbarComponent, Header, About, Projects, Contact, Experience, Skill],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // protected readonly title = signal('ifa-quadar-portfolio');
  // activeLink: string = 'home';

  // setActive(link: string): void {
  //   this.activeLink = link;

  // }
  activeLink: string = 'home';

  setActive(link: string): void {
    this.activeLink = link;

  }
}
