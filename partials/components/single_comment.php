<div>
    <!-- Comment Count -->
    <div class="flex flex-col gap-1">

        <div class="text-primary-0">
            <?php echo get_comments_number() . '&nbsp' . '&nbsp' .  'دیدگاه' ?>
        </div>

        <div class="text-primary-50"><?php _e('شماهم توی این بحث شرکت کنید', 'cyn-dm') ?></div>
    </div>

    <!-- Comment Form -->
    <div class="max-lg:order-2">
        <?php comments_template(); ?>
    </div>

</div>