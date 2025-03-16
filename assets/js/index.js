/**
 * Main entry point for the theme's JavaScript.
 * you must add any functions for every javascript file to the import statement below.
 */

export const THEME_URI = `${window.location.origin}/wp-content/themes/cyandm.com/`;

import { circle } from './functions/circle';
import { comment } from './functions/comment';
import { postLike } from './functions/like';
import { Modals } from './functions/modals';
import { PlyrLibs } from './functions/plyr';
import { SinglePortfolio } from './functions/portfolio';
import Puzzle from './functions/puzzle';
import { scrollToTop } from './functions/scrollTop-btn';
import ThemeSwiper from './functions/Swiper';

Modals();
ThemeSwiper();
postLike();
comment();
PlyrLibs();
scrollToTop();
circle();
Puzzle();
SinglePortfolio();
