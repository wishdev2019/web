//引入mockjs
const Mock = require('mockjs')
//使用mockjs模拟数据
Mock.mock('/api/data',{
  'foods|10-50': [{
    'name': "@ctitle(2,10)",
    "img": "@image('600x600',#b7ef7c)",
    "brief": "@csentence(1,50)",
    "price|0-20.0-2": 1,
    "num": 0,
    "minusFlag": true,
    "time": "@time",
    "peisongfei|0-100.0-2": 1,
    "limit|0-50": 1
  }]
});
Mock.mock('/api/ceshi',{'name':'@upper("hello")'});
Mock.mock('/api/fruit',{
  'list|5':[
        {
            'id':1,
            'name':'苹果'
        }
    ]})
Mock.mock('/api/getCsData',{
        'list|5':  [{
              //属性值自动加1,后面1是初始值
              'id|+1':  1,
              //测试这个词语 重复随机次数：最大9次，最小重复2次
              'name|2-9': '测试',
              'phone|11': '1',
              //生成200到1000以内随机的整数
              'point|200-1000':0,
              //生成整数部分大于等于3000，小于等于8000，max小数部分保留2位的数据
              'money|3000-8000.2':0,
              //整数部分大于等于3000小于等于8000，max小数部分随机保留2到4位的小数
              'money2|1000-2000.2-4':0,
              //随机生成布尔值，默认为ture,为true概率：1/2
              'status|1':true,
              'default|1‐3':true,
              //2的意思是从后面对象中随机选取2个属性进行展示
              'detail|2':{'id|+1':1,'date':'@date("yyyy-MM-dd")','content':'记录'}
        }]
  })
Mock.setup({
  timeout: 2000//请求两秒后才加载数据
});