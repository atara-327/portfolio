---
title: "依澄しあ 歌検索"
date: 2025-10-20
isPublished: true
tags: ["Vue", "Bootstrap", "IFrame Player API"]
thumbnail: "/thumbnail/sia-songs.webp"
---

# 概要
VTuberの依澄しあさんの歌枠配信で歌った歌を、簡単に再生できるサイト。  
ちゃんと公開するサイトとして作ったのはこれが初めて。

# 技術スタック
- フロントエンド: Vue, Bootstrap
- バックエンド： DRF
- データベース: SQLite
- ルーティング: Traefik
- デプロイ: Docker, Xserver
- その他： IFrame Player API

# 感想
公開するサイトなので、セキュリティ周りも少し意識した。
OWASP ZAPを使用して脆弱性診断を行い、いくつかの脆弱性を修正した。  
サイトのデザインは、考えに考えたのだがいい感じにならなかった。最低限使えるデザインではある。  
ほぼ自分用のサイトだが、なかなかいいものができたと思う。  
キューの追加はAIに任せたが、ほぼそれだけで機能が完成したので、AIのすごさを感じた。  

# リンク
ぜひご利用ください！  

サイト： [依澄しあ 歌検索](https://sia-songs.ataraman.com)  
依澄しあYoutube： [依澄しあ / Isumi Sia Ch.](https://www.youtube.com/@sia_kurage)