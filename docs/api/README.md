# API

List of available REST API's to get data from the NextColony backend server.

Some general hints:

- Timestamps and Times are usually in seconds
- Objects can be GET with the UID
- Users can be GET with the steem user (as lowercase string)
- We do rate limit the API. You will get an error response with code 429 if you reached your limit.

## loadqyt

Load the resource quantities of a planet.

### Endpoint

`GET /api/loadqyt`

### Query Parameters

| Name |  Type  | Description        |      Required      |
| :--- | :----: | :----------------- | :----------------: |
| id   | string | UID of the planet. | :white_check_mark: |

### Types

| Field      |                                     Description                                     |
| :--------- | :---------------------------------------------------------------------------------: |
| lastUpdate | Timestamp in seconds of the last update of the entry, `new Date(LastUpdate * 1000)` |

### Examples

```sh
curl https://nextcolony.io/api/loadqyt?id=1005
```

```json
{
  "coal": 6174.83,
  "coaldepot": 2400.0,
  "coalrate": 960.0,
  "copper": 1906.81,
  "copperdepot": 600.0,
  "copperrate": 220.0,
  "lastUpdate": 1556120978,
  "ore": 3016.43,
  "oredepot": 1200.0,
  "orerate": 440.0,
  "uranium": 930.16,
  "uraniumdepot": 300.0,
  "uraniumrate": 220.0
}
```

## loadbuildings

Load the building information of a planet.

### Endpoint

`GET /api/loadbuildings`

### Query Parameters

| Name |  Type  | Description        |      Required      |
| :--- | :----: | :----------------- | :----------------: |
| id   | string | UID of the planet. | :white_check_mark: |

### Types

| Field |                                  Description                                   |
| :---- | :----------------------------------------------------------------------------: |
| busy  | Timestamp in seconds when the next action is possible, `new Date(busy * 1000)` |
| time  |                        Seconds needed to do the upgrade                        |

### Examples

```sh
curl https://nextcolony.io/api/loadbuildings?id=1005
```

```json
[
  {
    "base": 0,
    "busy": 1556114383,
    "coal": 230,
    "copper": 67,
    "cur_rate": null,
    "current": 11,
    "name": "base",
    "next_rate": null,
    "ore": 161,
    "research": 0,
    "skill": 12,
    "time": 22616,
    "uranium": 24
  },
  {
    "base": 0,
    "busy": 1556105126,
    "coal": 250,
    "copper": 104,
    "cur_rate": 2880,
    "current": 12,
    "name": "coaldepot",
    "next_rate": 3120,
    "ore": 300,
    "research": 0,
    "skill": 10,
    "time": 27614,
    "uranium": 47
  },
  {
    "base": 0,
    "busy": 1556105126,
    "coal": 208,
    "copper": 104,
    "cur_rate": 960,
    "current": 12,
    "name": "coalmine",
    "next_rate": 1040,
    "ore": 349,
    "research": 0,
    "skill": 13,
    "time": 27614,
    "uranium": 42
  }
]
```

## loadskills

Load the skills of a user.

### Endpoint

`GET /api/loadskills`

### Query Parameters

| Name |  Type  | Description |      Required      |
| :--- | :----: | :---------- | :----------------: |
| user | string | Steem user  | :white_check_mark: |

### Types

| Field |                                  Description                                   |
| :---- | :----------------------------------------------------------------------------: |
| busy  | Timestamp in seconds when the next action is possible, `new Date(busy * 1000)` |
| time  |                      Seconds needed to do the enhancement                      |

### Examples

```sh
curl https://nextcolony.io/api/loadskills?user=holger80
```

