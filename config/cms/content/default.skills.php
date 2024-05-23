<?php

use app\lib\cms\ContentType;

$setting = new ContentType();

$setting->max(1);
$setting->col2()->field("image")->label("Image")->type("image")->prop("accept", "images/jpg");

$setting->col1()->field("skill")->label("Generic Skills");
$setting->col1()->field("description1")->label("Description")->type('text');

$setting->col1()->field("industry")->label("Industry Experience");
$setting->col1()->field("description2")->label("Description")->type('text');

$setting->col1()->field("regional")->label("Regional Experience");
$setting->col1()->field("description3")->label("Description")->type('text');


return $setting();
