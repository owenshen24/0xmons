import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimComponent } from './claim/claim.component';
import { HomeComponent } from './home/home.component';
import { SpawnComponent } from './spawn/spawn.component';
import { SummonComponent } from './summon/summon.component';
import { CollectionComponent } from './collection/collection.component';
import { MonsterComponent } from './monster/monster.component';
import { FarmComponent } from './farm/farm.component';
import { CreditsComponent } from './credits/credits.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'mon/:id',
    component: MonsterComponent
  },
  {
    path: 'farm',
    component: FarmComponent
  },
  {
    path: 'summon',
    component: SummonComponent,
    pathMatch: 'full'
  },
  {
    path: 'spawn',
    component: SpawnComponent,
    pathMatch: 'full'
  },
  {
    path: 'claim',
    component: ClaimComponent,
    pathMatch: 'full'
  },
  {
    path: 'collection',
    component: CollectionComponent,
    pathMatch: 'full'
  },
  {
    path: 'credits',
    component: CreditsComponent,
    pathMatch: 'full'
  },
  // wildcard
  {
    path: '**',
    component: HomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