```json
[
  {
    "busy": 0,
    "coal": 16,
    "copper": 4,
    "current": 2,
    "name": "base",
    "ore": 8,
    "time": 3153,
    "uranium": 1
  },
  {
    "busy": 1556003805,
    "coal": 53,
    "copper": 22,
    "current": 10,
    "name": "coaldepot",
    "ore": 63,
    "time": 20934,
    "uranium": 10
  },
  {
    "busy": 1556066881,
    "coal": 17,
    "copper": 7,
    "current": 6,
    "name": "coalmine",
    "ore": 20,
    "time": 9480,
    "uranium": 3
  }
]
```

## loadplanets

Load the planets.

### Endpoint

`GET /api/loadplanets`

### Query Parameters

| Name |  Type  | Description | Required |
| :--- | :----: | :---------- | :------: |
| user | string | Steem user  |   :x:    |
| from | number | Paging      |   :x:    |
| to   | number | Paging      |   :x:    |

### Types

| Field   |                Description                |
| :------ | :---------------------------------------: |
| starter | 1 = starter planet, 0 = no starter planet |

### Examples

```sh
curl https://nextcolony.io/api/loadplanets?user=holger80&from=0&to=1
```

```json
[
  {
    "id": "P-Z8MVHPCCL80",
    "name": "holger80#1",
    "posx": -272,
    "posy": -37,
    "starter": 1
  }
]
```

```sh
curl https://nextcolony.io/api/loadplanets?from=0&to=11
```

```json
{
  "misc": { "total": 1312 },
  "planets": [
    {
      "id": "P-Z5CNNNZTL40",
      "name": "Test",
      "posx": 294,
      "posy": -193,
      "starter": 1
    }
  ]
}
```

## loadproduction

Load the resource production of a planet.

### Endpoint

`GET /api/loadproduction`

### Query Parameters

| Name |  Type  | Description       |      Required      |
| :--- | :----: | :---------------- | :----------------: |
| id   | string | UID of the planet | :white_check_mark: |
| user | string | Steem user        | :white_check_mark: |

### Types

none

### Examples

```sh
curl https://nextcolony.io/api/loadproduction?id=P-Z8MVHPCCL80&user=holger80
```

```json
{
  "coal": { "booster": null, "depot": 480.0, "level": 6, "production": 480.0 },
  "copper": { "booster": null, "depot": 30.0, "level": 3, "production": 60.0 },
  "misc": {
    "bonus": "common",
    "planet_name": "holger80#1",
    "rate": 0.0,
    "rune": 50.0,
    "rune_name": "Holy Rune",
    "type": "uranium"
  },
  "ore": { "booster": null, "depot": 60.0, "level": 5, "production": 200.0 },
  "uranium": { "booster": null, "depot": 15.0, "level": 1, "production": 10.0 }
}
```

## loadcost

Load the resource costs for ships.

### Endpoint

`GET /api/loadcost`

### Query Parameters

| Name     |  Type  | Description       |      Required      |
| :------- | :----: | :---------------- | :----------------: |
| name     | string | Name of the ship  | :white_check_mark: |
| planetID | string | UID of the planet | :white_check_mark: |
| level    | number | (?)               |        :x:         |
| busy     | string | (?)               |        :x:         |

### Types

| Field |             Description              |
| :---- | :----------------------------------: |
| busy  |                 (?)                  |
| time  | Seconds needed to do the enhancement |

### Examples

```sh
curl https://nextcolony.io/api/loadcost?level=0&name=transportship&planetID=P-Z8MVHPCCL80&busy=transportship
```

```json
{
  "base": 0,
  "busy": "transportship_busy",
  "coal": 538,
  "copper": 96,
  "ore": 276,
  "research": 0,
  "time": 21854.32,
  "uranium": 62
}
```

## shipyard

Check for available ships in the shipyard

### Endpoint

`GET /api/shipyard`

### Query Parameters

| Name |  Type  | Description       |      Required      |
| :--- | :----: | :---------------- | :----------------: |
| name | string | Name of the ship  | :white_check_mark: |
| id   | string | UID of the planet | :white_check_mark: |

### Types

