<?php

namespace app\tiers\website\api\controllers;

use Yii;
use app\components\inherits\rest\Controller;
use app\enums\CategoryStatus;
use app\enums\ContentStatus;
use app\models\Category;
use app\models\Content;
use app\models\ContentCategory;
use yii\data\ActiveDataProvider;

class NewsController extends Controller
{
    public function actionList(?string $cid)
    {
        $query = Content::find()->alias('co');
        $query->joinWith(['categories ca'], true, 'INNER JOIN');
        $query->where(['co.status' => ContentStatus::ACTIVE->value]);
        if ($cid) {
            $query->andWhere(['ca.id' => $cid]);
        }
        $query->groupBy(['co.id']);

        return createObject([
            'class' => ActiveDataProvider::class,
            'query' => $query,
            'pagination' => false,
        ]);
    }
}
