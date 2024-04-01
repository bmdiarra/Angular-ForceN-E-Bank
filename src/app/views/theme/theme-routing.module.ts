import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransfertsComponent } from './transferts.component';
import { CompteComponent } from './compte.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'transferts',
      },
      {
        path: 'transferts',
        component: TransfertsComponent,
        data: {
          title: 'Transferts',
        },
      },
      {
        path: 'compte',
        component: CompteComponent,
        data: {
          title: 'Compte',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
