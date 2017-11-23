function Portal(options) {
	this.tile = options.tile;
	this.image = options.image;

	this.render = function (map) {
		var center = map.transformCoord(this.tile.i, this.tile.j);
		image(this.image, center.x, center.y);
	};

	this.update = function (map, player) {
		
	};
}