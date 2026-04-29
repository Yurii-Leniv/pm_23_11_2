import { Component } from '@angular/core';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-resume-layout',
  standalone: true,
  imports: [About, Skills, Sidebar],
  templateUrl: './resume-layout.html',
  styleUrl: './resume-layout.scss'
})
export class ResumeLayoutComponent {}
