
	window.onload = function () {

		//简化获取对象操作	
		function $(_id) {
			return document.getElementById(_id);
		}

		var div = $('nav').getElementsByTagName('div');
		

		//事件委托
		

		$('nav').onclick = function (e) {

			e = e || window.event;

			var currObj = e.target || e.srcElement;

			//除去所有外边框
			for(var i = 0;i < div.length;i ++){
				div[i].style.outline = 'none';
			}

			if (currObj.className == 'images1'){

				$('content').innerHTML = '<h1>头脑特工队 Inside Out <span>(2015)</span></h1><br><p>导演：<a href="javascript:void(0)">彼特•道格特 / 罗纳尔多•德尔•卡门</a></p><br><p>评分：<img src="images/star1.png" alt=""><img src="images/star1.png" alt=""><img src="images/star1.png" alt=""></p><br><h2>剧情简介......</h2><br><p class="size1">可爱的小女孩莱莉出生在明尼苏达州一个平凡的家庭中，从小她在父母的呵护下长大，脑海中保存着无数美好甜蜜的回忆。当然这些记忆还与几个莱莉未曾谋面的伙伴息息相关，他们就是人类的五种主要情绪：乐乐、忧忧、怕怕、厌厌和怒怒。</p>'
				div[0].style.outline = '5px solid yellow';
			}

			if (currObj.className == 'images2'){

				$('content').innerHTML = '<h1>机器人瓦力 WALL•E <span>(2008)</span></h1><br><p>导演：<a href="javascript:void(0)">安德鲁•斯坦顿</a></p><br><p>评分：<img src="images/star1.png" alt=""><img src="images/star1.png" alt=""><img src="images/star1.png" alt=""></p><br><h2>剧情简介......</h2><br><p class="size1">公元2805年，人类文明高度发展，却因污染和生活垃圾大量增加使得地球不再适于人类居住。地球人被迫乘坐飞船离开故乡，进行一次漫长无边的宇宙之旅。临行前他们委托Buynlarge的公司对地球垃圾进行清理，该公司开发了名为WALL•E 的机器人担当此重任。</p>'
				div[1].style.outline = '5px solid yellow';
			}

			if (currObj.className == 'images3'){

				$('content').innerHTML = '<h1>驯龙高手 How to Train Your Dragon<span>(2010)</span></h1><br><p>导演：<a href="javascript:void(0)">迪恩•德布洛斯 / 克里斯•桑德斯</a></p><br><p>评分：<img src="images/star1.png" alt=""><img src="images/star1.png" alt=""><img src="images/star1.png" alt=""></p><br><h2>剧情简介......</h2><br><p class="size1">维京岛国的少年小嗝嗝是部落统领伟大的斯托里克的儿子，他非常想像自己的父亲一样亲手屠龙——这些飞龙是岛上维京人放牧羊群的主要天敌——但他每次出现在部落屠龙的战斗中都只给大家徒增烦恼。</p>'
				div[2].style.outline = '5px solid yellow';
			}

			if (currObj.className == 'images4'){

				$('content').innerHTML = '<h1>美食总动员 Ratatouille <span>(2007)</span></h1><br><p>导演：<a href="javascript:void(0)">布拉德•伯德 / 简•皮克瓦</a></p><br><p>评分：<img src="images/star1.png" alt=""><img src="images/star1.png" alt=""><img src="images/star1.png" alt=""></p><br><h2>剧情简介......</h2><br><p class="size1">小老鼠雷米在嗅觉方面有着无与伦比的天赋，不想过与垃圾堆为伴的生活，心怀成为五星大厨的梦想。一个偶然的机会，他认识了古斯特餐厅的学徒林奎尼，这个倒霉的学徒生性害羞，在厨艺上更是没有什么天赋，并且遭到餐厅大厨的排挤，即将被解雇。这一人一鼠结成了奇特的联盟：雷米奉献自己极富创造力的大脑。操作林奎尼前台“表演”。</p>'
				div[3].style.outline = '5px solid yellow';
			}
		}
		

	}