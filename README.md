# ポートフォリオ用 Web サイト

## 記事の変更

public/data.json の内容が画面に表示される要素になります。

### Name

一番上に表示される名前

### Description

ユーザーの説明

### Icon

アイコンの URL

### Links

様々なサービスのアカウントを共有できます。

```json
{
    "alt": "example",
    "url": "example.com"
}
```

#### 共有できるサービス一覧

##### アイコンが使えるもの

-   Twitter
-   Instagram
-   Facebook
-   Line
-   note
-   Youtube
-   Tiktok
-   niconico
-   Github
-   Qiita
-   Zenn

##### その他自由なリンクを貼れるもの

-   Blog

### article

テキストや画像、Youtube からの動画を表示できます

```json
{
    "image": "",
    "movie": "",
    "title": "",
    "article": "",
    "margin": ""
}
```

image と movie には url を貼ってください  
title と article にはテキストが入力できます

また記事同士にスペースが欲しい場合には margin を設定してください  
**margin を設定する場合、他の欄には何も記入しないでください**

margin の広さは以下の 3 つから選んで入力してください

| テキスト | サイズ |
| -------- | ------ |
| absent   | 小     |
| low      | 中     |
| high     | 大     |

## テスト

`yarn install`  
`yarn start`