| Field |                      Description                       |
| :---- | :----------------------------------------------------: |
| busy  | Timestamp when the next action is possible as a string |

### Examples

```sh
curl https://nextcolony.io/api/shipyard?name=explorership&id=P-Z8MVHPCCL80
```

```json
{
  "armor": 1,
  "bullet": null,
  "busy_until": 1556904815,
  "capacity": 0,
  "class": "Explorer",
  "consumption": 0.002,
  "cost": {
    "coal": 520,
    "copper": 65,
    "ore": 250,
    "time": 31028,
    "uranium": 91
  },
  "cur_level": 20,
  "cur_level_skill": 20,
  "laser": null,
  "longname": "Explorer",
  "min_level": 13,
  "rocket": null,
  "shield": 0,
  "skill": 20,
  "speed": 1.0,
  "structure": 0,
  "variant": 0,
  "variant_name": null
}
```

## loadgift

Load item transfers

### Endpoint

`GET /api/loadgift`

### Query Parameters

| Name |  Type  | Description |      Required      |
| :--- | :----: | :---------- | :----------------: |
| user | string | Steem user  | :white_check_mark: |

### Types

| Field |                Description                |
| :---- | :---------------------------------------: |
| time  | Timestamp of the transfer in milliseconds |

### Examples

```sh
curl https://nextcolony.io/api/loadgift?user=holger.random
```

```json
[{ "from": "holger80", "name": "Rune", "time": 1556356770 }]
```

## loadtranslation

Load translation of terms

### Endpoint

`GET /api/loadtranslation`

### Query Parameters

none

### Types

none

### Examples

```sh
curl https://nextcolony.io/api/loadtranslation
```

```json
[
  { "translation": "Base", "variable": "base" },
  {
    "translation": "With 1,118 square meters, Base is a massive structure to withstand the harsh climate and sandstorms. Inside it consists of nine capsules and a control room, recycling plant, airlock, storage room, bio module, medical care, living area. With its extremely limited resources it must be permanently controlled.",
    "variable": "base_desc"
  },
  {
    "translation": "Note: Reduce the build time for ships by +1%",
    "variable": "shipyard_note"
  },
  {
    "translation": "Note: Nothing special so far.",
    "variable": "researchcenter_note"
  },
  { "translation": "Merging", "variable": "merging" },
  {
    "translation": "Note: Reduce the upgrade time for buildings by +1%",
    "variable": "base_note"
  },
  { "translation": "Mission Control", "variable": "missioncontrol" }
]
```

## loadranking

Load ranking of users

### Endpoint

`GET /api/loadranking`

### Query Parameters

none

### Types

none

### Examples

```sh
curl https://nextcolony.io/api/loadranking
```

```json
[
  {
    "coal": 1125.6,
    "copper": 281.4,
    "explorations": 0,
    "meta_rate": 77.28,
    "meta_skill": 206,
    "ore": 562.8,
    "planets": 1,
    "uranium": 350.7,
    "user": "mancer-sm-alt"
  },
  {
    "coal": 1045.2,
    "copper": 261.3,
    "explorations": 3,
    "meta_rate": 71.76,
    "meta_skill": 198,
    "ore": 522.6,
    "planets": 1,
    "uranium": 325.65,
    "user": "reggaemuffin"
  },
  {
    "coal": 964.8,
    "copper": 220.0,
    "explorations": 0,
    "meta_rate": 65.12,
    "meta_skill": 149,
    "ore": 480.0,
    "planets": 1,
    "uranium": 300.6,
    "user": "xx0xx"
  }
]
```

## loadshop

Load shop items

### Endpoint

`GET /api/loadshop`

### Query Parameters

none

### Types

none

### Examples

```sh
curl https://nextcolony.io/api/loadshop
```

