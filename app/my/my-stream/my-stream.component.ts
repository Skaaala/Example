import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AllFeedActivityTypeDto } from '../../core/dto/feed-activity.dto';
import { MediaAlias } from '../../core/mobile/media-alias';
import { MobileService } from '../../core/mobile/mobile.service';
import { AppState } from '../../core/store/app.state';
import { UserFeedAction } from '../../core/store/user-feed/user-feed.action';
import {
  selectUserFeedItems,
  selectUserFeedLoading,
  selectUserFeedNoMorePages
} from '../../core/store/user-feed/user-feed.state';
import { TranslatePipe } from '../../pipes/translate/translate.pipe';
import { MetaTitleTags } from '../../services/meta-title-tags/metaTitleTags.service';
import { FeedCardCommentAction } from '../../shared/feed-card/feed-card-comment.type';
import {
  FeedCardAddLikeEvent,
  FeedCardLikeAction,
  FeedCardRemoveLikeEvent
} from '../../shared/feed-card/feed-card-like.type';
import { FeedEventCommentActivity, FeedEventLikeActivity } from '../../shared/feed/feed.component';

@Component({
  selector: 'my-stream',
  templateUrl: './my-stream.component.html',
  styleUrls: ['./my-stream.component.scss']
})
export class MyStreamComponent implements OnInit {
  feedActivities$: Observable<AllFeedActivityTypeDto[]>;
  feedLoading$: Observable<boolean>;
  feedNoMorePages$: Observable<boolean>;

  public mobile$: Observable<boolean>;

  constructor(
    private metaTitleTags: MetaTitleTags,
    private mobileService: MobileService,
    private store$: Store<AppState>,
    private translate: TranslatePipe
  ) {}

  ngOnInit() {
    this.store$.dispatch(new UserFeedAction.GetFirstPage());

    this.feedActivities$ = this.store$.select(selectUserFeedItems);
    this.feedLoading$ = this.store$.select(selectUserFeedLoading);
    this.feedNoMorePages$ = this.store$.select(selectUserFeedNoMorePages);

    this.mobile$ = this.mobileService.observeMobile(MediaAlias.XS, MediaAlias.SM, MediaAlias.MD);

    this.setTitle();
  }

  private setTitle() {
    const titlePrefix = this.translate.transform('front_title_my', 'My');
    this.metaTitleTags.setTitle(titlePrefix);
  }

  onScroll() {
    this.store$.dispatch(new UserFeedAction.GetNextPage());
  }

  onCommentAction(data: FeedEventCommentActivity) {
    if (data.event.type === FeedCardCommentAction.ADD) {
      this.store$.dispatch(
        new UserFeedAction.AddActivityComment({
          activityId: data.activity['@id'],
          text: data.event.text,
          onSuccess: data.event.onSuccess,
          onFailure: data.event.onFailure
        })
      );
    } else if (data.event.type === FeedCardCommentAction.DELETE) {
      this.store$.dispatch(
        new UserFeedAction.DeleteActivityComment({
          activityId: data.activity['@id'],
          commentId: data.event.commentId
        })
      );
    }
  }

  onLikeAction(data: FeedEventLikeActivity) {
    if (data.event.type === FeedCardLikeAction.LIKE) {
      const event = data.event as FeedCardAddLikeEvent;
      this.store$.dispatch(
        new UserFeedAction.LikeActivity({
          activityId: data.activity['@id'],
          onSuccess: event.onSuccess,
          onFailure: event.onFailure
        })
      );
    }
    if (data.event.type === FeedCardLikeAction.REMOVE_LIKE) {
      const event = data.event as FeedCardRemoveLikeEvent;
      this.store$.dispatch(
        new UserFeedAction.RemoveLikeActivity({
          activityId: data.activity['@id'],
          likeId: event.likeId,
          onSuccess: event.onSuccess,
          onFailure: event.onFailure
        })
      );
    }
  }
}
