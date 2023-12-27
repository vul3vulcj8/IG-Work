import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Friend = {
  id: number;
  location: string;
  account: string;
  isFollowing: boolean;
  avatar: string;
};

type friendState = {
  friends: Friend[];
};

const initialState: friendState = {
  friends: [
    {
      id: 1,
      location: "France",
      account: "max_890",
      isFollowing: true,
      avatar: "images/avatars/a11.png",
    },
    {
      id: 2,
      location: "Canada",
      account: "5680-@vijdk",
      isFollowing: true,
      avatar: "images/avatars/a12.png",
    },
    {
      id: 3,
      location: "New Zealand",
      account: "joankgb*dh",
      isFollowing: true,
      avatar: "images/avatars/a13.png",
    },
    {
      id: 4,
      location: "Russian Federation",
      account: "lisa_3246",
      isFollowing: true,
      avatar: "images/avatars/a14.png",
    },

    {
      id: 5,
      location: "Japan",
      account: "Dazai_leco",
      isFollowing: true,
      avatar: "images/avatars/a15.png",
    },
    {
      id: 6,

      location: "Denmark",
      account: "alex_3909",
      isFollowing: true,
      avatar: "images/avatars/a16.png",
    },
    {
      id: 7,
      location: "Singapore",
      account: "keisnv_23349",
      isFollowing: true,
      avatar: "images/avatars/a17.png",
    },
    {
      id: 8,
      location: "Germany",
      account: "goems_macleci",
      isFollowing: true,
      avatar: "images/avatars/a18.png",
    },
    {
      id: 9,
      location: "China",
      account: "chenleming345",
      isFollowing: true,
      avatar: "images/avatars/a19.png",
    },
    {
      id: 10,
      location: "Taiwan",
      account: "girl_Q520",
      isFollowing: true,
      avatar: "images/avatars/a20.png",
    },
  ],
};

export const friendSlice = createSlice({
  name: "friendsList",
  initialState,
  reducers: {
    follow: (state, action: PayloadAction<number>) => {
      const friends = state.friends;
      for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.id === action.payload) {
          friend.isFollowing = true;
        }
      }
    },
    unFollow: (state, action: PayloadAction<number>) => {
      const friends = state.friends;
      for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.id === action.payload) {
          friend.isFollowing = false;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { follow, unFollow } = friendSlice.actions;

export default friendSlice.reducer;
