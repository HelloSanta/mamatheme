<?php

// Put the logo path into JavaScript for the live preview.
drupal_add_js(array('color' => array('logo' => theme_get_setting('logo', 'davyliu_template'))), 'setting');

$info = array(
  // Available colors and color labels used in theme.
  'fields' => array(
    'BodyBg'          => t('總底色'), 
    'PageBg'          => t('頁面底色'),
    'HeaderBg'        => t('頁首'),
    'MenuLink'        => t('選單文字'),
    'MenuHover'       => t('選單連結滑入'),
    'ContentBg'       => t('內文區塊'),
    'ContentFont'     => t('內文文字'),
    'ContentLink'     => t('內文連結'),
    'ContentHover'    => t('內文連結滑入'),
    'FooterBg'        => t('頁尾區塊'),
    'FooterFont'      => t('頁尾文字'),
    'FooterLink'      => t('頁尾連結'),
    'FooterHover'     => t('頁尾連結滑入'),
    'H1Font'          => t('重點標題'), 
    'H2Font'          => t('標題'), 
  ),
  // Pre-defined color schemes.

 'schemes' => array(
    'default' => array(
      'title' => t('Default'),
      'colors' => array(
        'BodyBg'                   => '#ffffff',
        'PageBg'                   => '#ffff01',
        'HeaderBg'                   => '#ffff03',
        'MenuLink'                =>'#cccc02',
        'MenuHover'                =>'#aaaa01',
        'ContentBg'                   => '#ffff02',
        'ContentFont'                   => '#cccc03',
        'ContentLink'                   => '#cccc04',
        'ContentHover'                   => '#aaaa02',
        'FooterBg'                   => '#ffff05',
        'FooterFont'                   => '#cccc05',
        'FooterLink'                   => '#cccc06',
        'FooterHover'                   => '#aaaa03',
       'H1Font'                   => '#cccccc',
        'H2Font'                   => '#cccc01',
        //'PageBg'                   => '#ffffff',
     
      ),
    ),

'ColorSet1' => array(
      'title' => t('DavyLiu'),
      'colors' => array(
        'BodyBg'                   => '#ffffff',
        'PageBg'                   => '#ffffff',
        'HeaderBg'                   => '#ffffff',
        'MenuLink'                =>'#747474',
        'MenuHover'                =>'#747474',
        'ContentBg'                   => '#ffffff',
        'ContentFont'                   => '#747474',
        'ContentLink'                   => '#747474',
        'ContentHover'                   => '#747474',
        'FooterBg'                   => '#ccc',
        'FooterFont'                   => '#ffffff',
        'FooterLink'                   => '#ffffff',
        'FooterHover'                   => '#ffffff',
        'H1Font'                   => '#747474',
        'H2Font'                   => '#747474',
        //'PageBg'                   => '#ffffff',
     
      ),
    ),
    /*
    'firehouse' => array(
      'title' => t('Firehouse'),
      'colors' => array(
        'top' => '#cd2d2d',
        'bottom' => '#cf3535',
        'bg' => '#ffffff',
        'sidebar' => '#f1f4f0',
        'sidebarborders' => '#ededed',
        'footer' => '#1f1d1c',
        'titleslogan' => '#fffeff',
        'text' => '#3b3b3b',
        'link' => '#d6121f',
      ),
    ),
    'ice' => array(
      'title' => t('Ice'),
      'colors' => array(
        'top' => '#d0d0d0',
        'bottom' => '#c2c4c5',
        'bg' => '#ffffff',
        'sidebar' => '#ffffff',
        'sidebarborders' => '#cccccc',
        'footer' => '#24272c',
        'titleslogan' => '#000000',
        'text' => '#4a4a4a',
        'link' => '#019dbf',
      ),
    ),
    'plum' => array(
      'title' => t('Plum'),
      'colors' => array(
        'top' => '#4c1c58',
        'bottom' => '#593662',
        'bg' => '#fffdf7',
        'sidebar' => '#edede7',
        'sidebarborders' => '#e7e7e7',
        'footer' => '#2c2c28',
        'titleslogan' => '#ffffff',
        'text' => '#301313',
        'link' => '#9d408d',
      ),
    ),
    'slate' => array(
      'title' => t('Slate'),
      'colors' => array(
        'top' => '#4a4a4a',
        'bottom' => '#4e4e4e',
        'bg' => '#ffffff',
        'sidebar' => '#ffffff',
        'sidebarborders' => '#d0d0d0',
        'footer' => '#161617',
        'titleslogan' => '#ffffff',
        'text' => '#3b3b3b',
        'link' => '#0073b6',
      ),
    ),*/
  ),

  // CSS files (excluding @import) to rewrite with new color scheme.
  'css' => array(
    'color/colors.css',
  ),

  // Files to copy.
  'copy' => array(
    'logo.png',
  ),

  // Gradient definitions.
  'gradients' => array(
    array(
      // (x, y, width, height).
      'dimension' => array(0, 0, 0, 0),
      // Direction of gradient ('vertical' or 'horizontal').
      'direction' => 'vertical',
      // Keys of colors to use for the gradient.
      'colors' => array('top', 'bottom'),
    ),
  ),

  // Color areas to fill (x, y, width, height).
  'fill' => array(),

  // Coordinates of all the theme slices (x, y, width, height)
  // with their filename as used in the stylesheet.
  'slices' => array(),

  // Reference color used for blending. Matches the base.png's colors.
  'blend_target' => '#ffffff',

  // Preview files.
  'preview_css' => 'color/preview.css',
  'preview_js' => 'color/preview.js',
  'preview_html' => 'color/preview.html',

  // Base file for image generation.
  'base_image' => 'color/base.png',
);
