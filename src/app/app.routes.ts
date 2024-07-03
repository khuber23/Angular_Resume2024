import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SkillsComponent} from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home Page',
        component: HomeComponent,
    },
    {
        path: 'skills',
        title: 'Skills Page',
        component: SkillsComponent,
    },
    {
        path: 'experience',
        title: 'Experience Page',
        component: ExperienceComponent,
    },
    {
        path: 'education',
        title: 'Education Page',
        component: EducationComponent,
    },
    {
        path: 'projects',
        title: 'Projects Page',
        component: ProjectsComponent,
    },
];
