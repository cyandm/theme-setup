<?php

/**
 * ACF Class
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

use Cyan\Theme\Helpers\Validators;
use Cyan\Theme\Helpers\ACF\AcfGroup;


class ACF {

	public static function init() {
		$isDev = ENVIRONMENT === 'development';
		$isDev ? null : add_filter( 'acf/settings/show_admin', '__return_false', 100 );

		if ( ! function_exists( 'acf_add_local_field_group' ) ) {
			return;
		}


		add_action( 'acf/include_fields', [ __CLASS__, 'registerAllACF' ] );
	}

	/**
	 * Register all ACF fields for the individual post types, taxonomies, page templates, and menu items
	 * @return void
	 */
	public static function registerAllACF() {
		//PostTypes
		self::forStaff();
		self::forProjects();

		//Taxonomies
		self::forTaxonomies();

		//Page Templates
		self::forAboutPage();
		self::forBlogPage();
		self::forProjectsPage();
		self::forHomepage();
		self::forContacts();
		self::forLandings();

		//Menu Items

	}

	private static function forBlogPage() {
		//blog
		$acfGroup = new AcfGroup();

		$acfGroup->relationshipFields->addTaxonomy(
			'user_selected_taxonomies',
			'دسته بندی های موجود در صفحه',
			[ 
				'taxonomy' => 'category',
			]
		);

		$acfGroup->layoutFields->addTab( 'instagram_posts', 'instagram_posts' );

		for ( $i = 1; $i < 10; $i++ ) {
			$acfGroup->contentFields->addImage( "instagram_posts_$i", "instagram_posts_$i", [], "instagram_posts_$i" );
		}

		$acfGroup->contentFields->addImage( "icon", "icon", [], "icon" );


		$acfGroup->setLocation( 'page_template', '==', 'templates/blog.php' );

		$acfGroup->register( 'blog page content' );
	}

	private static function forContacts() {

		//define helper
		$acfGroup = new AcfGroup();

		//hero image
		$acfGroup->contentFields->addImage( "image_hero_contacts", "image_hero_contacts", [], "image_hero_contacts" );

		//Information
		$acfGroup->layoutFields->addTab( 'Information', 'Information' );

		$acfGroup->basicFields->addText( 'title_social', 'title_social', [], 'title_social' );

		$acfGroup->basicFields->addText( 'title_number', 'title_number', [], 'title_number' );

		$acfGroup->basicFields->addText( 'title_address', 'title_address', [], 'title_address' );


		//location
		$acfGroup->setLocation( 'page_template', '==', 'templates/contacts.php' );

		// register group
		$acfGroup->register( 'home page settings' );
	}

	private static function forAboutPage() {


		function template_about( $acfgroup, $label, $length ) {
			$acfgroup->layoutFields->addTab( $label . '_tab', $label . '_tab' );

			$acfgroup->contentFields->addImage( $label . '_icon', $label . '_icon', [], $label . '_icon' );
			$acfgroup->contentFields->addImage( $label . '_hero', $label . '_hero', [], $label . '_hero' );

			$acfgroup->basicFields->addText( $label . '_title', $label . '_title' );
			$acfgroup->basicFields->addText( $label . '_description', $label . '_description' );

			for ( $i = 1; $i < $length; $i++ ) {
				$acfgroup->contentFields->addImage( $label . '_grid' . $i, $label . '_grid' . $i, [], $label . '_grid' . $i );
			}
		}

		$acfgroup = new AcfGroup();
		//hero tab

		$acfgroup->layoutFields->addTab( 'hero', 'hero' );
		$acfgroup->basicFields->addText( 'hero-title', 'Title' );
		$acfgroup->basicFields->addText( 'hero-h1', 'Heading 1' );
		$acfgroup->basicFields->addText( 'hero-h2', 'Heading 2' );

		//aim tab
		$acfgroup->layoutFields->addTab( 'aim', 'Aim' );
		for ( $i = 1; $i < 4; $i++ ) {
			$acfgroup->basicFields->addText( 'aim-title' . $i, 'Title' . $i );
		}
		for ( $i = 1; $i < 4; $i++ ) {
			$acfgroup->basicFields->addText( 'aim-text' . $i, 'Description' . $i );
		}


		//time to meet tab
		$acfgroup->layoutFields->addTab( 'timetomeet', 'time to meet' );

		$acfgroup->contentFields->addImage( "about_meet_img", "about_meet_img", [], "about_meet_img" );

		$acfgroup->layoutFields->addTab( 'Family', 'Family' );
		$acfgroup->contentFields->addFile( "likeAFamilyVideo", "likeAFamilyVideo", [], "upload video" );




		$acfgroup->setLocation( 'page_template', '==', 'templates/about.php' );

		$acfgroup->register( 'about page content' );
	}

	private static function forStaff() {

		//define helper
		$acfGroup = new AcfGroup();

		//staff post type عنوان شغلی
		$acfGroup->basicFields->addText( 'jobTitle', 'عنوان شغلی', [ 
			'aria-label' => 'عنوان شغلی',
			'width' => '50%',
			'required' => true
		] );

		//location
		$acfGroup->setLocation( 'post_type', '==', Validators::PostType( 'staff' ) );

		// register group
		$acfGroup->register( 'تنظیمات' );
	}

	private static function forProjectsPage() {


		$acfgroup = new AcfGroup();


		$acfgroup->layoutFields->addTab( 'hero', 'hero' );
		$acfgroup->basicFields->addText( 'hero-title', 'Title' );
		$acfgroup->contentFields->addImage( "hero_img", "hero_img", [], "hero_img" );

		$acfgroup->layoutFields->addTab( 'projects', 'projects' );
		$acfgroup->relationshipFields->addPostObject( 'selected_projects', 'selected_projects', [ 'post_type' => 'portfolio' ] );




		$acfgroup->setLocation( 'page_template', '==', 'templates/projects.php' );
		$acfgroup->register( 'Projects Settings' );
	}

	private static function forProjects() {


		$acfgroup = new AcfGroup();

		$acfgroup->layoutFields->addTab( 'card', 'card' );

		for ( $i = 1; $i < 5; $i++ ) {
			$acfgroup->contentFields->addImage( 'project_images_' . $i, 'project_images_' . $i, [], 'project_images_' . $i );
		}


		$acfgroup->advanceFields->addColorPicker( 'section-color', 'section-color' );

		$acfgroup->layoutFields->addTab( 'single page', 'single page' );

		$acfgroup->contentFields->addImage( "full_image_desktop", "full_image_desktop", [], "full_image_desktop" );
		$acfgroup->contentFields->addImage( "full_image_mobile", "full_image_mobile", [], "full_image_mobile" );
		$acfgroup->choiceFields->addBoolean( 'is_dark', 'is_dark' );


		$acfgroup->setLocation( 'post_type', '==', Validators::PostType( 'portfolio' ) );

		$acfgroup->register( 'Projects' );
	}

	private static function forTaxonomies() {

		$acfgroup = new AcfGroup();

		$acfgroup->advanceFields->addColorPicker( 'color-term', 'color-term', [], 'color-term' );

		$acfgroup->setLocation( 'taxonomy', '==', Validators::taxonomy( 'working_team' ) );

		$acfgroup->register( 'working_team' );
	}

	private static function forHomepage() {
		//define helper
		$acfGroup = new AcfGroup();

		$acfGroup->layoutFields->addTab( 'Projects', 'Projects' );

		//add fields
		$acfGroup->basicFields->addText( 'title_brand_section', 'title_brand_section' );
		for ( $i = 1; $i < 13; $i++ ) {
			$acfGroup->contentFields->addImage( "image_brand_$i", "image_brand_$i", [], "image_brand_$i" );
		}

		$acfGroup->layoutFields->addTab( 'Project', 'Project' );

		$acfGroup->basicFields->addText( "Projects_title", "Projects_title", [], "Projects_title" );
		$acfGroup->basicFields->addText( "view_all_button_text", "view_all_button_text", [], "view_all_button_text" );
		$acfGroup->basicFields->addText( "view_all_button_url", "view_all_button_url", [], "view_all_button_url" );


		$acfGroup->layoutFields->addTab( 'comments', 'comments' );

		$acfGroup->basicFields->addText( "comments_title", "comments_title", [], "comments_title" );


		$acfGroup->layoutFields->addTab( 'team', 'team' );

		$acfGroup->basicFields->addText( "team_title", "team_title", [], "team_title" );


		$acfGroup->layoutFields->addTab( 'faq', 'faq' );

		$acfGroup->basicFields->addText( "faq_title", "faq_title", [], "faq_title" );
		$acfGroup->contentFields->addImage( "faq_home_image", "faq_home_image", [], "faq_home_image" );
		$acfGroup->relationshipFields->addPostObject( 'selected_faq', 'سوالات متداول انتخاب شده', [ 
			'post_type' => 'faq',
			'multiple' => true
		], 'selected_faq' );


		$acfGroup->layoutFields->addTab( 'services', 'services' );

		$acfGroup->basicFields->addText( "services_title", "services_title", [], "services_title" );
		$acfGroup->contentFields->addImage( "consultation_image", "consultation_image", [], "consultation_image" );
		$acfGroup->basicFields->addText( "consultation_title", "consultation_title", [], "consultation_title" );
		$acfGroup->contentFields->addImage( "web_design_image", "web_design_image", [], "web_design_image" );
		$acfGroup->basicFields->addText( "web_design_title", "web_design_title", [], "web_design_title" );
		$acfGroup->contentFields->addImage( "teaser_image", "teaser_image", [], "teaser_image" );
		$acfGroup->basicFields->addText( "teaser_title", "teaser_title", [], "teaser_title" );
		$acfGroup->contentFields->addImage( "content_image", "content_image", [], "content_image" );
		$acfGroup->basicFields->addText( "content_title", "content_title", [], "content_title" );
		$acfGroup->contentFields->addImage( "seo_image", "seo_image", [], "seo_image" );
		$acfGroup->basicFields->addText( "seo_title", "seo_title", [], "seo_title" );
		$acfGroup->contentFields->addImage( "marketing_image", "marketing_image", [], "marketing_image" );
		$acfGroup->basicFields->addText( "marketing_title", "marketing_title", [], "marketing_title" );


		$acfGroup->layoutFields->addTab( 'blog-home', 'blog-home' );

		$acfGroup->basicFields->addText( "blog_home_title", "blog_home_title", [], "blog_home_title" );

		//location
		$acfGroup->setLocation( 'page_template', '==', 'templates/homepage.php' );

		// register group
		$acfGroup->register( 'homepage' );
	}

	private static function forLandings() {

		//define helper
		$acfgroup = new AcfGroup();

		$acfgroup->advanceFields->addColorPicker( 'color', 'color' );


		//hero
		$acfgroup->layoutFields->addTab( 'hero', 'hero' );

		$acfgroup->contentFields->addImage( "image_hero_desktop", "image_hero_desktop", [], "image_hero_desktop" );
		$acfgroup->contentFields->addImage( "image_hero_mobile", "image_hero_mobile", [], "image_hero_mobile" );

		//workflow
		$acfgroup->layoutFields->addTab( 'workflow', 'workflow' );

		$acfgroup->basicFields->addText( "workflow_title", "workflow_title", [], "workflow_title" );

		for ( $i = 1; $i <= 5; $i++ ) {
			$acfgroup->basicFields->addText( "title_section_$i", "title_section_$i", [ 
				'width' => '50%'
			], "title_section_$i" );

			$acfgroup->contentFields->addImage( "image_workflow_$i", "image_workflow_$i", [ 
				'width' => '50%'
			], "image_workflow_$i" );

			$acfgroup->contentFields->addTextEditor( "description_section_$i", "description_section_$i", [], "description_section_$i" );
		}

		//Projects
		$acfgroup->layoutFields->addTab( 'Projects', 'Projects' );

		$acfgroup->basicFields->addText( "Projects_title", "Projects_title", [], "Projects_title" );
		$acfgroup->basicFields->addText( "view_all_button_text", "view_all_button_text", [], "view_all_button_text" );
		$acfgroup->basicFields->addText( "view_all_button_url", "view_all_button_url", [], "view_all_button_url" );
		$acfgroup->relationshipFields->addPostObject( 'projects', 'projects', [ 'post_type' => 'portfolio', 'multiple' => 1 ] );


		//faqs
		$acfgroup->layoutFields->addTab( 'faqs', 'faqs' );

		$acfgroup->basicFields->addText( "faqs_title", "faqs_title", [], "faqs_title" );
		$acfgroup->contentFields->addImage( "faqs_image", "faqs_image", [], "faqs_image" );
		$acfgroup->relationshipFields->addPostObject( 'faqs', 'faq', [ 'post_type' => 'faq', 'multiple' => 1 ] );



		//contactSection
		$acfgroup->layoutFields->addTab( 'contactSection', 'contactSection' );

		$acfgroup->basicFields->addText( "contactSection_title", "contactSection_title", [], "contactSection_title" );
		$acfgroup->basicFields->addText( "contactSection_description", "contactSection_description", [], "contactSection_description" );
		$acfgroup->basicFields->addText( "button_contact_text", "button_contact_text", [], "button_contact_text" );
		$acfgroup->basicFields->addText( "button_contact_url", "button_contact_url", [], "button_contact_url" );

		for ( $i = 1; $i < 5; $i++ ) {
			$acfgroup->contentFields->addImage( "image_contactSection_$i", "image_contactSection_$i", [], "image_contactSection_$i" );
		}

		//location
		$acfgroup->setLocation( 'page_template', '==', 'templates/landings.php' );

		// register group
		$acfgroup->register( 'web design' );
	}
}
