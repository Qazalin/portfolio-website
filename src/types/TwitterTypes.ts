export interface UserTweets {
  data: Tweet[];
  includes: Includes;
  meta: Meta;
}

export interface Tweet {
  text: string;
  created_at: string;
  id: string;
  attachments?: Attachments;
}

export interface Attachments {
  media_keys: string[];
}

export interface Includes {
  media: Medum[];
}

export interface Medum {
  media_key: string;
  type: string;
  url: string;
}

export interface Meta {
  result_count: number;
  newest_id: string;
  oldest_id: string;
  next_token: string;
}
