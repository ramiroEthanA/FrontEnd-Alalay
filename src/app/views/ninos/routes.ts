import { Routes } from '@angular/router';
export const routes: Routes = [
{
    path: '',
    data: {
      title: 'Base'
    },
    children: [
        {
          path: '',
          redirectTo: 'cards',
          pathMatch: 'full'
        },
        {
          path: 'nino',
          loadComponent: () => import('./nino/nino.component').then(m => m.NinoComponent),
          data: {
            title: 'Niño'
          }
        },
        {
          path: 'reportes',
          loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent),
          data: {
            title: 'Breadcrumbs'
          }
        },
    ]

}



]