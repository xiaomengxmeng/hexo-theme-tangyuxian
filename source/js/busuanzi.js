var bszCaller = {
  fetch: function (u, c) {
    var n = 'bszCallback_' + Math.floor(1099511627776 * Math.random());
    window[n] = function (d) {
      try { c(d) }
      catch (e) { console.error('处理统计数据时出错:', e) }
      finally {
        var s = document.getElementById(n);
        s && s.parentNode.removeChild(s);
        delete window[n]
      }
    };
    var f = u.replace('=bszCallback', '=' + n),
        s = document.createElement('script');
    s.id = n;
    s.src = f;
    s.type = 'text/javascript';
    s.defer = true;
    document.getElementsByTagName('head')[0].appendChild(s)
  }
};

var bszTag = {
  bszs: ['site_pv', 'page_pv', 'site_uv', 'today_pv', 'today_uv'],
  texts: function (d) {
    d.message ? this.a(d.message) : this.b(d)
  },
  a: function (m) {
    this.bszs.forEach(function (t) {
      var e = document.getElementById('busuanzi_' + t);
      e && (e.innerHTML = m)
    })
  },
  b: function (d) {
    this.bszs.forEach(function (t) {
      var e = document.getElementById('busuanzi_' + t);
      e && (e.innerHTML = d[t])
    })
  }
};

// 使用本地存储实现访问数据更新
window.addEventListener('DOMContentLoaded', function() {
  // 获取当前日期，用于区分今天的数据
  var today = new Date().toISOString().split('T')[0];
  
  // 从本地存储获取数据，如果不存在则初始化
  var storage = localStorage.getItem('busuanzi_data');
  var data = storage ? JSON.parse(storage) : {
    site_pv: 0,
    site_uv: 0,
    today: {
      date: today,
      pv: 0,
      uv: 0
    },
    pages: {}
  };
  
  // 检查是否是今天的第一个访问
  if (data.today.date !== today) {
    data.today = {
      date: today,
      pv: 0,
      uv: 0
    };
  }
  
  // 检查是否是新访客（简单实现：每天刷新）
  var isNewVisitor = !localStorage.getItem('busuanzi_visitor_' + today);
  
  // 更新数据
  data.site_pv += 1;
  data.today.pv += 1;
  
  if (isNewVisitor) {
    data.site_uv += 1;
    data.today.uv += 1;
    localStorage.setItem('busuanzi_visitor_' + today, '1');
  }
  
  // 更新页面访问量
  var currentPage = window.location.pathname;
  if (!data.pages[currentPage]) {
    data.pages[currentPage] = 0;
  }
  data.pages[currentPage] += 1;
  
  // 保存更新后的数据
  localStorage.setItem('busuanzi_data', JSON.stringify(data));
  
  // 格式化显示数据
  var displayData = {
    site_pv: data.site_pv.toLocaleString(),
    page_pv: data.pages[currentPage].toLocaleString(),
    site_uv: data.site_uv.toLocaleString(),
    today_pv: data.today.pv.toLocaleString(),
    today_uv: data.today.uv.toLocaleString()
  };
  
  // 显示数据
  bszTag.texts(displayData);
});