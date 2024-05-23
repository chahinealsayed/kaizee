<?php

use app\lib\cms\ContentType;

$setting = new ContentType();
$setting->col2()->field("image")->label("Main Image")->type("image")->prop("accept", "images/jpg");
$setting->col1()->field("name")->label("Name");
$setting->col1()->field("position")->label("Position");
$setting->col1()->field("company")->label("Company");
return $setting();
