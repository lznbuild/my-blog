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
   sidebar: [
      {
        title: 'Group 1',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ]
      }
    ]
  }
}