import { cssom, defineConfig, injectGlobal as ig, keyframes as kf, twind, tx } from '@twind/core';
import presetContainerQueries from '@twind/preset-container-queries';
import presetLineClamp from '@twind/preset-line-clamp';
import presetTailwind from '@twind/preset-tailwind';

/**
 * For further information, please visit:
 * https://twind.style/library-mode
 */
const twInstance = twind(
	defineConfig({
		presets: [presetContainerQueries(), presetLineClamp(), presetTailwind()]
	}),
	cssom('style[data-library]')
);

export const tw = tx.bind(twInstance);
export const injectGlobal = ig.bind(twInstance);
export const keyframes = kf.bind(twInstance);
