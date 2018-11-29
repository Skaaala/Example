import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from '../shared/shared.module';
import { FeedModule } from '../shared/feed/feed.module';
import { SearchResultMapsPlacesModule } from '../shared/search-result-maps-places/search-result-maps-places.module';
import { MyBarComponent } from './my-bar/my-bar.component';
import { MyFollowingComponent } from './my-following/my-following.component';
import { MyRoutingModule } from './my-routing.module';
import { MyComponent } from './my.component';
import { MyMapsComponent } from './my-maps/my-maps.component';
import { CountNewActivitiesPipe } from './my-menu/count-new-activities.pipe';
import { MyMenuGroupComponent } from './my-menu/desktop/group/my-menu-group.component';
import { NotificationCounterComponent } from './my-menu/desktop/group/notification-counter/notification-counter.component';
import { MyMenuItemComponent } from './my-menu/desktop/item/my-menu-item.component';
import { MyMenuDesktopComponent } from './my-menu/desktop/my-menu-desktop.component';
import { MyMenuMobileComponent } from './my-menu/mobile/my-menu-mobile.component';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { MyPlacesComponent } from './my-places/my-places.component';
import { MyStreamComponent } from './my-stream/my-stream.component';
import { MyStreamSidebarComponent } from './my-stream/sidebar/my-stream-sidebar.component';
import { ContentHeaderComponent } from './shared/content-header/content-header.component';
import { ContentMenuLeftComponent } from './shared/content-menu/content-menu-left/content-menu-left.component';
import { ContentMenuRightComponent } from './shared/content-menu/content-menu-right/content-menu-right.component';
import { ContentMenuComponent } from './shared/content-menu/content-menu.component';
import { EmptyFeedComponent } from './shared/empty-feed/empty-feed.component';
import { MapsListComponent } from './shared/maps-list/maps-list.component';
import { MyFavoritePlacesComponent } from './my-favorite-places/my-favorite-places.component';

@NgModule({
  imports: [SharedModule, FeedModule, SearchResultMapsPlacesModule, InfiniteScrollModule, MyRoutingModule],
  declarations: [
    MyComponent,
    MyPlacesComponent,
    MyMapsComponent,
    MyStreamComponent,
    MyFollowingComponent,
    MyMenuComponent,
    MyMenuGroupComponent,
    ContentHeaderComponent,
    MapsListComponent,
    MyBarComponent,
    ContentMenuComponent,
    ContentMenuLeftComponent,
    ContentMenuRightComponent,
    NotificationCounterComponent,
    CountNewActivitiesPipe,
    MyMenuItemComponent,
    EmptyFeedComponent,
    MyMenuDesktopComponent,
    MyMenuMobileComponent,
    MyStreamSidebarComponent,
    MyFavoritePlacesComponent
  ],
  exports: [MyComponent],
  providers: []
})
export class MyModule {}
