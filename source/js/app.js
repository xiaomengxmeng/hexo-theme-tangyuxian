// tabble gallery
document.querySelectorAll('table:has(img)').forEach(item => {
    item.classList.add('nexmoe-album');
});

// search
function search() {
    window.open(
        document.querySelector('#search_form').getAttribute('action_e')
			+ ' '
			+ document.querySelector('#search_value').value
    );
    return false;
}

// catalog
document.querySelectorAll('a.toc-link').forEach(item => {
    item.addEventListener('click', function(ev) {
        ev.preventDefault();
        const title = this.getAttribute('href');
        window.scroll({
            top: document.querySelector(decodeURI(title)).offsetTop - 24,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('copy', () => {
    if (!window.copyTip) {
        return;
    }
    const sel = document.getSelection();
    const ele = document.createElement('div');
    ele.innerHTML
		= '<div style="position: fixed;opacity: 0;white-space: pre;">'
		+ sel
		+ '\n\n'
		+ window.copyTip.replaceAll('%url', document.location.href)
		+ ' </div>';
    document.body.appendChild(ele);
    sel.selectAllChildren(ele);
    setTimeout(() => {
        document.body.removeChild(ele);
    });
});

function imgOnError(_this) {
    _this.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==';
    _this.onerror = null;
}

document
    .querySelectorAll('.nexmoe-post-cover.absolute')
    .forEach(item => {
        item.style.minHeight = item.childNodes[3].clientHeight + 'px';
    });

// 动态设置文章背景色与图片一致
function setDynamicArticleBackground() {
    // 检查是否在文章页面
    const article = document.querySelector('article');
    if (!article) return;
    
    // 查找文章中的第一张图片（优先封面图）
    let targetImage = document.querySelector('.nexmoe-post-cover img');
    if (!targetImage) {
        targetImage = article.querySelector('img');
    }
    
    if (!targetImage) return;
    
    // 创建Canvas用于提取图片颜色
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = function() {
        // 设置canvas尺寸为图片的1/10，提高性能
        const width = Math.floor(img.width / 10);
        const height = Math.floor(img.height / 10);
        canvas.width = width;
        canvas.height = height;
        
        // 绘制图片到canvas
        ctx.drawImage(img, 0, 0, width, height);
        
        // 获取像素数据
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;
        
        // 统计颜色（简单的取平均色）
        let r = 0, g = 0, b = 0;
        let pixelCount = 0;
        
        for (let i = 0; i < data.length; i += 4) {
            const alpha = data[i + 3];
            // 跳过透明像素
            if (alpha > 128) {
                r += data[i];
                g += data[i + 1];
                b += data[i + 2];
                pixelCount++;
            }
        }
        
        if (pixelCount > 0) {
            r = Math.floor(r / pixelCount);
            g = Math.floor(g / pixelCount);
            b = Math.floor(b / pixelCount);
            
            // 创建更浅的半透明背景色，降低透明度值
            const backgroundColor = `rgba(${r}, ${g}, ${b}, 0.03)`;
            const gradientColor1 = `rgba(${r}, ${g}, ${b}, 0.01)`;
            const gradientColor2 = `rgba(${r}, ${g}, ${b}, 0.05)`;
            
            // 应用更平滑的渐变背景到文章容器
            const articleContainer = article.closest('.nexmoe-post');
            if (articleContainer) {
                // 使用更丰富的渐变效果
                articleContainer.style.background = `linear-gradient(120deg, ${gradientColor1} 0%, ${gradientColor2} 50%, ${gradientColor1} 100%)`;
                articleContainer.style.transition = 'all 0.8s ease';
            }
            
            // 应用更浅的背景色到文章本身
            article.style.backgroundColor = backgroundColor;
            article.style.transition = 'all 0.8s ease';
        }
    };
    
    // 设置图片源
    img.src = targetImage.src;
}

window.onload = function() {
    // 动态设置文章背景色
    setDynamicArticleBackground();
    
    // 初始化lax动画库
    lax.init();

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', () => {
        return window.scrollY;
    });

    // Add animation bindings to elements
    lax.addElements('.backtop', {
        scrollY: {
            opacity: [
                ['screenHeight', 'screenHeight+300', 'screenHeight+600'],
                [0, 0, 1]
            ]
        }
    });

    lax.addElements('.nexmoe-post-cover', {
        scrollY: {
            opacity: [
                ['elInY', 'elInY+200'],
                [0, 1]
            ]
        }
    });
    
    // 为文章图片添加加载完成后的背景更新
    document.querySelectorAll('article img').forEach(img => {
        img.onload = function() {
            setDynamicArticleBackground();
        };
    });
};
