<?php
if (!class_exists('cyn_general')) {
    class cyn_general
    {
        function __construct()
        {
        }

        public static function cyn_reading_time($id)
        {
            $content = get_post_field('post_content', $id);
            $word_count = str_word_count(strip_tags($content));
            $reading_time = ceil($word_count / 50);
            return $reading_time . ' Min';
        }
        public function category_info($post_id, $url_all, $taxonomy)
        {
            $current_post_cat_ids = [];
            foreach (get_the_category($post_id) as $cat) {
                array_push($current_post_cat_ids, $cat->term_id);
            }

            $categories = get_categories([
                'orderby' => 'id',
                'hide_empty' => false,
                'taxonomy' => $taxonomy
            ]);

            $categories_link = [];
            foreach ($categories as $cat) {
                array_push($categories_link, get_category_link($cat->term_id));
            }

            $info_categories = [
                [
                    'name' => 'All',
                    'link' => $url_all,
                    'in_category_exist' => true
                ]
            ];

            for ($i = 0; $i < count($categories); $i++) {
                array_push(
                    $info_categories,
                    [
                        'name' => $categories[$i]->name,
                        'link' => $categories_link[$i],
                        'in_category_exist' => in_array($categories[$i]->term_id, $current_post_cat_ids)
                    ]
                );
            }
            return $info_categories;
        }
    }
}
