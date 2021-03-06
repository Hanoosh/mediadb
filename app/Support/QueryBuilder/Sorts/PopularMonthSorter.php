<?php

namespace App\Support\QueryBuilder\Sorts;

use CyrildeWit\EloquentViewable\Support\Period;
use Illuminate\Database\Eloquent\Builder;
use Spatie\QueryBuilder\Sorts\Sort;

class PopularMonthSorter implements Sort
{
    /**
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param bool                                  $descending
     * @param string                                $property
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function __invoke(Builder $query, bool $descending, string $property): Builder
    {
        $viewableType = get_class($query->getModel());

        return $query->withCount(['views' => function ($query) use ($viewableType) {
            $query->where('viewable_type', $viewableType)
                  ->withinPeriod(Period::pastMonths(1))
                  ->distinct('visitor');
        }])->orderBy('views_count', 'DESC');
    }
}
