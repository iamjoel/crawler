var Crawler = require("crawler")

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // console.log(res.body)
            var $authors = $('.info')

            var authors = $authors.map(item => {
              var $item = $(item)
              console.log($item.text())
              var name = $item.find('.name').text()
              console.log(name)
              return {
                name,
              }
            })
            // console.log(authors)
        }
        done();
    }
})

c.queue('http://www.jianshu.com/users/EhUmA3/followers', {
  preRequest(){
    console.log('开始爬')
  }
})

