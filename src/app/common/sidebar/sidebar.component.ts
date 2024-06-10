import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buttons = [
    { title: 'About Me', action: () => this.aboutMe() },
    { title: 'Projects', action: () => this.projects() },
    { title: 'Contact', action: () => this.contact() },
    { title: 'Download CV', action: () => this.download_cv() }
  ];

  aboutMe() {
    this.router.navigate([`details/about-me`]);
  }

  projects() {
    this.router.navigate([`details/projects`]);
  }

  contact() {
    this.router.navigate([`details/contact`]);
  }

  download_cv() {
    window.open('../../../assets/cv/Avinash_CV.pdf', '_blank');
  }

}