```json
[
  {
    "booster": null,
    "coal": 800,
    "copper": 200,
    "cost": 9.99,
    "id": "chest_01",
    "imgid": "chest_01",
    "left": 100,
    "max_left": null,
    "max_supply": null,
    "name": "Chest",
    "ore": 400,
    "total": 100,
    "uranium": 100
  },
  {
    "booster": 10.0,
    "coal": null,
    "copper": null,
    "cost": 0.01,
    "id": "booster_01",
    "imgid": "booster_01",
    "left": 4,
    "max_left": 489,
    "max_supply": 500,
    "name": "Rune",
    "ore": null,
    "total": 4,
    "uranium": null
  }
]
```

## loadfleet

Load all ships of a planet.

### Endpoint

`GET /api/loadfleet`

### Query Parameters

| Name     |  Type  | Description       |      Required      |
| :------- | :----: | :---------------- | :----------------: |
| user     | string | Steem user        | :white_check_mark: |
| planetid | string | UID of the planet | :white_check_mark: |

### Types

| Field      |                      Description                      |
| :--------- | :---------------------------------------------------: |
| busy       | Timestamp in seconds when the next action is possible |
| lastupdate | Timestamp in seconds when the table was last updated  |

### Examples

```sh
curl https://nextcolony.io/api/loadfleet?user=holger80&planetid=P-Z8MVHPCCL80
```

```json
[
  {
    "busy": 1556075971,
    "capacity": 100.0,
    "coal": 0.0,
    "cons": 0.002,
    "copper": 0.0,
    "hor": -272,
    "id": "S-ZDKZIJINU2O",
    "lastupdate": 1556100663,
    "ore": 0.0,
    "speed": 2.0,
    "type": "transportship",
    "uranium": 0.0,
    "ver": -37
  },
  {
    "busy": 1556321301,
    "capacity": 0.0,
    "coal": 0.0,
    "cons": 1.0,
    "copper": 0.0,
    "hor": -272,
    "id": "S-ZGYGV4WRHHC",
    "lastupdate": 1556288382,
    "ore": 0.0,
    "speed": 8.0,
    "type": "corvette",
    "uranium": 0.0,
    "ver": -37
  },
  {
    "busy": 1556067120,
    "capacity": 0.0,
    "coal": 0.0,
    "cons": 0.002,
    "copper": 0.0,
    "hor": -272,
    "id": "S-ZM4LG9CYG4W",
    "lastupdate": 1556134221,
    "ore": 0.0,
    "speed": 1.0,
    "type": "explorership",
    "uranium": 0.002,
    "ver": -37
  }
]
```

## loadcorddata

Load planet of a certain location expressed in x/y coordinates.

### Endpoint

`GET /api/loadcorddata`

### Query Parameters

| Name |  Type  | Description        |      Required      |
| :--- | :----: | :----------------- | :----------------: |
| x    | number | X axis coordinates | :white_check_mark: |
| y    | number | y axis coordinates | :white_check_mark: |

### Types

none

### Examples

```sh
curl https://nextcolony.io/api/loadcorddata?x=0&y=0
```

```json
{ "name": "Earth", "type": "planet", "user": "nextcolony" }
```

## loaditems

Load information about the items of a user.

### Endpoint

`GET /api/loaditems`

### Query Parameters

| Name |  Type  | Description |      Required      |
| :--- | :----: | :---------- | :----------------: |
| user | string | Steem user  | :white_check_mark: |

### Types

none

### Examples

```sh
curl https://nextcolony.io/api/loaditems?user=holger.random
```

```json
[
  {
    "booster": 10.0,
    "coal": null,
    "copper": null,
    "id": "booster_01",
    "imgid": "booster_01",
    "name": "Rune",
    "ore": null,
    "total": 1,
    "uid": "B1-ZALXR6HPJLC",
    "uranium": null
  }
]
```

## loadgalaxy

Load an area of the galaxy based on the areas center coordinates.

### Endpoint

`GET /api/loadgalaxy`

### Query Parameters

