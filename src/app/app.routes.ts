import { RouterModule, Routes } from '@angular/router';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { HistoryAndCurrentComponent } from './history-and-current/history-and-current.component';
import { FunFactsComponent } from './fun-facts/fun-facts.component';

export const routes: Routes = [
    { path: 'basicInfoComponent', component: BasicInfoComponent },
    { path: 'historyAndCurrent', component: HistoryAndCurrentComponent },
    { path: 'funFacts', component: FunFactsComponent },
];
