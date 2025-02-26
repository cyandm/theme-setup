<?php
use Cyan\Theme\Helpers\Icon;
function enqueue_scroll_to_top_script() {
    wp_enqueue_script('scroll-to-top', get_template_directory_uri() . '../../assets/js/functions/scrollToTop.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_scroll_to_top_script');
?>

<div class="justify-center">
    
    <button id="scrollToTopButton" class="flex flex-col justify-center items-center text-center bg-gray-900 text-white font-bold p-3 rounded-3xl shadow-lg transition duration-300">
        
        <span class="size-8 -rotate-90 text-white">
            <?php Icon::print('Arrow,-Forward') ?>
        </span>

        <div>
            <?php _e('برگردبالا', 'cyan-dm') ?>
        </div>

    </button>
</div>