import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFollowingComponent } from './my-following/my-following.component';
import { MyCleanUpGuard } from './my-clean-up.guard';
import { MyComponent } from './my.component';
import { MyMapsComponent } from './my-maps/my-maps.component';
import { MyPlacesComponent } from './my-places/my-places.component';
import { MyStreamComponent } from './my-stream/my-stream.component';
import { MyFavoritePlacesComponent } from './my-favorite-places/my-favorite-places.component';

const routes: Routes = [
  {
    path: '',
    component: MyComponent,
    canActivate: [MyCleanUpGuard],
    children: [
      { path: 'stream', component: MyStreamComponent },
      { path: 'maps', component: MyMapsComponent },
      { path: 'favorite-places', component: MyFavoritePlacesComponent },
      { path: 'places', component: MyPlacesComponent },
      { path: 'following', component: MyFollowingComponent },
      { path: '', pathMatch: 'full', redirectTo: 'stream' },
      { path: '**', redirectTo: 'stream' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MyRoutingModule {}
