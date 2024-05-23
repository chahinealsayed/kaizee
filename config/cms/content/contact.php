<?php

use app\lib\cms\ContentType;

$setting = new ContentType();

$files = $setting->repeater("cont");
$setting->col1()->field("cont")->label("Items")->type("repeater")->defaultValue([])->prop("layout", [
    [
        $files->field("phone")->label("Phone")->toArray()
    ],
]);
$setting->col1()->field("fax")->label("Fax");
$setting->col1()->field("email")->label("Email");
$setting->col1()->field("location")->label("Location");
$setting->col1()->field("embed")->label("Google Map Embeded Link");
return $setting();
