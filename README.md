<<<<<<< HEAD
# 🚀 Portfolio Website (Node.js & Express)

小原さやか（Sayaka Ohara）のパーソナルポートフォリオサイトです。
サイトURL:https://node-portfolio-cyan.vercel.app/

技術力だけでなく、GA4やMarTech、データ分析といったビジネス・マーケティング寄りの視点を掛け合わせた課題解決力をアピールする設計になっています。

---

## 🛠 Tech Stack (使用技術)

- **Backend:** Node.js, Express
- **Template Engine:** Handlebars (HBS)
- **Frontend Framework:** Bootstrap 5
- **Icons & Styling:** Font Awesome, Custom CSS (Blur-effect cards, Smooth scrolling)
- **Deployment / Tools:** Git, GitHub, VS Code

---

## ✨ Features (主な特徴)

- **Smooth Anchor Navigation:** ヘッダーのリンクをクリックするだけで、About Me, Skills, Resume, Contact の各セクションへ滑らかにスクロール移動。
- **Glassmorphism Design:** 背景に溶け込む半透明のブラーエフェクト（すりガラス調）カードを採用し、視認性とデザイン性を両立。
- **Structured Data Binding:** Expressのルーティング側で一元管理された `resume`（学歴・経歴データ）や `skills` をHandlebarsで動的にレンダリング。
- **Mobile Responsive:** Bootstrap 5のグリッドシステムを活用し、スマートフォンやタブレットなどあらゆるデバイスで美しく表示。

---

## 📁 Project Structure (ディレクトリ構成)

```text
=======
🚀 Portfolio Website (Node.js & Express)
小原さやか（Sayaka Ohara）のパーソナルポートフォリオサイトです。 

技術力だけでなく、GA4やMarTech、データ分析といったビジネス・マーケティング寄りの視点を掛け合わせた課題解決力をアピールする設計になっています。

🛠 Tech Stack (使用技術)
Backend: Node.js, Express
Template Engine: Handlebars (HBS)
Frontend Framework: Bootstrap 5
Icons & Styling: Font Awesome, Custom CSS (Blur-effect cards, Smooth scrolling)
Deployment / Tools: Git, GitHub, VS Code
✨ Features (主な特徴)
Smooth Anchor Navigation: ヘッダーのリンクをクリックするだけで、About Me, Skills, Resume, Contact の各セクションへ滑らかにスクロール移動。
Glassmorphism Design: 背景に溶け込む半透明のブラーエフェクト（すりガラス調）カードを採用し、視認性とデザイン性を両立。
Structured Data Binding: Expressのルーティング側で一元管理された resume（学歴・経歴データ）や skills をHandlebarsで動的にレンダリング。
Mobile Responsive: Bootstrap 5のグリッドシステムを活用し、スマートフォンやタブレットなどあらゆるデバイスで美しく表示。
📁 Project Structure (ディレクトリ構成)
>>>>>>> a73ac48 (fixed json)
my-portfolio/
├── public/
│   ├── stylesheets/
│   │   └── style.css       # カスタムスタイル（スクロール、カードデザイン等）
│   └── javascripts/
│       └── bootstrap.min.js
├── routes/
│   └── index.js            # ルーティングおよび表示データ（resume, skills等）の設定
├── views/
│   ├── layout.hbs          # 共通レイアウト（Header, Footer, Headタグ）
│   └── index.hbs           # メインのワンページコンテンツ
├── app.js                  # アプリケーションのエントリーポイント
<<<<<<< HEAD
└── package.json
=======
└── package.json
>>>>>>> a73ac48 (fixed json)
