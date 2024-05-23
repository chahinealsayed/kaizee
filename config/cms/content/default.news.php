<?php

use app\lib\cms\ContentType;

$setting = new ContentType();

$setting->max(1);
$setting->col2()->field("image")->label("Image")->type("image")->prop("accept", "images/jpg");
$setting->local()->field("subtitle1")->label("Subtitle1");
return $setting();
