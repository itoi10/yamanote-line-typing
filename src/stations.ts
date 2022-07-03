export type Station = {
  id: string;
  name: string;
  hiragana: string;
  ryaku?: string;
  romaji: string;
  transfers?: string[];
  boundFor: string;
};

export const stations: Station[] = [
  {
    id: "01",
    name: "東京",
    hiragana: "とうきょう",
    ryaku: "TYO",
    romaji: "tokyo",
    transfers: [
      "🚄東北・山形・秋田・北海道・上越・北陸新幹線",
      "🚄東海道・山陽新幹線",
      "🟧中央線",
      "🟧東海道線",
      "🟧上野東京ライン",
      "🟦横須賀線",
      "🟦総武快速線",
      "🟥京葉線",
      "🔴丸ノ内線",
    ],
    boundFor: "上野･池袋",
  },
  {
    id: "02",
    name: "神田",
    hiragana: "かんだ",
    ryaku: "KND",
    romaji: "kanda",
    transfers: ["🟧中央線", "🟠銀座線"],
    boundFor: "上野･池袋",
  },
  {
    id: "03",
    name: "秋葉原",
    hiragana: "あきはばら",
    ryaku: "AKB",
    romaji: "akihabara",
    transfers: ["🟨総武線各駅停車", "⬛️つくばエクスプレス線", "⚪️日比谷線"],
    boundFor: "上野･池袋",
  },
  {
    id: "04",
    name: "御徒町",
    hiragana: "おかちまち",
    romaji: "okachimachi",
    transfers: ["🟣都営大江戸線"],
    boundFor: "上野･池袋",
  },
  {
    id: "05",
    name: "上野",
    hiragana: "うえの",
    ryaku: "UEN",
    romaji: "ueno",
    transfers: [
      "🚄東北・山形・秋田・北海道・上越・北陸新幹線",
      "🟧宇都宮線(東北線)",
      "🟧高崎線",
      "🟩常磐線",
      "⬛️京成線",
      "🟠銀座線",
      "⚪️日比谷線",
    ],
    boundFor: "池袋･新宿",
  },
  {
    id: "06",
    name: "鶯谷",
    hiragana: "うぐいすだに",
    romaji: "uguisudani",
    boundFor: "池袋･新宿",
  },
  {
    id: "07",
    name: "日暮里",
    hiragana: "にっぽり",
    ryaku: "NPR",
    romaji: "nippori",
    transfers: ["🟩常磐線", "⬛️京成線", "⬛️日暮里・舎人ライナー"],
    boundFor: "池袋･新宿",
  },
  {
    id: "08",
    name: "西日暮里",
    hiragana: "にしにっぽり",
    romaji: "nishinippori",
    transfers: ["⬛️日暮里・舎人ライナー", "🟢千代田線"],
    boundFor: "池袋･新宿",
  },
  {
    id: "09",
    name: "田端",
    hiragana: "たばた",
    romaji: "tabata",
    transfers: ["🟦京浜東北線"],
    boundFor: "池袋･新宿",
  },
  {
    id: "10",
    name: "駒込",
    hiragana: "こまごめ",
    romaji: "komagome",
    transfers: ["🟢南北線"],
    boundFor: "池袋･新宿",
  },
  {
    id: "11",
    name: "巣鴨",
    hiragana: "すがも",
    romaji: "sugamo",
    transfers: ["🔵都営三田線"],
    boundFor: "池袋･新宿",
  },
  {
    id: "12",
    name: "大塚",
    hiragana: "おおつか",
    romaji: "otsuka",
    transfers: ["⬛️都電荒川線"],
    boundFor: "池袋･新宿",
  },
  {
    id: "13",
    name: "池袋",
    hiragana: "いけぶくろ",
    ryaku: "IKB",
    romaji: "ikebukuro",
    transfers: [
      "🟥湘南新宿ライン",
      "🟩埼京線",
      "⬛️東武東上線",
      "⬛️西武池袋線",
      "🔴丸ノ内線",
      "🟡有楽町線",
      "🟤副都心線",
    ],
    boundFor: "新宿･渋谷",
  },
  {
    id: "14",
    name: "目白",
    hiragana: "めじろ",
    romaji: "mejiro",
    boundFor: "新宿･渋谷",
  },
  {
    id: "15",
    name: "高田馬場",
    hiragana: "たかだのばば",
    romaji: "takadanobaba",
    transfers: ["⬛️西武新宿線", "🔵東西線"],
    boundFor: "新宿･渋谷",
  },
  {
    id: "16",
    name: "新大久保",
    hiragana: "しんおおくぼ",
    romaji: "shinokubo",
    boundFor: "新宿･渋谷",
  },
  {
    id: "17",
    name: "新宿",
    hiragana: "しんじゅく",
    ryaku: "SJK",
    romaji: "shinjuku",
    transfers: [
      "🟧中央線",
      "🟨中央線各駅停車",
      "🟥湘南新宿ライン",
      "🟩埼京線",
      "⬛️小田急線",
      "⬛️京王線",
      "🔴丸ノ内線",
      "🟢都営新宿線",
      "🟣都営大江戸線",
    ],
    boundFor: "渋谷･品川",
  },
  {
    id: "18",
    name: "代々木",
    hiragana: "よよぎ",
    romaji: "yoyogi",
    transfers: ["🟣都営大江戸線"],
    boundFor: "渋谷･品川",
  },
  {
    id: "19",
    name: "原宿",
    hiragana: "はらじゅく",
    romaji: "harajuku",
    transfers: ["🟢千代田線", "🟤副都心線"],
    boundFor: "渋谷･品川",
  },
  {
    id: "20",
    name: "渋谷",
    hiragana: "しぶや",
    ryaku: "SBY",
    romaji: "shibuya",
    transfers: [
      "🟥湘南新宿ライン",
      "🟩埼京線",
      "⬛️東急東横線",
      "⬛️東急田園都市線",
      "⬛️京王井の頭線",
      "🟠銀座線",
      "🟣半蔵門線",
      "🟤副都心線",
    ],
    boundFor: "品川･東京",
  },
  {
    id: "21",
    name: "恵比寿",
    hiragana: "えびす",
    ryaku: "EBS",
    romaji: "ebisu",
    transfers: ["🟥湘南新宿ライン", "⚪️日比谷線"],
    boundFor: "品川･東京",
  },
  {
    id: "22",
    name: "目黒",
    hiragana: "めぐろ",
    romaji: "meguro",
    transfers: ["⬛️東急目黒線", "🟢南北線", "🔵都営三田線"],
    boundFor: "品川･東京",
  },
  {
    id: "23",
    name: "五反田",
    hiragana: "ごたんだ",
    romaji: "gotanda",
    transfers: ["⬛️東急池上線", "🟣都営浅草線"],
    boundFor: "品川･東京",
  },
  {
    id: "24",
    name: "大崎",
    hiragana: "おおさき",
    ryaku: "OSK",
    romaji: "osaki",
    transfers: ["🟥湘南新宿ライン", "⬛️相鉄線直通", "🔵りんかい線"],
    boundFor: "品川･東京",
  },
  {
    id: "25",
    name: "品川",
    hiragana: "しながわ",
    ryaku: "SGW",
    romaji: "shinagawa",
    transfers: [
      "🚄東海道・山陽新幹線",
      "🟦京浜東北線(大井町・蒲田方面)",
      "🟧東海道線",
      "上野東京ライン",
      "🟦横須賀線",
      "⬛️京急線",
    ],
    boundFor: "東京･上野",
  },
  {
    id: "26",
    name: "高輪ｹﾞｰﾄｳｪｲ",
    hiragana: "たかなわげーとうぇい",
    romaji: "takanawagateway",
    boundFor: "東京･上野",
  },
  {
    id: "27",
    name: "田町",
    hiragana: "たまち",
    romaji: "tamachi",
    transfers: ["🟦京浜東北線"],
    boundFor: "東京･上野",
  },
  {
    id: "28",
    name: "浜松町",
    hiragana: "はままつちょう",
    ryaku: "HMC",
    romaji: "hamamatsucho",
    transfers: ["🟦東京モノレール羽田空港線", "🟣都営大江戸線"],
    boundFor: "東京･上野",
  },
  {
    id: "29",
    name: "新橋",
    hiragana: "しんばし",
    ryaku: "SMB",
    romaji: "shimbashi",
    transfers: ["🟠銀座線", "🟣都営浅草線", "⬛️ゆりかもめ"],
    boundFor: "東京･上野",
  },
  {
    id: "30",
    name: "有楽町",
    hiragana: "ゆうらくちょう",
    romaji: "yurakucho",
    transfers: ["⚪️日比谷線", "🟡有楽町線"],
    boundFor: "東京･上野",
  },
];
