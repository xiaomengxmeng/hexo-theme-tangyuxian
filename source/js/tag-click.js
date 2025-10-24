// 实现标签列表li元素整体点击跳转功能
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        // 获取所有标签列表项
        const tagItems = document.querySelectorAll('.tag-list li.tag-list-item');
        
        tagItems.forEach(item => {
            // 找到当前li中的a标签
            const link = item.querySelector('a.tag-list-link');
            
            if (link) {
                // 为li添加点击事件
                item.addEventListener('click', function(e) {
                    // 如果点击的不是a标签本身，就触发a标签的点击
                    if (e.target !== link && !link.contains(e.target)) {
                        e.preventDefault();
                        window.location.href = link.getAttribute('href');
                    }
                });
            }
        });
    });
})();