/**
 * Main entry point for the theme's JavaScript.
 * you must add any functions for every javascript file to the import statement below.
 */

import { Modals } from './functions/modals';
import ThemeSwiper from "./functions/Swiper";
import { postLike } from './functions/like';
import { comment } from './functions/comment';
import { PlyrLibs } from "./functions/plyr";
import { scrollToTop } from "./functions/scrollTop-btn";


Modals();
ThemeSwiper();
postLike();
comment();
PlyrLibs();
scrollToTop();