| Name |  Type  | Description                                   |      Required      |
| :--- | :----: | :-------------------------------------------- | :----------------: |
| x    | number | Center X axis coordinates of the area to load | :white_check_mark: |
| y    | number | Center y axis coordinates of the area to load | :white_check_mark: |

### Types

none

### Examples

```sh
curl https://nextcolony.io/api/loadgalaxy?x=0&y=0
```

```json
{
  "area": { "xmax": 12, "xmin": -11, "ymax": 7, "ymin": -7 },
  "explore": [],
  "explored": [],
  "planets": [
    { "id": "1", "img": "leg_atm_1.png", "type": "planet", "x": 0, "y": 0 }
  ]
}
```

## loadfleetmission

Get all the fleets missions of a user.

### Endpoint

`GET /api/loadfleetmission`

### Query Parameters

| Name     |  Type  | Description                                    |      Required      |
| :------- | :----: | :--------------------------------------------- | :----------------: |
| user     | string | Steem user                                     | :white_check_mark: |
| planetid | string | UID of the planet                              |        :x:         |
| active   | number | default 0 = all mission, 1 = active missions   |        :x:         |
| outgoing | number | default 0 = all mission, 1 = outgoing missions |        :x:         |

### Types

| Field   |                                    Description                                    |
| :------ | :-------------------------------------------------------------------------------: |
| arrival |  Timestamp when the ship will arrive at the destination, `new Date(busy * 1000)`  |
| return  | Timestamp when the ship will return from the destination, `new Date(busy * 1000)` |
| new     |                              List of active missions                              |
| old     |                             List of finished missions                             |

### Examples

```sh
curl https://nextcolony.io/api/loadfleetmission?user=holger80&active=1&planetid=P-Z8MVHPCCL80
```

```json
{
  "new": [
    {
      "arrival": 1557401609,
      "end_x": -265,
      "end_y": -38,
      "id": "M-ZSD2M8WLF8G",
      "resources": { "coal": 0, "copper": 0, "ore": 0, "uranium": 0 },
      "result": null,
      "return": 1557414337,
      "ships": {
        "battlecruiser": 0,
        "carrier": 0,
        "corvette": 0,
        "cruiser": 0,
        "destroyer": 0,
        "dreadnought": 0,
        "explorership": 0,
        "frigate": 0,
        "total": 1,
        "transportship": 1
      },
      "start_x": -272,
      "start_y": -37,
      "type": "transport"
    },
    {
      "arrival": 1557399597,
      "end_x": -269,
      "end_y": -37,
      "id": "M-ZZQGSD1R3DS",
      "resources": { "coal": 0, "copper": 0, "ore": 0, "uranium": 0 },
      "result": null,
      "return": 1557410397,
      "ships": {
        "battlecruiser": 0,
        "carrier": 0,
        "corvette": 0,
        "cruiser": 0,
        "destroyer": 0,
        "dreadnought": 0,
        "explorership": 1,
        "frigate": 0,
        "total": 1,
        "transportship": 0
      },
      "start_x": -272,
      "start_y": -37,
      "type": "explorespace"
    }
  ],
  "old": []
}
```

## loadplanet

Get the information about a specific planet

### Endpoint

`GET /api/loadplanet`

### Query Parameters

| Name     |  Type  | Description           | Required |
| :------- | :----: | :-------------------- | :------: |
| planetid | string | UID of the planet     |   :x:    |
| x        | number | Horizontal Coordinate |   :x:    |
| y        | number | Vertical Coordinate   |   :x:    |

You can either load it by planetid or x/y coordinates.

### Types

none

### Examples

```sh
curl https://nextcolony.io/api/loadplanet?id=P-Z8MVHPCCL80
```

