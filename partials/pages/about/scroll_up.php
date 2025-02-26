<?php

use Cyan\Theme\Helpers\Templates;

$family_video_id = get_field('likeAFamilyVideo');

if (is_null($family_video_id)) return;

$scrollUp_btn = Templates::getComponent('btn-scrollUp');

    echo ($scrollUp_btn) ?>