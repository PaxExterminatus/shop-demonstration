<?php

use Illuminate\Http\Request;

Route::middleware('api')->get('/clothing', function (Request $request) {
        return response()->json([
            'id' => 1,
            'name' => 'Свитшот Nike',
            'price' => [
                'current' => 2900,
                'old' => 3500
            ],
            'sizes' => ['s', 'm', 'xl', 'xxl'],
            'colors' => ['Синий', 'Черный', 'Красный'],
            'text' => '<p><strong>Свитшот оверсайз со спущенной линией плеча.</strong></p> <p><strong>Состав:</strong> 80% хлопок, 20% полиэстер.</p><strong>Рекомендация по уходу:</strong><p>Только ручная стирка при температуре не выше 30 градусов, нейтральными моющими средствами; не тереть; не отжимать; отбеливание запрещено; не стирать моющими средствами содержащие отбеливатель; химчистка запрещена; гладить при низкой температуре до 100 градусов; сушить в тени на горизонтальной поверхности.</p>',
            'images' => [
                '/images/01.jpg',
                '/images/02.jpg',
                '/images/03.jpg',
            ],
            'stock' => true,
        ]);
});

Route::middleware('api')->get('/more', function (Request $request) {
    return response()->json([
        ['image' => '/images/01.jpg', 'name' => 'Свитшот Nike Fire On', 'price' => 2320],
        ['image' => '/images/02.jpg', 'name' => 'Cвитшот Nike SVB', 'price' => 2560],
        ['image' => '/images/03.jpg', 'name' => 'Пуловер Nike Pullover Hoodie Gold', 'price' => 2560],
    ]);
});
