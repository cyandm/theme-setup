<swiper-slide>
     <a href="<?php the_permalink(); ?>" class="post-thumbnail-link">
          <?php if (has_post_thumbnail()) : ?>
               <div class="bg-center rounded-3xl bg-cover"
                    style="background-image: url('<?php echo get_the_post_thumbnail_url(get_the_ID(), 'large'); ?>'); max-height: 570px;">
               <?php endif; ?>

               <!-- Content -->
               <div class="relative text-white flex flex-col justify-between h-full">

                    <!-- icons -->
                    <div class="flex flex-col justify-between mt-6 ml-6">
                         <div class="flex flex-col justify-start items-end gap-y-4">
                              <!-- Like -->
                              <div class="w-[76px] h-[97px] flex flex-col justify-center items-center backdrop-blur-lg border border-zinc-400 rounded-xl" data-post-id="<?php echo get_the_ID(); ?>">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                   </svg>
                                   <span><?php echo get_post_meta(get_the_ID(), '_like_count', true) ?: 0; ?></span>
                              </div>

                              <!-- Comments -->
                              <div class="w-[76px] h-[97px] flex flex-col justify-center items-center backdrop-blur-lg rounded-xl border border-zinc-400" data-post-id=" <?php echo get_the_ID(); ?>">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                   </svg>
                                   <span><?php echo get_comments_number(get_the_ID()); ?></span>
                              </div>
                         </div>
                    </div>

                    <!--  Title and Author  -->
                    <div class="mt-52 mb-6 px-6 bg-gradient-to-t from-black/5 via-black/5 to-black/5">
                         <h3 class="text-2xl font-bold mb-2"><?php the_title(); ?></h3>
                         <p class="text-sm text-gray-300">نویسنده: <?php the_author(); ?></p>
                    </div>
               </div>
               </div>
     </a>
</swiper-slide>