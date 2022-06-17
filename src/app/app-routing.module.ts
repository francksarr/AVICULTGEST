import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-pondeuse',
    loadChildren: () => import('./add-pondeuse/add-pondeuse.module').then( m => m.AddPondeusePageModule)
  },
  {
    path: 'add-chair',
    loadChildren: () => import('./add-chair/add-chair.module').then( m => m.AddChairPageModule)
  },
  {
    path: 'add-commande',
    loadChildren: () => import('./add-commande/add-commande.module').then( m => m.AddCommandePageModule)
  },
  {
    path: 'add-client',
    loadChildren: () => import('./add-client/add-client.module').then( m => m.AddClientPageModule)
  },
  {
    path: 'calendrier',
    loadChildren: () => import('./calendrier/calendrier.module').then( m => m.CALENDRIERPageModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then( m => m.ClientsPageModule)
  },
  {
    path: 'commande',
    loadChildren: () => import('./commande/commande.module').then( m => m.CommandePageModule)
  },
  {
    path: 'chair-edit',
    loadChildren: () => import('./chair-edit/chair-edit.module').then( m => m.ChairEditPageModule)
  },
  {
    path: 'pondeuse-edit',
    loadChildren: () => import('./pondeuse-edit/pondeuse-edit.module').then( m => m.PondeuseEditPageModule)
  },
  {
    path: 'calendrier-chair',
    loadChildren: () => import('./calendrier-chair/calendrier-chair.module').then( m => m.CalendrierChairPageModule)
  },
  {
    path: 'calendrier-pondeuse',
    loadChildren: () => import('./calendrier-pondeuse/calendrier-pondeuse.module').then( m => m.CalendrierPondeusePageModule)
  },
  {
    path: 'list-veterinaire',
    loadChildren: () => import('./list-veterinaire/list-veterinaire.module').then( m => m.ListVeterinairePageModule)
  },  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'user-edit',
    loadChildren: () => import('./user-edit/user-edit.module').then( m => m.UserEditPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
