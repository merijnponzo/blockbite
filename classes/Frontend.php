<?php

namespace Blockbite\Blockbite;

class Frontend
{

    /**
     * Name of the option settings are saved in
     *
     * @since 0.0.1
     *
     * @var string
     */
    protected $name = '';
    protected $prefix_class = '';
    protected $css_url = '';

    public function __construct()
    {
        $this->css_url = plugins_url('build/blockbite-frontend.css', BLOCKBITE_MAIN_FILE);
        $this->prefix_class = 'blockbite ';
    }



    /**
     * Defaults
     *
     * @since 0.0.1
     *
     * @param array $defaults
     */
    protected $defaults = [
        'apiKey' => '',
    ];


    public function blockbite_css()
    {

        $blockbite_css_metakeys = $this->blockbite_css_metakeys();
        $css = '';

        // add blockbite_template_css
        $blockbite_template_css = $this->blockbite_template_css();

        // prioritize wp_template_part css first (header and footer)
        foreach ((array) $blockbite_template_css as $key => $value) {
            $css .= $value->blockbitecss_value;
            // add bite prefix classes
            $this->prefix_class .= 'bite-' . $value->post_id . ' ';
        }
        // then add reusable blocks and page css
        foreach ($blockbite_css_metakeys as $id) {
            $css .= get_post_meta($id, 'blockbitecss', true);
            $this->prefix_class .= 'bite-' . $id . ' ';
        }
        // Output the compiled CSS within <style> tags
        if (!empty($css)) {
            echo '<style>' . $css . '</style>';
        }
    }


    static function blockbite_template_css()
    {
        global $wpdb; // WordPress database access object

        // Define the table names and prefixes
        $postmeta_table = $wpdb->prefix . 'postmeta';

        // Define the query
        $query = "
            SELECT a.post_id, a.meta_key AS origin_key, a.meta_value AS origin_value, b.meta_key AS blockbitecss_key, b.meta_value AS blockbitecss_value
            FROM $postmeta_table AS a
            JOIN $postmeta_table AS b ON a.post_id = b.post_id
            WHERE a.meta_key = 'origin' AND a.meta_value = 'theme'
            AND b.meta_key = 'blockbitecss';
        ";


        // Run the query
        $results = $wpdb->get_results($query);       
        return $results;
    }


    // get all meta keys to query
    private static function blockbite_css_metakeys()
    {
        $meta_id  = [];
        $post_id = get_the_ID();
        $meta_id[] = $post_id;
        $refs =  get_post_meta($post_id, 'blockbiterefs', true);
        if (is_array($refs)) {
            foreach ($refs as $ref) {
                $meta_id[] = $ref;
            }
        }

        return $meta_id;
    }


    public function registerAssetsFrontend()
    {


        $dependencies = [];
        $version      = BLOCKBITE_PLUGIN_VERSION;

        // Use asset file if it exists
        if (file_exists(BLOCKBITE_PLUGIN_DIR . 'build/blockbite-frontend.asset.php')) {
            $asset_file   = include BLOCKBITE_PLUGIN_DIR . 'build/blockbite-frontend.asset.php';
            $dependencies = $asset_file['dependencies'];
            $version      = $asset_file['version'];
        }

        // register frontend script
        wp_register_script(
            'blockbite-frontend',
            plugins_url('build/blockbite-frontend.js', BLOCKBITE_MAIN_FILE),
            $dependencies,
            $version,
        );

        wp_enqueue_script('blockbite-frontend');


        // register frontend style
        wp_register_style(
            'blockbite-frontend-style',
            $this->css_url,
            [],
            $version
        );

        // add to frontend
        wp_enqueue_style('blockbite-frontend-style');


        // pas data to react plugin
        wp_localize_script(
            'blockbite-frontend',
            'blockbiteFrontend',
            [
                'apiUrl'   => rest_url('blockbite/v1'),
                'settings' => [],

            ]
        );
    }

    public function registerAssetsBackend()
    {
        add_editor_style($this->css_url);
    }
}