```json
{
  "img": "co_uranium_1.png",
  "level_base": 2,
  "level_coal": 7,
  "level_coaldepot": 3,
  "level_copper": 4,
  "level_copperdepot": 0,
  "level_ore": 7,
  "level_oredepot": 0,
  "level_research": 0,
  "level_ship": 14,
  "level_uranium": 4,
  "level_uraniumdepot": 0,
  "planet_bonus": 0.0,
  "planet_corx": -272,
  "planet_cory": -37,
  "planet_crts": 1556100072,
  "planet_id": "P-Z8MVHPCCL80",
  "planet_name": "holger80#1",
  "planet_rarity": "common",
  "planet_type": "uranium",
  "total_type": 1,
  "user": "holger80"
}
```

## loaduser

Get the registration date of a user. It can also be used to check existence of a user.

### Endpoint

`GET /api/loaduser`

### Query Parameters

| Name |  Type  | Description |      Required      |
| :--- | :----: | :---------- | :----------------: |
| user | string | Steem user  | :white_check_mark: |

### Types

| Field |              Description              |
| :---- | :-----------------------------------: |
| date  | Timestamp of registration in seconds. |

### Examples

```sh
curl https://nextcolony.io/api/loaduser?user=jarunik
```

```json
{ "date": 1555879062, "username": "jarunik" }
```

## loadtransaction

Load the transactions that the backend loaded and processed from the steem blocckhain.

This endpoint is mostly for debugging purposes. The content is according to the [NextColony JSON definitions](../json/README.md).

### Endpoint

`GET /api/loadtransaction`

### Query Parameters

| Name   |  Type  | Description          |      Required      |
| :----- | :----: | :------------------- | :----------------: |
| trx_id | string | Steem transaction id | :white_check_mark: |

### Types

| Field |             Description              |
| :---- | :----------------------------------: |
| date  | Timestamp of transaction in seconds. |

### Examples

```sh
curl https://nextcolony.io/api/loadtransaction?trx_id=9874df43329b9a406cdff8e7f6a0a7dd4f9db506
```

```json
{
  "block_num": 32636434,
  "date": 1557045444,
  "error": null,
  "id": 145586,
  "tr_status": 1,
  "tr_type": "explorespace",
  "tr_var1": "P-Z8MVHPCCL80",
  "tr_var2": "-270",
  "tr_var3": "-39",
  "tr_var4": "0",
  "tr_var5": "0",
  "tr_var6": "0",
  "tr_var7": "0",
  "tr_var8": "0",
  "trigger_block_num": null,
  "trx": "9874df43329b9a406cdff8e7f6a0a7dd4f9db506",
  "user": "holger80",
  "virtualop": 0
}
```

## loadbattle

Load the results of a battle mission.

### Endpoint

`GET /api/loadbattle`

### Query Parameters

| Name       |  Type  | Description        |      Required      |
| :--------- | :----: | :----------------- | :----------------: |
| user       | string | Steem user         | :white_check_mark: |
| mission_id | string | Uid of the mission | :white_check_mark: |

### Types

| Field  |             Description             |
| :----- | :---------------------------------: |
| date   | Timestamp of the battle in seconds. |
| result |        2=win, 1=lose, 0=draw        |

### Examples

```sh
curl https://nextcolony.io/api/loadbattle?user=holger80&mission_id=M-ZGOR8X0KY80
```

```json
{
  "battlecruiser_lost": 0,
  "carrier_lost": 0,
  "coal": 0.0,
  "copper": 0.0,
  "cords_hor": -158,
  "cords_ver": -237,
  "corvette_lost": 0,
  "cruiser_lost": 0,
  "date": 1558022103,
  "destroyer_lost": 0,
  "dreadnought_lost": 0,
  "explorership_lost": 0,
  "frigate_lost": 0,
  "mission_id": "M-ZGOR8X0KY80",
  "opponent": "holger.random",
  "ore": 0.0,
  "result": 2,
  "transportship_lost": 0,
  "trx_id": "dea87f11fea57b51f2c2d687040b3002dfa5352d",
  "uranium": 260,
  "user": "holger80"
}
```
