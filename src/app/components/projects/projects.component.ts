import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: {
    name: string;
    description: string;
    responsibilities: string[];
    technologies: string;
  }[] = [
      {
        name: "LeadGen Project",
        description: `Developed a client-facing application to facilitate lead generation campaigns, 
          streamlining the process of engaging potential customers and converting them into leads.`,
        responsibilities: ["Developed LeadGen application using Angular.", "Styled the application using CSS3 and Sass.",
          "Collaborated closely with client requirements to ensure task completion and quality.", 
          "Created a responsive LeadGen application using CSS media queries.",
          "Participated in sprint planning, retrospective meetings, and technical discussions."
        ],
        technologies: "Angular, TypeScript, HTML5, CSS3, Sass."
      },
      {
        name: "Content Management System (CMS) Project",
        description: `Focused on maintaining website content across multiple publishers, ensuring consistency and quality 
          across platforms for effective communication. Streamlined content management processes for enhanced efficiency.`,
        responsibilities: ["Developed CMS using Angular.", "Developed a responsive CMS application using CSS media queries.",
          "Worked closely with client requirements, ensuring efficient task completion and code reviews.",
          "Iteratively enhanced the CMS product using a release-wise method to maximize user satisfaction.",
          "Played a role in retrospective meetings, sprint planning, and technical discussions."
        ],
        technologies:"Angular, TypeScript, HTML5, CSS3, Sass."
      },
      {
        name: "Data Lake Builder Project",
        description: `Delivered a product focusing on user data management, emphasizing secure storage and organization of user data. 
          Ensured data integrity and privacy throughout the project lifecycle.`,
        responsibilities: ["Developed and delivered a smart data management system for clients.", 
          "Focused on organizing and handling data efficiently for easy management and analysis.",
          "Styled the application using CSS3.",
          "Engaged in technical discussions, sprint planning, and retrospectives."
        ],
        technologies:"React JS, HTML5, CSS3, Sass."
      }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
