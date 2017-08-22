(function($) {
	debugger;

	function Preload(imgs, options) {
		this.imgs = (typeof imgs === "string") ? [imgs] : imgs;
		this.options = $.extend({}, Preload.DEFAULTS, options)
		if (this.options.order === "unordered") {
			this._unordered();
		} else {
			this._ordered();
		}

	}
	Preload.DEFAULTS = {
		order: "unordered",
		each: null, //每加载一个图片完毕执行
		all: null //所有图片加载完毕后执行
	};
	Preload.prototype._ordered = function() {
		debugger;
		if (typeof src != "string") {
			return;
		}
		var count = 0,
			imgs = this.imgs,
			options = this.options;

		function load() {
			var imgObj = new Image();
			$(imgObj).on("load error", function() {
				options.each && options.each();
				if (count >= imgs.length - 1) {
					options.all && options.all();
				} else {
					load();
				}
			});
			imgObj.src = imgs[count];
			count++;
		}
	};
	Preload.prototype._unordered = function() {
		debugger;
		var count = 0,
			imgs = this.imgs,
			options = this.options;
		$.each(imgs, function(i, src) {
			if (typeof src != "string") {
				return;
			}
			var imgObj = new Image();
			$(imgObj).on("load error", function() {
				options.each && options.each(count);
				if (count >= imgs.length - 1) {
					options.all && options.all();
				}
				count++
			});
			imgObj.src = src;
		});
	};
	$.extend({
		preload: function(imgs, opts) {
			new Preload(imgs, opts);
		}
	})


})(jQuery);