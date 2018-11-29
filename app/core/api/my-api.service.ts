import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api/api.service';
import { MapPreviewDto } from '../dto/map-results.dto';
import { MyMenuDto } from '../dto/my-menu.dto';
import { MyPlacesPageDto } from '../dto/my-place.dto';
import { UserFeedDto, UserFeedNextPageParamsDto } from '../dto/user-feed.dto';
import { AbstractApiService, BASE_URL } from './abstract-api.service';
import { NotificationSettingsDto } from '../dto/notification-settings.dto';
import { PoiDto } from '../dto/poi.dto';

@Injectable({
  providedIn: 'root'
})
export class MyApiService extends AbstractApiService {
  public readonly myUrl = `${BASE_URL}my/`;

  public constructor(apiService: ApiService, http: HttpClient) {
    super(apiService, http);
  }

  public getMyMenu(): Observable<MyMenuDto> {
    return this.httpGet<MyMenuDto>('quick-access/');
  }

  public getUserFeedFirstPage(): Observable<UserFeedDto> {
    return this.httpGet<UserFeedDto>(`feed/`);
  }

  public getUserFeed(nextPageParams: UserFeedNextPageParamsDto): Observable<UserFeedDto> {
    return this.httpGet<UserFeedDto>(`feed/`, {
      params: {
        page: '' + nextPageParams.page,
        offset_timestamp: nextPageParams.offset_timestamp
      }
    });
  }

  public getMyMaps(): Observable<MapPreviewDto[]> {
    return this.httpGet<MapPreviewDto[]>(`maps/`);
  }

  public getFollowedMaps(): Observable<MapPreviewDto[]> {
    return this.httpGet<MapPreviewDto[]>(`followed-maps/`);
  }

  public getMyPlaces(page: number): Observable<MyPlacesPageDto> {
    return this.httpGet<MyPlacesPageDto>(`places/`, {
      params: {
        page: '' + page,
        ordering: '-created'
      }
    });
  }

  public getFavoritePlaces(): Observable<PoiDto[]> {
    return this.httpGet<PoiDto[]>(`favorites/`);
  }

  public addPlaceToFavorites(geo_id: number): Observable<any> {
    return this.httpPost(`favorites/`, {
      geo: geo_id
    });
  }

  public removePlaceFromFavorites(geo_id: number): Observable<any> {
    return this.httpDelete(`favorites/${geo_id}/`);
  }

  public getNotificationSettings(): Observable<NotificationSettingsDto> {
    return this.httpGet<NotificationSettingsDto>(`notification-settings/`);
  }

  public patchNotificationSettings(notificationSetting: NotificationSettingsDto): Observable<NotificationSettingsDto> {
    return this.httpPatch<NotificationSettingsDto>(`notification-settings/`, notificationSetting);
  }

  protected url(path: string): string {
    return this.myUrl + path;
  }
}
