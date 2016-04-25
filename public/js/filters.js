'use strict';

expressNode.filters('',function () {
	return function(duration){
		switch(duration){
			case 1: return 'Half Hour';
			case 2: return '1 Hour';
		}
	}
	// body...
})