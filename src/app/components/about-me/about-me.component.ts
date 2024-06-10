import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  aboutMePage = [
    {title: 'Problem-Solving Expertise:', description: 'Experienced in the full SDLC, ensuring comprehensive project delivery.'},
    {title: 'Award-Winning Performance:', description: 'Recognized with the Best Performer Award at Kreatio Software Pvt. Ltd.'},
    {title: 'User-Centric Solutions:', description: 'Committed to creating solutions that drive business growth and enhance productivity.'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  highlightPhrase(description: string, phraseToHighlight: string): string {
    return description.replace(phraseToHighlight, `<span class="highlight">${phraseToHighlight}</span>`);
  }

}
