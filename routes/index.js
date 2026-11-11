// activate the express module
var express = require('express');
var router = express.Router();

/* get home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: '小原さやか | Web Developer',

    background: [
      'Webサイトの制作・改善を中心に、CMS、Webテクノロジー、データ分析など幅広い領域に取り組んでいます。',
      'HTML、CSS、JavaScriptをはじめ、Node.js、PHP、WordPressなどのWeb技術を活用し、Webサイトの構築からデータを活用した改善まで、幅広い視点で課題解決を目指しています。'
    ],

    backgroundImg: 'images/Home-video.mp4',

    Interests: [
      'Web開発',
      'CMS',
      'MarTech',
      'Web Analytics',
      'Data Analysis'
    ],

    Goals: [
      'Web開発、CMS、データ分析などの知識を組み合わせ、Webサイトの構築・運用・改善に幅広く携わっていきたいと考えています。'
    ],

    about: 'Web開発を中心に、CMSやデジタルテクノロジー、データ分析などの分野に取り組んでいます。カナダのGeorgian CollegeでInteractive Media Design – Webを専攻し、HTML、CSS、JavaScript、React、Node.js、PHPなどのWeb技術を学びました。また、オンタリオ州教育省でDrupalを使用したWeb関連業務を経験。現在はWebサイトの制作・運用に加え、GA4や広告データを活用した分析、ユーザー導線の改善にも取り組んでいます。技術とビジネスの両方の視点から、実用的な課題解決を目指しています。',

    skills: [
      { type: 'プログラミング言語', lang: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'JSON', 'SQL', 'WordPress', 'jQuery', '.Net', 'C#', 'PHP'] },
      { type: 'それ以外のウェブ関連スキル', lang: ['Express', 'RESTful API', 'MongoDB', 'Git', 'GitHub', 'Bootstrap', 'VSCode', 'Adobe Photoshop', 'Adobe Illustrator', 'Jira'] }
    ],
  
    resume: {
      education: [
        {
          school: 'Georgian College',
          location: 'カナダ（オンタリオ州）',
          major: 'Interactive Media Design - Web',
          MD:'Webサイトの企画・設計からフロントエンド・バックエンド開発までを網羅的に学習。HTML、CSS、JavaScript、React、Node.js、PHPを用いた実践的な実装スキルに加え、UI/UXデザインやデジタルメディア表現を総合的に習得しました。',
          year: '2022-2024'
        },
        {
          school: '東京女子大学',
          major: '現代教養学部人間科学科言語科学専攻',
          year: '2012-2016'
        }
      ],
       experiences: [
        {
          title: 'MarTech Developer（フリーランス）',
          location: '日本・カナダ / リモート',
          JD: 'Webサイトの企画・制作・運用に加え、GA4や広告データを活用したアクセス解析、タグマネジメント、ユーザー行動に基づく導線改善などを総合的にサポート。技術とマーケティングの両面から課題解決を行っています。',
          PSKills: ['HTML/CSS', 'JavaScript', 'WordPress', 'GA4', 'Google Tag Manager', 'Shopify', 'Data Analysis'],
          year: '2025-'
        },
{
          title: 'Web Development Assistant',
          location: 'カナダ（オンタリオ州）',
          JD: 'DrupalなどのCMSを用いたWebサイトの構築・保守を担当。アクセシビリティ基準に準拠したページの修正や、ユーザー導線を意識したレイアウトの改善、コンテンツ更新業務をサポートしました。',
           PSKills: ['HTML/CSS', 'JavaScript', 'Drupal'],
          year: '2023'
        }
 

      ]

    },
  contact: [
    {
      title: 'contact',
      email: 'Sayaka.ohara.work@gmail.com'
    }
  ]

  }); 
});   

module.exports = router;