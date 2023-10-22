const data =
`
1 most common:

EXPLAIN ANALYZE SELECT * FROM "Images"
                WHERE "TagsArr" @> array['female']
                ORDER BY "Id"
                OFFSET @page * 20
                LIMIT 20;


Page 1:

Limit  (cost=0.43..66.54 rows=20 width=808) (actual time=0.025..0.059 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20222719.00 rows=6118289 width=808) (actual time=0.024..0.057 rows=20 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 11
Planning Time: 0.214 ms
Execution Time: 0.083 ms

Limit  (cost=0.43..66.54 rows=20 width=808) (actual time=0.020..0.055 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20222719.00 rows=6118289 width=808) (actual time=0.019..0.053 rows=20 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 11
Planning Time: 0.187 ms
Execution Time: 0.074 ms

Limit  (cost=0.43..66.54 rows=20 width=808) (actual time=0.021..0.054 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20222719.00 rows=6118289 width=808) (actual time=0.020..0.053 rows=20 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 11
Planning Time: 0.194 ms
Execution Time: 0.073 ms

Limit  (cost=0.43..66.54 rows=20 width=808) (actual time=0.021..0.056 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20222719.00 rows=6118289 width=808) (actual time=0.020..0.054 rows=20 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 11
Planning Time: 0.200 ms
Execution Time: 0.079 ms

Limit  (cost=0.43..66.54 rows=20 width=808) (actual time=0.021..0.058 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20222719.00 rows=6118289 width=808) (actual time=0.020..0.056 rows=20 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 11
Planning Time: 0.187 ms
Execution Time: 0.078 ms


Page 100:

Limit  (cost=6611.01..6677.12 rows=20 width=808) (actual time=2.718..2.743 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20222719.00 rows=6118289 width=808) (actual time=0.022..2.692 rows=2020 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 1390
Planning Time: 0.200 ms
Execution Time: 2.774 ms

Limit  (cost=6611.01..6677.12 rows=20 width=808) (actual time=2.812..2.838 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20222719.00 rows=6118289 width=808) (actual time=0.022..2.788 rows=2020 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 1390
Planning Time: 0.209 ms
Execution Time: 2.874 ms

Limit  (cost=6611.01..6677.12 rows=20 width=808) (actual time=2.897..2.924 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20222719.00 rows=6118289 width=808) (actual time=0.026..2.874 rows=2020 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 1390
Planning Time: 0.205 ms
Execution Time: 2.957 ms

Limit  (cost=6611.01..6677.12 rows=20 width=808) (actual time=2.807..2.833 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20222719.00 rows=6118289 width=808) (actual time=0.024..2.782 rows=2020 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 1390
Planning Time: 0.221 ms
Execution Time: 2.866 ms

Limit  (cost=6611.01..6677.12 rows=20 width=808) (actual time=2.779..2.804 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20222719.00 rows=6118289 width=808) (actual time=0.022..2.753 rows=2020 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 1390
Planning Time: 0.220 ms
Execution Time: 2.834 ms

Page 1000:

Limit  (cost=66106.23..66172.34 rows=20 width=808) (actual time=30.060..30.090 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20222719.00 rows=6118289 width=808) (actual time=0.031..29.575 rows=20020 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 13613
Planning Time: 0.255 ms
Execution Time: 30.137 ms

Limit  (cost=66106.23..66172.34 rows=20 width=808) (actual time=25.997..26.017 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20222719.00 rows=6118289 width=808) (actual time=0.023..25.528 rows=20020 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 13613
Planning Time: 0.190 ms
Execution Time: 26.054 ms

Limit  (cost=66106.23..66172.34 rows=20 width=808) (actual time=25.687..25.708 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20222719.00 rows=6118289 width=808) (actual time=0.021..25.220 rows=20020 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 13613
Planning Time: 0.196 ms
Execution Time: 25.743 ms

Limit  (cost=66106.23..66172.34 rows=20 width=808) (actual time=25.980..26.002 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20222719.00 rows=6118289 width=808) (actual time=0.024..25.514 rows=20020 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 13613
Planning Time: 0.211 ms
Execution Time: 26.042 ms

Limit  (cost=66106.23..66172.34 rows=20 width=808) (actual time=26.120..26.141 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20222719.00 rows=6118289 width=808) (actual time=0.024..25.652 rows=20020 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 13613
Planning Time: 0.192 ms
Execution Time: 26.180 ms

Page 10000:

Limit  (cost=665556.52..665623.07 rows=20 width=807) (actual time=1957.805..1957.847 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=6075107 width=807) (actual time=0.031..1911.104 rows=200020 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 135361
Planning Time: 0.218 ms
JIT:
  Functions: 4
"  Options: Inlining true, Optimization true, Expressions true, Deforming true"
"  Timing: Generation 0.274 ms, Inlining 10.533 ms, Optimization 18.190 ms, Emission 12.630 ms, Total 41.626 ms"
Execution Time: 1958.206 ms

Limit  (cost=665556.52..665623.07 rows=20 width=807) (actual time=394.372..394.401 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=6075107 width=807) (actual time=0.046..354.781 rows=200020 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 135361
Planning Time: 0.259 ms
JIT:
  Functions: 4
"  Options: Inlining true, Optimization true, Expressions true, Deforming true"
"  Timing: Generation 0.282 ms, Inlining 5.866 ms, Optimization 16.851 ms, Emission 11.876 ms, Total 34.876 ms"
Execution Time: 394.756 ms

Limit  (cost=665556.52..665623.07 rows=20 width=807) (actual time=400.384..400.411 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=6075107 width=807) (actual time=0.048..360.666 rows=200020 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 135361
Planning Time: 0.229 ms
JIT:
  Functions: 4
"  Options: Inlining true, Optimization true, Expressions true, Deforming true"
"  Timing: Generation 0.296 ms, Inlining 6.185 ms, Optimization 16.963 ms, Emission 11.561 ms, Total 35.006 ms"
Execution Time: 400.780 ms

Limit  (cost=665556.52..665623.07 rows=20 width=807) (actual time=399.786..399.836 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=6075107 width=807) (actual time=0.046..359.695 rows=200020 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 135361
Planning Time: 0.223 ms
JIT:
  Functions: 4
"  Options: Inlining true, Optimization true, Expressions true, Deforming true"
"  Timing: Generation 0.237 ms, Inlining 7.156 ms, Optimization 16.420 ms, Emission 11.526 ms, Total 35.340 ms"
Execution Time: 400.161 ms

Limit  (cost=665556.52..665623.07 rows=20 width=807) (actual time=415.230..415.262 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=6075107 width=807) (actual time=0.045..373.497 rows=200020 loops=1)"
"        Filter: (""TagsArr"" @> '{female}'::text[])"
        Rows Removed by Filter: 135361
Planning Time: 0.208 ms
JIT:
  Functions: 4
"  Options: Inlining true, Optimization true, Expressions true, Deforming true"
"  Timing: Generation 0.232 ms, Inlining 5.966 ms, Optimization 18.078 ms, Emission 12.660 ms, Total 36.935 ms"
Execution Time: 415.563 ms


3 most common:

EXPLAIN ANALYZE SELECT * FROM "Images"
                WHERE "TagsArr" @> array['female', 'breasts', 'penis']
                ORDER BY "Id"
                OFFSET 10000 * 20
                LIMIT 20;

Page 1:

Limit  (cost=0.43..355.56 rows=20 width=807) (actual time=2.075..18.239 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=1138565 width=807) (actual time=2.074..18.235 rows=20 loops=1)"
"        Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
        Rows Removed by Filter: 199
Planning Time: 0.218 ms
Execution Time: 18.277 ms

Limit  (cost=0.43..355.56 rows=20 width=807) (actual time=0.042..0.285 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=1138565 width=807) (actual time=0.041..0.283 rows=20 loops=1)"
"        Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
        Rows Removed by Filter: 199
Planning Time: 0.187 ms
Execution Time: 0.305 ms

Limit  (cost=0.43..355.56 rows=20 width=807) (actual time=0.048..0.276 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=1138565 width=807) (actual time=0.048..0.274 rows=20 loops=1)"
"        Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
        Rows Removed by Filter: 199
Planning Time: 0.194 ms
Execution Time: 0.296 ms

Limit  (cost=0.43..355.56 rows=20 width=807) (actual time=0.045..0.278 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=1138565 width=807) (actual time=0.044..0.276 rows=20 loops=1)"
"        Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
        Rows Removed by Filter: 199
Planning Time: 0.196 ms
Execution Time: 0.299 ms

Limit  (cost=0.43..355.56 rows=20 width=807) (actual time=0.044..0.275 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=1138565 width=807) (actual time=0.043..0.272 rows=20 loops=1)"
"        Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
        Rows Removed by Filter: 199
Planning Time: 0.194 ms
Execution Time: 0.298 ms

Page 100:

Limit  (cost=35512.90..35868.02 rows=20 width=807) (actual time=662.725..666.009 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=1138565 width=807) (actual time=0.041..665.901 rows=2020 loops=1)"
"        Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
        Rows Removed by Filter: 15734
Planning Time: 0.201 ms
Execution Time: 666.045 ms

Limit  (cost=35512.90..35868.02 rows=20 width=807) (actual time=16.863..16.996 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=1138565 width=807) (actual time=0.039..16.945 rows=2020 loops=1)"
"        Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
        Rows Removed by Filter: 15734
Planning Time: 0.195 ms
Execution Time: 17.035 ms

Limit  (cost=35512.90..35868.02 rows=20 width=807) (actual time=16.008..16.146 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=1138565 width=807) (actual time=0.048..16.095 rows=2020 loops=1)"
"        Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
        Rows Removed by Filter: 15734
Planning Time: 0.199 ms
Execution Time: 16.188 ms

Limit  (cost=35512.90..35868.02 rows=20 width=807) (actual time=20.368..20.499 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=1138565 width=807) (actual time=0.056..20.442 rows=2020 loops=1)"
"        Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
        Rows Removed by Filter: 15734
Planning Time: 0.259 ms
Execution Time: 20.540 ms

Limit  (cost=35512.90..35868.02 rows=20 width=807) (actual time=16.387..16.519 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=1138565 width=807) (actual time=0.041..16.468 rows=2020 loops=1)"
"        Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
        Rows Removed by Filter: 15734
Planning Time: 0.202 ms
Execution Time: 16.555 ms


Page 1000:

Limit  (cost=355125.04..355480.16 rows=20 width=807) (actual time=1440.835..1441.672 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=1138565 width=807) (actual time=0.047..1437.839 rows=20020 loops=1)"
"        Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
        Rows Removed by Filter: 156298
Planning Time: 0.209 ms
JIT:
  Functions: 4
"  Options: Inlining false, Optimization false, Expressions true, Deforming true"
"  Timing: Generation 0.290 ms, Inlining 0.000 ms, Optimization 0.243 ms, Emission 2.901 ms, Total 3.435 ms"
Execution Time: 1442.028 ms

Limit  (cost=355125.04..355480.16 rows=20 width=807) (actual time=219.828..220.003 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=1138565 width=807) (actual time=0.093..216.064 rows=20020 loops=1)"
"        Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
        Rows Removed by Filter: 156298
Planning Time: 0.410 ms
JIT:
  Functions: 4
"  Options: Inlining false, Optimization false, Expressions true, Deforming true"
"  Timing: Generation 0.235 ms, Inlining 0.000 ms, Optimization 0.236 ms, Emission 3.160 ms, Total 3.631 ms"
Execution Time: 220.305 ms

Limit  (cost=355125.04..355480.16 rows=20 width=807) (actual time=236.170..236.366 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=1138565 width=807) (actual time=0.092..232.716 rows=20020 loops=1)"
"        Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
        Rows Removed by Filter: 156298
Planning Time: 0.208 ms
JIT:
  Functions: 4
"  Options: Inlining false, Optimization false, Expressions true, Deforming true"
"  Timing: Generation 0.267 ms, Inlining 0.000 ms, Optimization 0.239 ms, Emission 2.855 ms, Total 3.361 ms"
Execution Time: 236.700 ms

Limit  (cost=355125.04..355480.16 rows=20 width=807) (actual time=228.859..229.039 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=1138565 width=807) (actual time=0.088..225.282 rows=20020 loops=1)"
"        Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
        Rows Removed by Filter: 156298
Planning Time: 0.207 ms
JIT:
  Functions: 4
"  Options: Inlining false, Optimization false, Expressions true, Deforming true"
"  Timing: Generation 0.293 ms, Inlining 0.000 ms, Optimization 0.252 ms, Emission 2.953 ms, Total 3.498 ms"
Execution Time: 229.398 ms

Limit  (cost=355125.04..355480.16 rows=20 width=807) (actual time=241.435..241.630 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20216622.49 rows=1138565 width=807) (actual time=0.137..236.221 rows=20020 loops=1)"
"        Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
        Rows Removed by Filter: 156298
Planning Time: 0.223 ms
JIT:
  Functions: 4
"  Options: Inlining false, Optimization false, Expressions true, Deforming true"
"  Timing: Generation 0.342 ms, Inlining 0.000 ms, Optimization 0.326 ms, Emission 4.510 ms, Total 5.178 ms"
Execution Time: 242.042 ms


Page 10000:
Limit  (cost=1422593.57..1422595.91 rows=20 width=807) (actual time=5767.780..5827.713 rows=20 loops=1)
  ->  Gather Merge  (cost=1399258.61..1509960.14 rows=948804 width=807) (actual time=5669.345..5786.891 rows=200020 loops=1)
        Workers Planned: 2
        Workers Launched: 2
        ->  Sort  (cost=1398258.59..1399444.59 rows=474402 width=807) (actual time=5649.789..5669.499 rows=66722 loops=3)
"              Sort Key: ""Id"""
              Sort Method: external merge  Disk: 289008kB
              Worker 0:  Sort Method: external merge  Disk: 279192kB
              Worker 1:  Sort Method: external merge  Disk: 277768kB
"              ->  Parallel Seq Scan on ""Images""  (cost=0.00..1016258.56 rows=474402 width=807) (actual time=51.580..4749.151 rows=382536 loops=3)"
"                    Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
                    Rows Removed by Filter: 3014450
Planning Time: 0.211 ms
JIT:
  Functions: 8
"  Options: Inlining true, Optimization true, Expressions true, Deforming true"
"  Timing: Generation 2.197 ms, Inlining 90.921 ms, Optimization 54.452 ms, Emission 41.146 ms, Total 188.716 ms"
Execution Time: 5879.185 ms

Limit  (cost=1422593.57..1422595.91 rows=20 width=807) (actual time=5694.946..5753.339 rows=20 loops=1)
  ->  Gather Merge  (cost=1399258.61..1509960.14 rows=948804 width=807) (actual time=5591.926..5708.962 rows=200020 loops=1)
        Workers Planned: 2
        Workers Launched: 2
        ->  Sort  (cost=1398258.59..1399444.59 rows=474402 width=807) (actual time=5570.487..5591.066 rows=66727 loops=3)
"              Sort Key: ""Id"""
              Sort Method: external merge  Disk: 289296kB
              Worker 0:  Sort Method: external merge  Disk: 278416kB
              Worker 1:  Sort Method: external merge  Disk: 278248kB
"              ->  Parallel Seq Scan on ""Images""  (cost=0.00..1016258.56 rows=474402 width=807) (actual time=48.155..4669.010 rows=382536 loops=3)"
"                    Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
                    Rows Removed by Filter: 3014450
Planning Time: 0.210 ms
JIT:
  Functions: 8
"  Options: Inlining true, Optimization true, Expressions true, Deforming true"
"  Timing: Generation 1.016 ms, Inlining 90.679 ms, Optimization 52.292 ms, Emission 38.777 ms, Total 182.764 ms"
Execution Time: 5814.030 ms

Limit  (cost=1422593.57..1422595.91 rows=20 width=807) (actual time=5837.510..5897.177 rows=20 loops=1)
  ->  Gather Merge  (cost=1399258.61..1509960.14 rows=948804 width=807) (actual time=5735.947..5852.062 rows=200020 loops=1)
        Workers Planned: 2
        Workers Launched: 2
        ->  Sort  (cost=1398258.59..1399444.59 rows=474402 width=807) (actual time=5713.700..5733.543 rows=66724 loops=3)
"              Sort Key: ""Id"""
              Sort Method: external merge  Disk: 286272kB
              Worker 0:  Sort Method: external merge  Disk: 281024kB
              Worker 1:  Sort Method: external merge  Disk: 278680kB
"              ->  Parallel Seq Scan on ""Images""  (cost=0.00..1016258.56 rows=474402 width=807) (actual time=48.516..4824.355 rows=382536 loops=3)"
"                    Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
                    Rows Removed by Filter: 3014450
Planning Time: 0.199 ms
JIT:
  Functions: 8
"  Options: Inlining true, Optimization true, Expressions true, Deforming true"
"  Timing: Generation 0.962 ms, Inlining 90.597 ms, Optimization 52.532 ms, Emission 39.494 ms, Total 183.585 ms"
Execution Time: 5948.610 ms

Limit  (cost=1422593.57..1422595.91 rows=20 width=807) (actual time=5738.184..5797.781 rows=20 loops=1)
  ->  Gather Merge  (cost=1399258.61..1509960.14 rows=948804 width=807) (actual time=5635.618..5752.215 rows=200020 loops=1)
        Workers Planned: 2
        Workers Launched: 2
        ->  Sort  (cost=1398258.59..1399444.59 rows=474402 width=807) (actual time=5613.040..5632.913 rows=66720 loops=3)
"              Sort Key: ""Id"""
              Sort Method: external merge  Disk: 287688kB
              Worker 0:  Sort Method: external merge  Disk: 276832kB
              Worker 1:  Sort Method: external merge  Disk: 281440kB
"              ->  Parallel Seq Scan on ""Images""  (cost=0.00..1016258.56 rows=474402 width=807) (actual time=50.321..4709.042 rows=382536 loops=3)"
"                    Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
                    Rows Removed by Filter: 3014450
Planning Time: 0.240 ms
JIT:
  Functions: 8
"  Options: Inlining true, Optimization true, Expressions true, Deforming true"
"  Timing: Generation 0.986 ms, Inlining 93.100 ms, Optimization 55.126 ms, Emission 40.707 ms, Total 189.918 ms"
Execution Time: 5849.658 ms

Limit  (cost=1422593.57..1422595.91 rows=20 width=807) (actual time=2716.720..2772.184 rows=20 loops=1)
  ->  Gather Merge  (cost=1399258.61..1509960.14 rows=948804 width=807) (actual time=2624.900..2733.285 rows=200020 loops=1)
        Workers Planned: 2
        Workers Launched: 2
        ->  Sort  (cost=1398258.59..1399444.59 rows=474402 width=807) (actual time=2607.351..2624.989 rows=66720 loops=3)
"              Sort Key: ""Id"""
              Sort Method: external merge  Disk: 289704kB
              Worker 0:  Sort Method: external merge  Disk: 278488kB
              Worker 1:  Sort Method: external merge  Disk: 277768kB
"              ->  Parallel Seq Scan on ""Images""  (cost=0.00..1016258.56 rows=474402 width=807) (actual time=47.201..1876.709 rows=382536 loops=3)"
"                    Filter: (""TagsArr"" @> '{female,breasts,penis}'::text[])"
                    Rows Removed by Filter: 3014450
Planning Time: 0.164 ms
JIT:
  Functions: 8
"  Options: Inlining true, Optimization true, Expressions true, Deforming true"
"  Timing: Generation 0.965 ms, Inlining 82.887 ms, Optimization 52.971 ms, Emission 37.659 ms, Total 174.481 ms"
Execution Time: 2821.232 ms

3 most common and 2 most common negated:

EXPLAIN ANALYZE SELECT * FROM "Images"
                WHERE "TagsArr" @> array['female', 'breasts', 'penis']
                AND NOT "TagsArr" @> array['male', 'nipples']
                ORDER BY "Id"
                OFFSET @page * 20
                LIMIT 20;

Page 1:

Limit  (cost=0.43..406.13 rows=20 width=807) (actual time=1.983..16.421 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20242091.08 rows=997905 width=807) (actual time=1.982..16.417 rows=20 loops=1)"
"        Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
        Rows Removed by Filter: 202
Planning Time: 3.030 ms
Execution Time: 16.461 ms

Limit  (cost=0.43..406.13 rows=20 width=807) (actual time=0.040..0.243 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20242091.08 rows=997905 width=807) (actual time=0.039..0.241 rows=20 loops=1)"
"        Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
        Rows Removed by Filter: 202
Planning Time: 0.316 ms
Execution Time: 0.264 ms

Limit  (cost=0.43..406.13 rows=20 width=807) (actual time=0.041..0.251 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20242091.08 rows=997905 width=807) (actual time=0.041..0.249 rows=20 loops=1)"
"        Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
        Rows Removed by Filter: 202
Planning Time: 0.310 ms
Execution Time: 0.273 ms

Limit  (cost=0.43..406.13 rows=20 width=807) (actual time=0.040..0.241 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20242091.08 rows=997905 width=807) (actual time=0.039..0.239 rows=20 loops=1)"
"        Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
        Rows Removed by Filter: 202
Planning Time: 0.307 ms
Execution Time: 0.262 ms

Limit  (cost=0.43..406.13 rows=20 width=807) (actual time=0.040..0.244 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20242091.08 rows=997905 width=807) (actual time=0.039..0.242 rows=20 loops=1)"
"        Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
        Rows Removed by Filter: 202
Planning Time: 0.325 ms
Execution Time: 0.265 ms

Page 100:

Limit  (cost=40569.61..40975.30 rows=20 width=807) (actual time=652.227..656.040 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20242091.08 rows=997905 width=807) (actual time=0.041..655.940 rows=2020 loops=1)"
"        Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
        Rows Removed by Filter: 18277
Planning Time: 0.272 ms
Execution Time: 656.075 ms

Limit  (cost=40569.61..40975.30 rows=20 width=807) (actual time=17.813..18.005 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20242091.08 rows=997905 width=807) (actual time=0.053..17.953 rows=2020 loops=1)"
"        Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
        Rows Removed by Filter: 18277
Planning Time: 0.286 ms
Execution Time: 18.043 ms

Limit  (cost=40569.61..40975.30 rows=20 width=807) (actual time=18.069..18.261 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20242091.08 rows=997905 width=807) (actual time=0.038..18.210 rows=2020 loops=1)"
"        Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
        Rows Removed by Filter: 18277
Planning Time: 0.278 ms
Execution Time: 18.299 ms

Limit  (cost=40569.61..40975.30 rows=20 width=807) (actual time=18.026..18.233 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20242091.08 rows=997905 width=807) (actual time=0.038..18.182 rows=2020 loops=1)"
"        Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
        Rows Removed by Filter: 18277
Planning Time: 0.269 ms
Execution Time: 18.271 ms

Limit  (cost=40569.61..40975.30 rows=20 width=807) (actual time=18.342..18.546 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20242091.08 rows=997905 width=807) (actual time=0.039..18.494 rows=2020 loops=1)"
"        Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
        Rows Removed by Filter: 18277
Planning Time: 0.278 ms
Execution Time: 18.581 ms

Page 1000:

Limit  (cost=405692.17..406097.86 rows=20 width=807) (actual time=1629.187..1630.542 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20242091.08 rows=997905 width=807) (actual time=0.045..1626.660 rows=20020 loops=1)"
"        Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
        Rows Removed by Filter: 183492
Planning Time: 0.308 ms
JIT:
  Functions: 4
"  Options: Inlining false, Optimization false, Expressions true, Deforming true"
"  Timing: Generation 0.259 ms, Inlining 0.000 ms, Optimization 0.255 ms, Emission 2.956 ms, Total 3.471 ms"
Execution Time: 1630.871 ms

Limit  (cost=405692.17..406097.86 rows=20 width=807) (actual time=317.471..317.696 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20242091.08 rows=997905 width=807) (actual time=3.564..313.905 rows=20020 loops=1)"
"        Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
        Rows Removed by Filter: 183492
Planning Time: 0.252 ms
JIT:
  Functions: 4
"  Options: Inlining false, Optimization false, Expressions true, Deforming true"
"  Timing: Generation 0.315 ms, Inlining 0.000 ms, Optimization 0.242 ms, Emission 2.983 ms, Total 3.540 ms"
Execution Time: 318.087 ms

Limit  (cost=405692.17..406097.86 rows=20 width=807) (actual time=252.984..253.226 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20242091.08 rows=997905 width=807) (actual time=0.094..248.912 rows=20020 loops=1)"
"        Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
        Rows Removed by Filter: 183492
Planning Time: 0.306 ms
JIT:
  Functions: 4
"  Options: Inlining false, Optimization false, Expressions true, Deforming true"
"  Timing: Generation 0.389 ms, Inlining 0.000 ms, Optimization 0.337 ms, Emission 3.428 ms, Total 4.153 ms"
Execution Time: 253.691 ms

Limit  (cost=405692.17..406097.86 rows=20 width=807) (actual time=248.501..248.732 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20242091.08 rows=997905 width=807) (actual time=0.092..245.027 rows=20020 loops=1)"
"        Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
        Rows Removed by Filter: 183492
Planning Time: 0.244 ms
JIT:
  Functions: 4
"  Options: Inlining false, Optimization false, Expressions true, Deforming true"
"  Timing: Generation 0.247 ms, Inlining 0.000 ms, Optimization 0.254 ms, Emission 2.902 ms, Total 3.403 ms"
Execution Time: 249.044 ms

Limit  (cost=405692.17..406097.86 rows=20 width=807) (actual time=266.538..266.771 rows=20 loops=1)
"  ->  Index Scan using ""PK_Images"" on ""Images""  (cost=0.43..20242091.08 rows=997905 width=807) (actual time=0.090..263.051 rows=20020 loops=1)"
"        Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
        Rows Removed by Filter: 183492
Planning Time: 0.238 ms
JIT:
  Functions: 4
"  Options: Inlining false, Optimization false, Expressions true, Deforming true"
"  Timing: Generation 0.250 ms, Inlining 0.000 ms, Optimization 0.256 ms, Emission 2.896 ms, Total 3.402 ms"
Execution Time: 267.099 ms

Page 10000:
Limit  (cost=1385620.49..1385622.82 rows=20 width=807) (actual time=5121.370..5172.094 rows=20 loops=1)
  ->  Gather Merge  (cost=1362285.53..1459310.90 rows=831588 width=807) (actual time=5025.985..5130.995 rows=200020 loops=1)
        Workers Planned: 2
        Workers Launched: 2
        ->  Sort  (cost=1361285.50..1362324.99 rows=415794 width=807) (actual time=5009.802..5027.098 rows=66721 loops=3)
"              Sort Key: ""Id"""
              Sort Method: external merge  Disk: 252440kB
              Worker 0:  Sort Method: external merge  Disk: 242248kB
              Worker 1:  Sort Method: external merge  Disk: 242120kB
"              ->  Parallel Seq Scan on ""Images""  (cost=0.00..1026870.47 rows=415794 width=807) (actual time=51.880..4351.493 rows=335100 loops=3)"
"                    Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
                    Rows Removed by Filter: 3061887
Planning Time: 0.254 ms
JIT:
  Functions: 8
"  Options: Inlining true, Optimization true, Expressions true, Deforming true"
"  Timing: Generation 2.592 ms, Inlining 87.284 ms, Optimization 55.251 ms, Emission 38.626 ms, Total 183.753 ms"
Execution Time: 5214.295 ms


Limit  (cost=1385620.49..1385622.82 rows=20 width=807) (actual time=2763.766..2813.280 rows=20 loops=1)
  ->  Gather Merge  (cost=1362285.53..1459310.90 rows=831588 width=807) (actual time=2666.296..2769.717 rows=200020 loops=1)
        Workers Planned: 2
        Workers Launched: 2
        ->  Sort  (cost=1361285.50..1362324.99 rows=415794 width=807) (actual time=2652.395..2669.441 rows=66725 loops=3)
"              Sort Key: ""Id"""
              Sort Method: external merge  Disk: 251512kB
              Worker 0:  Sort Method: external merge  Disk: 243120kB
              Worker 1:  Sort Method: external merge  Disk: 242192kB
"              ->  Parallel Seq Scan on ""Images""  (cost=0.00..1026870.47 rows=415794 width=807) (actual time=49.463..2006.385 rows=335100 loops=3)"
"                    Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
                    Rows Removed by Filter: 3061887
Planning Time: 0.321 ms
JIT:
  Functions: 8
"  Options: Inlining true, Optimization true, Expressions true, Deforming true"
"  Timing: Generation 1.120 ms, Inlining 88.706 ms, Optimization 55.450 ms, Emission 40.576 ms, Total 185.851 ms"
Execution Time: 2857.027 ms

Limit  (cost=1385620.49..1385622.82 rows=20 width=807) (actual time=2769.440..2820.027 rows=20 loops=1)
  ->  Gather Merge  (cost=1362285.53..1459310.90 rows=831588 width=807) (actual time=2676.518..2780.917 rows=200020 loops=1)
        Workers Planned: 2
        Workers Launched: 2
        ->  Sort  (cost=1361285.50..1362324.99 rows=415794 width=807) (actual time=2659.565..2676.398 rows=66728 loops=3)
"              Sort Key: ""Id"""
              Sort Method: external merge  Disk: 252304kB
              Worker 0:  Sort Method: external merge  Disk: 241248kB
              Worker 1:  Sort Method: external merge  Disk: 243248kB
"              ->  Parallel Seq Scan on ""Images""  (cost=0.00..1026870.47 rows=415794 width=807) (actual time=48.582..2010.845 rows=335100 loops=3)"
"                    Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
                    Rows Removed by Filter: 3061887
Planning Time: 0.238 ms
JIT:
  Functions: 8
"  Options: Inlining true, Optimization true, Expressions true, Deforming true"
"  Timing: Generation 0.994 ms, Inlining 82.313 ms, Optimization 58.963 ms, Emission 36.774 ms, Total 179.044 ms"
Execution Time: 2863.182 ms

Limit  (cost=1385620.49..1385622.82 rows=20 width=807) (actual time=2787.803..2838.287 rows=20 loops=1)
  ->  Gather Merge  (cost=1362285.53..1459310.90 rows=831588 width=807) (actual time=2683.503..2792.682 rows=200020 loops=1)
        Workers Planned: 2
        Workers Launched: 2
        ->  Sort  (cost=1361285.50..1362324.99 rows=415794 width=807) (actual time=2672.151..2690.758 rows=66721 loops=3)
"              Sort Key: ""Id"""
              Sort Method: external merge  Disk: 251768kB
              Worker 0:  Sort Method: external merge  Disk: 243008kB
              Worker 1:  Sort Method: external merge  Disk: 242064kB
"              ->  Parallel Seq Scan on ""Images""  (cost=0.00..1026870.47 rows=415794 width=807) (actual time=51.400..2016.205 rows=335100 loops=3)"
"                    Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
                    Rows Removed by Filter: 3061887
Planning Time: 0.310 ms
JIT:
  Functions: 8
"  Options: Inlining true, Optimization true, Expressions true, Deforming true"
"  Timing: Generation 1.115 ms, Inlining 88.935 ms, Optimization 65.382 ms, Emission 38.325 ms, Total 193.757 ms"
Execution Time: 2881.067 ms

Limit  (cost=1385620.49..1385622.82 rows=20 width=807) (actual time=2778.787..2828.330 rows=20 loops=1)
  ->  Gather Merge  (cost=1362285.53..1459310.90 rows=831588 width=807) (actual time=2685.367..2789.095 rows=200020 loops=1)
        Workers Planned: 2
        Workers Launched: 2
        ->  Sort  (cost=1361285.50..1362324.99 rows=415794 width=807) (actual time=2671.815..2689.330 rows=66720 loops=3)
"              Sort Key: ""Id"""
              Sort Method: external merge  Disk: 254728kB
              Worker 0:  Sort Method: external merge  Disk: 239704kB
              Worker 1:  Sort Method: external merge  Disk: 242424kB
"              ->  Parallel Seq Scan on ""Images""  (cost=0.00..1026870.47 rows=415794 width=807) (actual time=50.393..2020.030 rows=335100 loops=3)"
"                    Filter: ((""TagsArr"" @> '{female,breasts,penis}'::text[]) AND (NOT (""TagsArr"" @> '{male,nipples}'::text[])))"
                    Rows Removed by Filter: 3061887
Planning Time: 0.238 ms
JIT:
  Functions: 8
"  Options: Inlining true, Optimization true, Expressions true, Deforming true"
"  Timing: Generation 1.076 ms, Inlining 89.329 ms, Optimization 55.323 ms, Emission 38.724 ms, Total 184.451 ms"
Execution Time: 2871.503 ms

2 least common:

EXPLAIN ANALYZE SELECT * FROM "Images"
                WHERE "TagsArr" @> array['cycles', 'skype']
                ORDER BY "Id"
                LIMIT 20;

Limit  (cost=83.01..83.03 rows=9 width=807) (actual time=1.120..1.120 rows=0 loops=1)
  ->  Sort  (cost=83.01..83.03 rows=9 width=807) (actual time=1.119..1.119 rows=0 loops=1)
"        Sort Key: ""Id"""
        Sort Method: quicksort  Memory: 25kB
"        ->  Bitmap Heap Scan on ""Images""  (cost=46.84..82.87 rows=9 width=807) (actual time=1.116..1.116 rows=0 loops=1)"
"              Recheck Cond: (""TagsArr"" @> '{cycles,skype}'::text[])"
              ->  Bitmap Index Scan on tags_index  (cost=0.00..46.84 rows=9 width=0) (actual time=1.114..1.114 rows=0 loops=1)
"                    Index Cond: (""TagsArr"" @> '{cycles,skype}'::text[])"
Planning Time: 0.170 ms
Execution Time: 1.149 ms

Limit  (cost=83.01..83.03 rows=9 width=807) (actual time=0.062..0.062 rows=0 loops=1)
  ->  Sort  (cost=83.01..83.03 rows=9 width=807) (actual time=0.061..0.061 rows=0 loops=1)
"        Sort Key: ""Id"""
        Sort Method: quicksort  Memory: 25kB
"        ->  Bitmap Heap Scan on ""Images""  (cost=46.84..82.87 rows=9 width=807) (actual time=0.057..0.057 rows=0 loops=1)"
"              Recheck Cond: (""TagsArr"" @> '{cycles,skype}'::text[])"
              ->  Bitmap Index Scan on tags_index  (cost=0.00..46.84 rows=9 width=0) (actual time=0.054..0.054 rows=0 loops=1)
"                    Index Cond: (""TagsArr"" @> '{cycles,skype}'::text[])"
Planning Time: 0.178 ms
Execution Time: 0.101 ms

Limit  (cost=83.01..83.03 rows=9 width=807) (actual time=0.062..0.063 rows=0 loops=1)
  ->  Sort  (cost=83.01..83.03 rows=9 width=807) (actual time=0.061..0.062 rows=0 loops=1)
"        Sort Key: ""Id"""
        Sort Method: quicksort  Memory: 25kB
"        ->  Bitmap Heap Scan on ""Images""  (cost=46.84..82.87 rows=9 width=807) (actual time=0.058..0.058 rows=0 loops=1)"
"              Recheck Cond: (""TagsArr"" @> '{cycles,skype}'::text[])"
              ->  Bitmap Index Scan on tags_index  (cost=0.00..46.84 rows=9 width=0) (actual time=0.055..0.055 rows=0 loops=1)
"                    Index Cond: (""TagsArr"" @> '{cycles,skype}'::text[])"
Planning Time: 0.169 ms
Execution Time: 0.096 ms

Limit  (cost=83.01..83.03 rows=9 width=807) (actual time=0.090..0.091 rows=0 loops=1)
  ->  Sort  (cost=83.01..83.03 rows=9 width=807) (actual time=0.090..0.090 rows=0 loops=1)
"        Sort Key: ""Id"""
        Sort Method: quicksort  Memory: 25kB
"        ->  Bitmap Heap Scan on ""Images""  (cost=46.84..82.87 rows=9 width=807) (actual time=0.086..0.087 rows=0 loops=1)"
"              Recheck Cond: (""TagsArr"" @> '{cycles,skype}'::text[])"
              ->  Bitmap Index Scan on tags_index  (cost=0.00..46.84 rows=9 width=0) (actual time=0.082..0.082 rows=0 loops=1)
"                    Index Cond: (""TagsArr"" @> '{cycles,skype}'::text[])"
Planning Time: 0.187 ms
Execution Time: 0.137 ms

Limit  (cost=83.01..83.03 rows=9 width=807) (actual time=0.083..0.084 rows=0 loops=1)
  ->  Sort  (cost=83.01..83.03 rows=9 width=807) (actual time=0.082..0.082 rows=0 loops=1)
"        Sort Key: ""Id"""
        Sort Method: quicksort  Memory: 25kB
"        ->  Bitmap Heap Scan on ""Images""  (cost=46.84..82.87 rows=9 width=807) (actual time=0.078..0.079 rows=0 loops=1)"
"              Recheck Cond: (""TagsArr"" @> '{cycles,skype}'::text[])"
              ->  Bitmap Index Scan on tags_index  (cost=0.00..46.84 rows=9 width=0) (actual time=0.074..0.075 rows=0 loops=1)
"                    Index Cond: (""TagsArr"" @> '{cycles,skype}'::text[])"
Planning Time: 0.204 ms
Execution Time: 0.126 ms

`

const parsed = data.split("\n")
    .map(x => x.trim())
    .filter(x => x.startsWith("Execution Time:") || x.startsWith("Planning Time:"))
    .map(x => parseFloat(x
        .replace("Execution Time: ", "")
        .replace("Planning Time: ", "")
        .replace(" ms", "")))
    .join("\n");

console.log(parsed);