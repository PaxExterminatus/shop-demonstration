<?php

use Illuminate\Http\Request;

Route::middleware('api')->get('/clothing', function (Request $request) {
    return response()->json([
        'name' => 'Свитшот Nike',
        'price' => [
            'current' => 2900,
            'old' => 3500
        ],
        'sizes' => ['s', 'm', 'xl', 'xxl'],
        'colors' => ['blue', 'black', 'red'],
        'text' => '<strong>Свитшот оверсайз со спущенной линией плеча.</strong><br><strong>Состав:</strong> 80% хлопок, 20% полиэстер.<br><strong>Рекомендация по уходу:</strong><br><p>Только ручная стирка при температуре не выше 30 градусов, нейтральными моющими средствами; не тереть; не отжимать; отбеливание запрещено; не стирать моющими средствами содержащие отбеливатель; химчистка запрещена; гладить при низкой температуре до 100 градусов; сушить в тени на горизонтальной поверхности.</p>',
        'images' => [
            '/images/01.jpg',
            '/images/02.jpg',
            '/images/03.jpg',
        ],
    ]);
});
