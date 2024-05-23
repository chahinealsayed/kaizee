<?php

use app\lib\cms\ContentType;

$setting = new ContentType();
$setting->col2()->field("image")->label("Image")->type("image")->prop("accept", "images/jpg");
$setting->local()->field("date")->label("Date");
$setting->col2()->field("subtitle1")->label("Subtitle1");
$setting->col2()->field("subtitle2")->label("Subtitle2");
return $setting();
