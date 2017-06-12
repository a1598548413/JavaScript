window.onload = function() {

	// 轮播容器
	var container = document.getElementById('container');
	// 图片列表
	var list = document.getElementById('list');
	// 切换按钮组
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	// 左右箭头
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');

	// 单幅图片宽度
	var imageWidth = 600;
	// 图片数量
	var imageCount = list.getElementsByTagName('img').length;
	// 当前索引
	var currIndex = 0;

	// 左箭头单击事件
	prev.onclick = function() {

		// 索引递减
		currIndex --;

		if (currIndex < 0)
			currIndex = imageCount - 1;

		// 调用运动函数，传入偏移量
		animate(imageWidth);

		// 调用高亮函数
		highlight();				
	}

	// 右箭头单击事件
	next.onclick = function() {

		// 索引递增
		currIndex ++;

		if (currIndex > imageCount - 1)
			currIndex = 0;

		// 调用运动函数，传入偏移量
		animate(-imageWidth);

		// 调用高亮函数
		highlight();
	}

	// 遍历切换按钮
	for (var i = 0;i < buttons.length;i ++) {

		// 设置自定义属性
		buttons[i].setAttribute('index',i);

		// 按钮单击事件
		buttons[i].onclick = function() {

			// 返回自定义属性
			var index = this.getAttribute('index');

			// 调用运动函数，传入偏移量
			animate( (currIndex - index) * imageWidth );

			//记录当前索引
			currIndex = index;

			// 调用高亮函数
			highlight();
		}

	}

	/*
		运动函数，传入偏移量
	*/
	function animate(offset) {

		// 计算出新的位置
		var newLeft = parseInt(list.style.left) + offset;

		// 判断如果超过第一张，设置到最后一张
		if (newLeft > 0)
			newLeft = -(imageCount - 1) * imageWidth;

		// 判断如果超过最后一张，设置到第一张
		if (newLeft < -(imageCount - 1) * imageWidth)
			newLeft = 0;

		// 这是图片列表的新位置
		list.style.left = newLeft + 'px';
	}

	/*
		高亮函数
	*/
	function highlight() {

		// 去掉所有高亮
		for (var i = 0;i < buttons.length;i ++) {
			buttons[i].className = '';
		}

		// 当前按钮高亮
		buttons[currIndex].className = 'on';
	}

}