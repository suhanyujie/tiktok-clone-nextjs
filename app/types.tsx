import exp from 'constants';

export interface RandomUsers {
  id: string;
  name: string;
  nickName?: string;
  image: string;
}

export interface CropperDimensions {
  height?: number | null;
  width?: number | null;
  left?: number | null;
  top?: number | null;
}

export interface ShowErrorObject {
  type: string;
  message: string;
}

export interface PostWithProfile {
  id: string;
  user_id: string;
  video_url: string;
  text: string;
  created_at: string;
  profile: {
    user_id: string;
    name: string;
    image: string;
  };
}

export interface Like {
  id: string;
  user_id: string;
  post_id: string;
}

export interface Comment {
  id: string;
  user_id: string;
  post_id: string;
  text: string;
  created_at: string;
}

export interface UploadError {
  type: string;
  message: string;
}

export interface Post {
  id: string;
  user_id: string;
  video_url: string;
  text: string;
  created_at: string;
}

// Layout Include Types
export interface MenuItemTypes {
  iconString: string;
  colorString: string;
  sizeString: string;
}

export interface MenuItemFollowCompTypes {
  user: RandomUsers;
}

export interface ProfilePageTypes {
  params: {
    id: string;
  };
}

/////////////////////////////////////////////////////

// Component Types
export interface PostMainTypes {
  post: PostWithProfile;
}

export interface PostMainLikeTypes {
  post: PostWithProfile;
}

export interface PostUserCompTypes {
  post: Post;
}

export interface TextInputCompTypes {
  string: string;
  inputType: string;
  placeholder: string;
  onUpdate: (newValue: string) => void;
  error: string;
}
