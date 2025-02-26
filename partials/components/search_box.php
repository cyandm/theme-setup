<?php
$categories = get_terms([
    'taxonomy' => 'category',
    'hide_empty' => true,
]);
?>

<form action="<?php echo esc_url(home_url('/')); ?>" method="get"
    class="w-full p-5 py-7 mb-10 border border-gray-900 border-b-gray-600 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-4">

    <!-- Search_Box -->
    <div class="flex justify-start items-center bg-gradient-to-b from-[rgba(255,255,255,0.022)] to-[rgba(255,255,255,0.025)] w-80 border border-gray-600 rounded-full px-4 py-2 mx-auto md:mx-0">
        <div class="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
            </svg>
        </div>
        <input
            type="text"
            name="s"
            placeholder="جستجو در مقالات"
            class="focus:outline-none focus:ring-0 mx-auto md:m-0 border-none bg-transparent w-[90%]"
            value="<?php echo esc_attr(get_search_query()); ?>" />
    </div>

    <!-- لیست کشویی دسته‌بندی‌ها -->
    <div class="flex justify-start items-center gap-x-5 bg-gradient-to-b from-[rgba(255,255,255,0.022)] to-[rgba(255,255,255,0.025)] w-80 border border-white rounded-full px-4 py-2 mx-auto md:mx-0">
        <select
            name="cat"
            onchange="if(this.value) window.location.href='<?php echo home_url('/?cat='); ?>'+this.value;"
            class="focus:outline-none focus:ring-0 border-none bg-transparent px-4 text-white w-full">

            <option value="" class="bg-gray-900 text-white">همه دسته‌بندی‌ها</option>

            <?php foreach ($categories as $category): ?>
                <option value="<?php echo $category->term_id; ?>" class="bg-gray-900 text-white">
                    <?php echo esc_html($category->name); ?>
                </option>
            <?php endforeach; ?>
        </select>
    </div>
</form>