import { Pipe, PipeTransform } from '@angular/core';
import { MapPreviewDto } from '../../core/dto/map-results.dto';

@Pipe({
  name: 'countNewActivities'
})
export class CountNewActivitiesPipe implements PipeTransform {
  public transform(entities: MapPreviewDto[], args?: any): any {
    return (
      entities &&
      entities.reduce((count, entity) => {
        return count + Number(entity && entity.meta && entity.meta.new_activities_count);
      }, 0)
    );
  }
}
