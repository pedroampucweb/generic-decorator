//import { CreateVideoDto } from './../dto/create-video.dto';

export class Video {
  public video_url: string;
  public video_title: string;
  public video_duration: string;
  public video_thumbnail: string;
  public video_embed_id: string;
  public video_supply_id: string;
  public video_source: string;
  public video_total_views: number;
  public video_thumbs_up: number;
  public video_thumbs_down: number;
  public video_id?: string;
  public is_deleted?: boolean;
  public readonly created_at?: Date;
  public readonly updated_at?: Date;
  constructor(
    video_url: string,
    video_title: string,
    video_duration: string,
    video_thumbnail: string,
    video_embed_id: string,
    video_supply_id: string,
    video_source: string,
    video_total_views: number,
    video_thumbs_up: number,
    video_thumbs_down: number,
    video_id?: string,
    is_deleted?: boolean,
    created_at?: Date,
    updated_at?: Date,
  ) {
    this.video_url = video_url;
    this.video_title = video_title;
    this.video_duration = video_duration;
    this.video_thumbnail = video_thumbnail;
    this.video_embed_id = video_embed_id;
    this.video_supply_id = video_supply_id;
    this.video_source = video_source;
    this.video_total_views - video_total_views;
    this.video_thumbs_up = video_thumbs_up;
    this.video_thumbs_down = video_thumbs_down;
    this.video_id = video_id;
    this.is_deleted = is_deleted;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  public static createVideoEntity(video: Video): Video {
    return new Video(
      video.video_url,
      video.video_title,
      video.video_duration,
      video.video_thumbnail,
      video.video_embed_id,
      video.video_supply_id,
      video.video_source,
      video.video_total_views,
      video.video_thumbs_up,
      video.video_thumbs_down,
      video.video_id || undefined,
      video.is_deleted || undefined,
      video.created_at || undefined,
      video.updated_at || undefined,
    );
  }

  public static getClassName() {
    return 'Video';
  }

  addVideoView() {
    this.video_total_views += this.video_total_views;
  }

  /**
   * @description 0 = thumbs_down, 1 = thumbs_up
   * @param action
   */
  addThumbsTotal(action: number) {
    if (action == 1) {
      this.video_thumbs_up += this.video_thumbs_up;
    } else {
      this.video_thumbs_down -= this.video_thumbs_down;
    }
  }
}
