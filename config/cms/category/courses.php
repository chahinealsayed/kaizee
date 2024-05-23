<?php

use app\lib\cms\CategoryType;

$setting = new CategoryType();

// $setting->settings()->field("size")->label("Size")->prop("type", "number")->prop("min", "0")->prop("max", 10);
$setting->settings()->field("image")->label("Image")->type("image")->prop("accept", "images/*");
$setting->local()->field("subtitle")->label("Subtitle");

return $setting();
