<?php

use app\lib\cms\ContentType;

$setting = new ContentType();

$setting->col2()->field("image1")->label("Image")->type("image")->prop("accept", "images/jpg");
$setting->col2()->field("image2")->label("Image")->type("image")->prop("accept", "images/jpg");
$setting->col2()->field("delivered")->label("Delivered");
$setting->col2()->field("currentstatus")->label("Status")->type("select")->defaultValue('')->prop('options', [
    [
        'value' => 'Enrolled',
        'label' => 'Enrolled',
    ],
    [
        'value' => 'Not Enrolled',
        'label' => 'Not Enrolled',
    ]
]);
$setting->col2()->field("topic")->label("Topic");
$setting->col2()->field("audience")->label("Audience");
$setting->col2()->field("duration")->label("Duration");
$setting->col2()->field("price")->label("Price");
$setting->col2()->field("description")->label("Description")->type('text');

$files = $setting->repeater("objectives");
$setting->col1()->field("objectives")->label("Items")->type("repeater")->defaultValue([])->prop("layout", [
    [
        $files->field("objective")->label("Objective")->toArray()
    ],
]);

$files1 = $setting->repeater("topics");
$setting->col1()->field("topics")->label("Items")->type("repeater")->defaultValue([])->prop("layout", [
    [
        $files1->field("topic")->label("Topic")->toArray()
    ],
]);
$setting->col2()->field("targetdetail")->label("Target Detail")->type('text');
$setting->col2()->field("durationdetail")->label("Duration Detail")->type('text');
$setting->col2()->field("coursefile")->label("Course File")->type('file');
return $setting();
