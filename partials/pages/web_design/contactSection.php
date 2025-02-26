<?php
$contactSection_title = get_field('contactSection_title');
$contactSection_description = get_field('contactSection_description');
$button_contact_text = get_field('button_contact_text');
$button_contact_url = get_field('bbutton_contact_url');

$contactSection = [];

for ($i = 1; $i < 7; $i++) {
    array_push(
        $contactSection,
        get_field("image_contactSection_$i")
    );
}
?>

<section class="flex flex-col gap-4 mt-8 container">
    <div class="flex flex-row md:justify-between md:mx-[40px] md:px-16 justify-evenly gap-5">
        <div class="">
            <?php echo wp_get_attachment_image($contactSection[0], 'full', false); ?></div>
        <div class="hidden md:flex flex-col gap-5 justify-center">
            <div class="flex flex-col gap-4">
                <div class="font-bold text-5xl flex items-center justify-center"><?php echo $contactSection_title ?>
                </div>
                <div class="flex items-center justify-center"><?php echo $contactSection_description ?></div>
            </div>
            <div class="flex justify-center">
                <a href="<?php echo $button_contact_url ?>"
                    class="flex items-center justify-center mt-8 border border-yellow-500 py-2 rounded-[40px] w-1/3"><?php echo $button_contact_text ?></a>
            </div>
        </div>

        <div class="">
            <?php echo wp_get_attachment_image($contactSection[1], 'full', false); ?></div>
    </div>
    <div class="flex flex-row justify-evenly gap-5">
        <div class="">
            <?php echo wp_get_attachment_image($contactSection[2], 'full', false); ?></div>
        <div class="">
            <?php echo wp_get_attachment_image($contactSection[3], 'full', false); ?></div>
    </div>
    <div class="flex flex-col gap-5 justify-center mt-5 md:hidden">
        <div class="font-bold text-3xl flex items-center justify-center text-center"><?php echo $contactSection_title ?>
        </div>
        <div class="flex items-center justify-center text-center"><?php echo $contactSection_description ?></div>
        <a href="<?php echo $button_contact_url ?>"
            class="flex items-center justify-center mt-8 border border-yellow-500 px-8 py-2 rounded-[40px]"><?php echo $button_contact_text ?></a>
    </div>
</section>