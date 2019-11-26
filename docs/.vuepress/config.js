module.exports = {
	title:"前端进阶博客",
	description:"lznbuld的练手博客",
	head:[
		['link',{rel:'icon',href:'/favicon.png'}]
	],
  themeConfig: {
    nav: [
        { text: '首页', link: '/' },
        { 
          text: '文章', 
          items:[
            { text: 'page1' , link:'/page1/'},
            { text: 'page2' , link:'/page2/'}
          ]
        },
        { text: '掘金', link: 'https://juejin.im/user/5b0f41de518825153a440dd9' }
      ],
  },
   sidebar: {
      '/page1/': [
        '',
        '软技能-代码之外的生存指南1（职业篇）',
        '软技能-代码之外的生存指南2（自我营销篇）',
        '软技能-代码之外的生存指南3（自我学习）',
        '软技能-代码之外的生存指南4（生产力）',
        '软技能-代码之外的生存指南5（理财）',
        '软技能-代码之外的生存指南6（健身）',
        '软技能-代码之外的生存指南7（精神）'
      ],
      '/page2/': ['']
    }
}