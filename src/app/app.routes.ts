import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar-component/navbar-component';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Experience } from './experience/experience';
import { Projects } from './projects/projects';
import { Skill } from './skill/skill';
import { Header } from './header/header';

 
export const routes: Routes = [
  {
    path: '',
    component: Header,
  }
  // {
  //   path: 'about',
  //   component: About,
  // },
  // {
  //   path: 'contact',
  //   component: Contact,
  // },
  // {
  //   path: 'experience',
  //   component: Experience,
  // },
  // {
  //   path: 'projects',
  //   component: Projects,
  // },
  // {
  //   path: 'skills',
  //   component: Skill,
  // },
  

];
