<?php

namespace Blockbite\Blockbite\Rest;

use Blockbite\Blockbite\Plugin;
use Blockbite\Blockbite\Rest\Controllers\Settings as SettingsController;
use Blockbite\Blockbite\Rest\Controllers\Editor as EditorController;
use Blockbite\Blockbite\Rest\Controllers\Library as LibraryController;

/**
 * Register all routes for REST API
 */
class Api
{

    /**
     * API namespace
     *
     * @since 1.0.0
     *
     * @var string
     */
    protected $namespace  = 'blockbite/v1';

    /**
     * Plugin instance
     *
     * @since 1.0.0
     *
     * @var Plugin
     */
    protected $plugin;

    /**
     * Constructor
     *
     * @since 1.0.0
     *
     * @param Plugin $plugin
     */
    public function __construct(Plugin $plugin)
    {
        $this->plugin = $plugin;
    }

    /**
     * Register all routes
     *
     * @since 1.0.0
     *
     * @uses "rest_api_init" action
     * @see https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-custom-endpoints/
     * @return void
     */
    public function registerRoutes()
    {


        $settingsController = new SettingsController($this->plugin);

        register_rest_route($this->namespace, '/settings', [
            [
                'methods' => 'GET',
                'callback' => [$settingsController, 'get'],
                'permission_callback' => [$settingsController, 'authorize'],
            ],
            [
                'methods' => 'POST',
                'callback' => [$settingsController, 'update'],
                'permission_callback' => [$settingsController, 'authorize'],
                'args' => [
                    'apiKey' => [
                        'required' => true,
                        'sanitize_callback' => 'sanitize_text_field',
                        'type' => 'string',
                    ]
                ]
            ],
        ]);

        $editorController = new EditorController($this->plugin);
       

        // save the styles
        register_rest_route($this->namespace, '/editor/styles', [
             [
                'methods' => 'POST',
                'callback' => [$editorController, 'update_styles'],
                'permission_callback' => [$editorController, 'authorize'],
                'args' => [
                    'css' => [
                        'required' => true,
                        'sanitize_callback' => 'sanitize_text_field',
                        'type' => 'string',
                    ],
                    'post_id' => [
                        'required' => true,
                        'sanitize_callback' => 'sanitize_text_field',
                        'type' => 'string',
                    ],
                ]
            ],
        ]);

        // save the references
        register_rest_route($this->namespace, '/editor/references', [
            [
                'methods' => 'POST',
                'callback' => [$editorController, 'update_references'],
                'permission_callback' => [$editorController, 'authorize'],
                'args' => [
                    'references' => [
                        'required' => true,
                        // callback to sanitize the input should be here
                         'type' => 'array',
                    ],
                    'post_id' => [
                        'required' => true,
                        'sanitize_callback' => 'sanitize_text_field',
                        'type' => 'string',
                    ],
                ]
            ],
        ]);


        $libraryController = new LibraryController($this->plugin);
        // get all blocks
        register_rest_route($this->namespace, '/library/block', [
            [
                'methods' => 'GET',
                'callback' => [$libraryController, 'getBlocks'],
                'permission_callback' => [],
            ]
        ]);
        // get single blocks
        register_rest_route($this->namespace, '/library/block/(?P<id>\d+)', [
            [
                'methods' => 'GET',
                'callback' => [$libraryController, 'getBlockById'],
                'permission_callback' => [],
            ]
        ]);

        // get icons
        register_rest_route('blockbite/v1', '/get-icons', array(
            'methods' => 'GET',
            'callback' => [$editorController, 'get_icons'],
            'permission_callback' => [$editorController, 'authorize'],
        ));
        // regster rest route for icon filename like icon.svg
        register_rest_route('blockbite/v1', '/pick-icon/(?P<icon>\S+)', array(
            'methods' => 'GET',
            'callback' => [$editorController, 'pick_icon'],
            'permission_callback' => [$editorController, 'authorize']
        ));
        // pick a link
        register_rest_route('blockbite/v1', '/get-links/(?P<keyword>\S+)', array(
            'methods' => 'GET',
            'callback' => [$editorController, 'pick_link'],
            'permission_callback' => [$editorController, 'authorize'],
        ));





    }
}
