<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitaf979f2c5c328c6ed833189d78ecea17
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Sabberworm\\CSS\\' => 15,
        ),
        'B' => 
        array (
            'Blockbite\\Blockbite\\Tests\\' => 26,
            'Blockbite\\Blockbite\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Sabberworm\\CSS\\' => 
        array (
            0 => __DIR__ . '/..' . '/sabberworm/php-css-parser/src',
        ),
        'Blockbite\\Blockbite\\Tests\\' => 
        array (
            0 => __DIR__ . '/../..' . '/tests/WordPress',
        ),
        'Blockbite\\Blockbite\\' => 
        array (
            0 => __DIR__ . '/../..' . '/classes',
        ),
    );

    public static $classMap = array (
        'Blockbite\\Blockbite\\Editor' => __DIR__ . '/../..' . '/classes/Editor.php',
        'Blockbite\\Blockbite\\Frontend' => __DIR__ . '/../..' . '/classes/Frontend.php',
        'Blockbite\\Blockbite\\Hooks' => __DIR__ . '/../..' . '/classes/Hooks.php',
        'Blockbite\\Blockbite\\Library' => __DIR__ . '/../..' . '/classes/Library.php',
        'Blockbite\\Blockbite\\Plugin' => __DIR__ . '/../..' . '/classes/Plugin.php',
        'Blockbite\\Blockbite\\Rest\\Api' => __DIR__ . '/../..' . '/classes/Rest/Api.php',
        'Blockbite\\Blockbite\\Rest\\Controllers\\Controller' => __DIR__ . '/../..' . '/classes/Rest/Controllers/Controller.php',
        'Blockbite\\Blockbite\\Rest\\Controllers\\Editor' => __DIR__ . '/../..' . '/classes/Rest/Controllers/Editor.php',
        'Blockbite\\Blockbite\\Rest\\Controllers\\Library' => __DIR__ . '/../..' . '/classes/Rest/Controllers/Library.php',
        'Blockbite\\Blockbite\\Rest\\Controllers\\Settings' => __DIR__ . '/../..' . '/classes/Rest/Controllers/Settings.php',
        'Blockbite\\Blockbite\\Settings' => __DIR__ . '/../..' . '/classes/Settings.php',
        'Blockbite\\Blockbite\\SettingsPage' => __DIR__ . '/../..' . '/classes/SettingsPage.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Sabberworm\\CSS\\CSSList\\AtRuleBlockList' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/CSSList/AtRuleBlockList.php',
        'Sabberworm\\CSS\\CSSList\\CSSBlockList' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/CSSList/CSSBlockList.php',
        'Sabberworm\\CSS\\CSSList\\CSSList' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/CSSList/CSSList.php',
        'Sabberworm\\CSS\\CSSList\\Document' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/CSSList/Document.php',
        'Sabberworm\\CSS\\CSSList\\KeyFrame' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/CSSList/KeyFrame.php',
        'Sabberworm\\CSS\\Comment\\Comment' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Comment/Comment.php',
        'Sabberworm\\CSS\\Comment\\Commentable' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Comment/Commentable.php',
        'Sabberworm\\CSS\\OutputFormat' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/OutputFormat.php',
        'Sabberworm\\CSS\\OutputFormatter' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/OutputFormatter.php',
        'Sabberworm\\CSS\\Parser' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Parser.php',
        'Sabberworm\\CSS\\Parsing\\OutputException' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Parsing/OutputException.php',
        'Sabberworm\\CSS\\Parsing\\ParserState' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Parsing/ParserState.php',
        'Sabberworm\\CSS\\Parsing\\SourceException' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Parsing/SourceException.php',
        'Sabberworm\\CSS\\Parsing\\UnexpectedEOFException' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Parsing/UnexpectedEOFException.php',
        'Sabberworm\\CSS\\Parsing\\UnexpectedTokenException' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Parsing/UnexpectedTokenException.php',
        'Sabberworm\\CSS\\Property\\AtRule' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Property/AtRule.php',
        'Sabberworm\\CSS\\Property\\CSSNamespace' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Property/CSSNamespace.php',
        'Sabberworm\\CSS\\Property\\Charset' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Property/Charset.php',
        'Sabberworm\\CSS\\Property\\Import' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Property/Import.php',
        'Sabberworm\\CSS\\Property\\KeyframeSelector' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Property/KeyframeSelector.php',
        'Sabberworm\\CSS\\Property\\Selector' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Property/Selector.php',
        'Sabberworm\\CSS\\Renderable' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Renderable.php',
        'Sabberworm\\CSS\\RuleSet\\AtRuleSet' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/RuleSet/AtRuleSet.php',
        'Sabberworm\\CSS\\RuleSet\\DeclarationBlock' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/RuleSet/DeclarationBlock.php',
        'Sabberworm\\CSS\\RuleSet\\RuleSet' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/RuleSet/RuleSet.php',
        'Sabberworm\\CSS\\Rule\\Rule' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Rule/Rule.php',
        'Sabberworm\\CSS\\Settings' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Settings.php',
        'Sabberworm\\CSS\\Value\\CSSFunction' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Value/CSSFunction.php',
        'Sabberworm\\CSS\\Value\\CSSString' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Value/CSSString.php',
        'Sabberworm\\CSS\\Value\\CalcFunction' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Value/CalcFunction.php',
        'Sabberworm\\CSS\\Value\\CalcRuleValueList' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Value/CalcRuleValueList.php',
        'Sabberworm\\CSS\\Value\\Color' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Value/Color.php',
        'Sabberworm\\CSS\\Value\\LineName' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Value/LineName.php',
        'Sabberworm\\CSS\\Value\\PrimitiveValue' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Value/PrimitiveValue.php',
        'Sabberworm\\CSS\\Value\\RuleValueList' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Value/RuleValueList.php',
        'Sabberworm\\CSS\\Value\\Size' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Value/Size.php',
        'Sabberworm\\CSS\\Value\\URL' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Value/URL.php',
        'Sabberworm\\CSS\\Value\\Value' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Value/Value.php',
        'Sabberworm\\CSS\\Value\\ValueList' => __DIR__ . '/..' . '/sabberworm/php-css-parser/src/Value/ValueList.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitaf979f2c5c328c6ed833189d78ecea17::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitaf979f2c5c328c6ed833189d78ecea17::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitaf979f2c5c328c6ed833189d78ecea17::$classMap;

        }, null, ClassLoader::class);
    }
}
