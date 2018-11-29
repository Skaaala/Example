import { CategoryDto } from './category.dto';
import { ImageDto } from './image.dto';
import { MapPreviewDto } from './map-results.dto';
import { PageDto } from './page.dto';

export interface MyPlaceDto {
  id: number;
  slug: string;
  name: string;
  rating?: number;
  image?: ImageDto;
  category: CategoryDto;
  geomap: MapPreviewDto;
}

export type MyPlacesPageDto = PageDto<MyPlaceDto>;
