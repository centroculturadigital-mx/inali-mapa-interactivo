import * as sapper from '@sapper/app';

sapper.start({
	target: !! document ? document.querySelector('#sapper') : null
});