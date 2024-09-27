export interface MenuItemTypes {
  iconString: string;
  colorString: string;
  sizeString: string;
}

export interface MenuItemFollowCompTypes {
  user: RandomUsers;
}

export interface RandomUsers {
  id: string;
  name: string;
  nickName?: string;
  image: string;
}
