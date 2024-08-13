export interface Album {
  name: string;
  artist: string;
  cover: string;
  lyricId?: string
}

export const listenNowAlbums: Album[] = [
  {
    name: "愛にできることはまだあるかい",
    artist: "RADWIMPS",
    cover:
      "https://static-cse.canva.cn/blob/185951/175331.90200498_1000X1000.jpg",
    lyricId:'lyricOfAinideki',
    },
  {
    name: "紅蓮華",
    artist: "Lisa",
    cover:
      "https://www.sonymusic.co.jp/img/common/artist_image/73100000/73100441/images/HP_sample_LiSA_another_jacket.jpg",
  
      lyricId:'lyricOfGurenge'  },
  {
    name: "スパークル",
    artist: "RADWIMPS",
    cover:
      "https://blog.hamibook.com.tw/wp-content/uploads/2021/09/iLOOK%E9%9B%BB%E5%BD%B1%E9%9B%9C%E8%AA%8C9%E6%9C%88%E8%99%9Fb01.jpg",
    lyricId:'lyricOfSpark'
  },
  {
    name: "心做し",
    artist: "majiko",
    cover:
      "https://p2.music.126.net/CJ7olt52TMdqvamN7EhkIQ==/7735064301958473.jpg",
    lyricId:'lyricOfKokoronashi'
  },
];

export const madeForYouAlbums: Album[] = [
  {
    name: "Thinking Components",
    artist: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
  },
  {
    name: "Functional Fury",
    artist: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
  },
  {
    name: "React Rendezvous",
    artist: "Ethan Byte",
    cover:
      "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",
  },
  {
    name: "Stateful Symphony",
    artist: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
  },
  {
    name: "Async Awakenings",
    artist: "Nina Netcode",
    cover:
      "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    name: "The Art of Reusability",
    artist: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
];
