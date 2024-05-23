<?php

return [
    [
        "route" => "/default/content",
        "pattern" => "meet-your-coach",
        "defaults" => [
            "id" => "cms.contents.default.coaching.1",
        ],
    ],
    [
        "route" => "/default/content",
        "pattern" => "services",
        "defaults" => [
            "id" => "cms.contents.default.services.1",
        ],
    ],
    [
        "route" => "/default/contents",
        "pattern" => "course-page",
        "defaults" => [
            "type" => "courses",
        ],
    ],
    [
        "route" => "/default/contents",
        "pattern" => "client-testimonials",
        "defaults" => [
            "type" => "testimonial",
        ],
    ],
    [
        "route" => "/default/contents",
        "pattern" => "news-events",
        "defaults" => [
            "type" => "news",
        ],
    ],
    [
        "route" => "/default/contents",
        "pattern" => "contact-us",
        "defaults" => [
            "type" => "contact",
        ],
    ],
    'Contents/<id:.+>' => '/default/content',
];
