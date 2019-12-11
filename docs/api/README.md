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

```bash
curl https://api.nextcolony.io/loadqyt?id=1005
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

```bash
curl https://api.nextcolony.io/loadbuildings?id=P-Z5CNNNZTL40
```

```json
[
  {
    "base": 0,
    "busy": 1557678603,
    "coal": 0,
    "copper": 0,
    "cur_rate": null,
    "current": 20,
    "misc": null,
    "name": "shipyard",
    "next_rate": null,
    "ore": 0,
    "research": 0,
    "skill": 20,
    "time": 0,
    "uranium": 0
  },
  {
    "base": 0,
    "busy": 1558897868,
    "coal": 19,
    "copper": 5,
    "cur_rate": null,
    "current": 1,
    "misc": {
      "shieldcharge_busy": 1558966482,
      "shieldcharged": 1,
      "shieldprotection_busy": 0
    },
    "name": "shieldgenerator",
    "next_rate": null,
    "ore": 10,
    "research": 0,
    "skill": 2,
    "time": 1951,
    "uranium": 2
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

```bash
curl https://api.nextcolony.io/loadskills?user=holger80
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

| Name |  Type  | Description                                                                 | Required |
| :--- | :----: | :-------------------------------------------------------------------------- | :------: |
| user | string | Steem user                                                                  |   :x:    |
| from | number | Paging                                                                      |   :x:    |
| to   | number | Paging                                                                      |   :x:    |
| sort | string | You can pass `date` to get results ordered by the date the planet was found |   :x:    |

### Types

| Field   |                Description                |
| :------ | :---------------------------------------: |
| starter | 1 = starter planet, 0 = no starter planet |

### Examples

```bash
curl https://api.nextcolony.io/loadplanets?user=holger80&from=0&to=10&sort=date
```

```json
{
  "misc": {
    "total": 5660
  },
  "planets": [
    {
      "date": 1559183868,
      "id": "P-Z3NVC8DS71C",
      "name": "Beta",
      "posx": 290,
      "posy": 119,
      "starter": 0,
      "username": "holger80"
    },
    {
      "date": 1555878927,
      "id": "P-Z0IS2KK5JCG",
      "name": "holger80#1",
      "posx": 294,
      "posy": 116,
      "starter": 1,
      "username": "holger80"
    }
  ]
}
```

```bash
curl https://api.nextcolony.io/loadplanets?from=0&to=11
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

```bash
curl https://api.nextcolony.io/loadproduction?id=P-Z8MVHPCCL80&user=holger80
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

```bash
curl https://api.nextcolony.io/loadcost?level=0&name=transportship&planetID=P-Z8MVHPCCL80&busy=transportship
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

Obsolete: Please use /planetshipyard instead.

Check for available ships in the shipyard

### Endpoint

`GET /api/shipyard`

### Query Parameters

| Name |  Type  | Description                                              |      Required      |
| :--- | :----: | :------------------------------------------------------- | :----------------: |
| id   | string | UID of the planet                                        | :white_check_mark: |
| name | string | Deprecated: Name of the ship (returns obsolete response) |        :x:         |

### Types

| Field |                      Description                       |
| :---- | :----------------------------------------------------: |
| busy  | Timestamp when the next action is possible as a string |

### Examples

```bash
curl https://api.nextcolony.io/shipyard?id=P-Z8MVHPCCL80
```

```json
[
  {
    "activated": false,
    "armor": 20,
    "bullet": 0,
    "busy_until": null,
    "capacity": 160,
    "class": "Battlecruiser",
    "consumption": 0.0038,
    "cost": {
      "coal": 576,
      "copper": 144,
      "ore": 288,
      "stardust": 0,
      "time": 94254.40000000001,
      "uranium": 72
    },
    "cur_level": 20,
    "cur_level_skill": 20,
    "laser": 0,
    "longname": "Battlecruiser Tiger",
    "min_level": 18,
    "rocket": 8,
    "shield": 36,
    "skill": 20,
    "speed": 2.0,
    "structure": 40,
    "type": "battlecruiser",
    "variant": 0,
    "variant_name": "rocket"
  }
]
```

#### Deprecated

Please don't use this version and switch to the above without the name parameter.

```bash
curl https://api.nextcolony.io/shipyard?id=P-Z8MVHPCCL80&name=transportship
```

```json
{
  "attack": 0,
  "busy_until": "Wed, 24 Apr 2019 03:19:31 GMT",
  "capacity": 100,
  "consumption": 0.002,
  "cost": { "coal": 538, "copper": 96, "ore": 276, "uranium": 62 },
  "cur_level": 14,
  "cur_level_skill": 14,
  "defense": 3,
  "min_level": 12,
  "skill": 20,
  "speed": 2.0
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

```bash
curl https://api.nextcolony.io/loadgift?user=holger.random
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

```bash
curl https://api.nextcolony.io/loadtranslation
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

| Name  |  Type  | Description                                           | Required |
| :---- | :----: | :---------------------------------------------------- | :------: |
| sort  | string | Indicating sort order                                 |   :x:    |
| limit | number | How many entries of the ranking you want to retrieve. |   :x:    |

### Types

Supported sort orders are `meta`, `explorations`, `planets`, `fleet`, `meta_skill`, `destroyed`

### Examples

```bash
curl https://api.nextcolony.io/loadranking
```

```json
[
  {
    "coal": 2284.8,
    "copper": 530.4,
    "destroyed_ships": 28,
    "destroyed_ships_uranium": 5051.25,
    "explorations": 117,
    "meta_rate": 110.16,
    "meta_skill": 472,
    "ore": 1101.6,
    "planets": 3,
    "ships": 98,
    "uranium": 275.4,
    "user": "oliverschmid"
  }
]
```

## loadshop

Load shop items

### Endpoint

`GET /api/loadshop`

### Query Parameters

| Name |  Type  | Description                               | Required |
| :--- | :----: | :---------------------------------------- | :------: |
| user | string | Steem user, to get activation information |   :x:    |

### Types

none

### Examples

```bash
curl https://api.nextcolony.io/loadshop
```

```json
[
  {
    "activated_planets": [],
    "blueprint": null,
    "booster": null,
    "coal": 800,
    "copper": 200,
    "cost": 9.99,
    "id": "chest_01",
    "imgid": "chest_01",
    "left": 150,
    "max_left": null,
    "max_supply": null,
    "name": "Chest",
    "ore": 400,
    "total": 150,
    "uranium": 100
  }
]
```

```bash
curl https://api.nextcolony.io/loadshop?user=holger80
```

```json
[
  {
    "activated_planets": [],
    "blueprint": null,
    "booster": null,
    "coal": 8800,
    "copper": 2200,
    "cost": 99.0,
    "id": "chest_03",
    "imgid": "chest_03",
    "left": 30,
    "max_left": null,
    "max_supply": null,
    "name": "Imperium Chest",
    "ore": 4400,
    "total": 30,
    "uranium": 1100
  },
  {
    "activated_planets": ["P-Z4QHNR6NBMO", "P-Z8MVHPCCL80"],
    "blueprint": "corvette1",
    "booster": null,
    "coal": null,
    "copper": null,
    "cost": 0.001,
    "id": "blueprint_01",
    "imgid": "blueprint_01",
    "left": 3492,
    "max_left": 3492,
    "max_supply": 3500,
    "name": "Corvette Petunia",
    "ore": null,
    "total": 3500,
    "uranium": null
  }
]
```

## loadfleet

Obsolete: Please use /planetfleet instead.

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

```bash
curl https://api.nextcolony.io/loadfleet?user=holger80&planetid=P-Z8MVHPCCL80
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

```bash
curl https://api.nextcolony.io/loadcorddata?x=0&y=0
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

```bash
curl https://api.nextcolony.io/loaditems?user=holger.random
```

```json
[
  {
    "blueprint": null,
    "booster": 10.0,
    "coal": null,
    "copper": null,
    "id": "booster_01",
    "imgid": "booster_01",
    "name": "Rune",
    "ore": null,
    "total": 3,
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

| Name   |  Type  | Description                                   |      Required      |
| :----- | :----: | :-------------------------------------------- | :----------------: |
| x      | number | Center X axis coordinates of the area to load | :white_check_mark: |
| y      | number | Center y axis coordinates of the area to load | :white_check_mark: |
| user   | string | Steem user                                    |        :x:         |
| height | number | Height of the area to fetch                   |        :x:         |
| width  | number | Width of the area to fetch                    |        :x:         |

### Types

none

### Examples

```bash
curl https://api.nextcolony.io/loadgalaxy?x=0&y=0
```

```json
{
  "area": { "xmax": -144, "xmin": -167, "ymax": -231, "ymin": -245 },
  "explore": [
    {
      "date": 1559643780,
      "type": "explore",
      "user": "oliverschmid",
      "x": -157,
      "y": -236
    }
  ],
  "planets": [
    {
      "id": "P-ZK4X98AY9S0",
      "img": "co_atm_1.png",
      "type": "planet",
      "x": -160,
      "y": -243
    }
  ]
}
```

## loadfleetmission

Get all the fleets missions of a user.

### Endpoint

`GET /api/loadfleetmission`

### Query Parameters

| Name     |  Type  | Description                                              |      Required      |
| :------- | :----: | :------------------------------------------------------- | :----------------: |
| user     | string | Steem user                                               | :white_check_mark: |
| planetid | string | UID of the planet                                        |        :x:         |
| active   | number | 1 = show only active, 0 = filter out active              |        :x:         |
| outgoing | number | 1 = show only outgoing, 0 = filter out outgoing          |        :x:         |
| hold     | number | 1 = show only hold, 0 = filter out hold                  |        :x:         |
| onlyuser | number | 1 = show only the missions of the user (and no incoming) |        :x:         |
| page     | number | Which page to fetch, starting at 0                       |        :x:         |
| limit    | number | How much entries to fetch per page                       |        :x:         |

### Types

| Field   |                                    Description                                    |
| :------ | :-------------------------------------------------------------------------------: |
| arrival |  Timestamp when the ship will arrive at the destination, `new Date(busy * 1000)`  |
| return  | Timestamp when the ship will return from the destination, `new Date(busy * 1000)` |

### Examples

```bash
curl https://api.nextcolony.io/loadfleetmission?user=holger80&active=1&planetid=P-Z8MVHPCCL80
```

```json
[
  {
    "arrival": 1559633820,
    "battles": 0,
    "cancel_trx": null,
    "end_x": -156,
    "end_y": -239,
    "from_planet": {
      "bonus": "common",
      "id": "P-Z8MVHPCCL80",
      "name": "4",
      "planet_type": "earth",
      "user": "jarunik"
    },
    "id": "M-ZXKN34FL08G",
    "resources": { "coal": 0, "copper": 0, "ore": 0, "uranium": 0 },
    "result": null,
    "return": null,
    "ships": {
      "carrier": { "n": 1, "pos": 2 },
      "carrier1": { "n": 1, "pos": 1 },
      "dreadnought": { "n": 1, "pos": 3 },
      "total": 3
    },
    "start_date": 1568764443,
    "start_x": -156,
    "start_y": -239,
    "to_planet": {
      "bonus": "common",
      "name": "4",
      "planet_type": "earth",
      "user": "jarunik"
    },
    "type": "support",
    "user": "jarunik"
  }
]
```

## loadplanet

Get the information about a specific planet

### Endpoint

`GET /api/loadplanet`

### Query Parameters

| Name |  Type  | Description           | Required |
| :--- | :----: | :-------------------- | :------: |
| id   | string | UID of the planet     |   :x:    |
| x    | number | Horizontal Coordinate |   :x:    |
| y    | number | Vertical Coordinate   |   :x:    |

You can either load it by planetid or x/y coordinates.

### Types

none

### Examples

```bash
curl https://api.nextcolony.io/loadplanet?id=P-Z8MVHPCCL80
```

```json
{
  "img": "co_atm_1.png",
  "level_base": 5,
  "level_coal": 13,
  "level_coaldepot": 12,
  "level_copper": 13,
  "level_copperdepot": 12,
  "level_ore": 15,
  "level_oredepot": 12,
  "level_research": 0,
  "level_ship": 13,
  "level_uranium": 14,
  "level_uraniumdepot": 12,
  "planet_bonus": 0,
  "planet_corx": 294,
  "planet_cory": -193,
  "planet_crts": 1555879062,
  "planet_id": "P-Z5CNNNZTL40",
  "planet_name": "01-Jar",
  "planet_rarity": "common",
  "planet_type": "earth",
  "shieldcharge_busy": 1560043782,
  "shieldprotection_busy": 0,
  "startplanet": 1,
  "total_type": 3286,
  "user": "jarunik"
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

```bash
curl https://api.nextcolony.io/loaduser?user=jarunik
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

```bash
curl https://api.nextcolony.io/loadtransaction?trx_id=9874df43329b9a406cdff8e7f6a0a7dd4f9db506
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

| Name       |  Type  | Description              | Required |
| :--------- | :----: | :----------------------- | :------: |
| user       | string | Steem user               |   :x:    |
| mission_id | string | Uid of the mission       |   :x:    |
| limit      | number | Number of recent battles |   :x:    |

### Types

| Field  |             Description             |
| :----- | :---------------------------------: |
| date   | Timestamp of the battle in seconds. |
| result |        2=win, 1=lose, 0=draw        |

### Examples

```bash
curl https://api.nextcolony.io/loadbattle?user=jarunik&mission_id=M-Z3P6JP3GGM8
```

```json
[
  {
    "attacker": "oliverschmid",
    "attacker_armorrep": 0.12,
    "attacker_shieldregen": 0.215,
    "battle_number": 1,
    "coal": 0.0,
    "copper": 0.0,
    "cords_hor": -157,
    "cords_hor_dest": -156,
    "cords_ver": -238,
    "cords_ver_dest": -239,
    "date": 1559720584,
    "defender": "rondras",
    "defender_armorrep": 0.1,
    "defender_shieldregen": 0.2,
    "final_attacker_ships": [
      {
        "armor": 0,
        "bullet": 0.0,
        "class": "Corvette",
        "laser": 0.0,
        "longname": "Corvette Crocus",
        "lost": 1,
        "n": 1,
        "pos": "1",
        "rocket": 0.0,
        "shield": 0,
        "structure": 0,
        "survivor": 0,
        "type": "corvette"
      }
    ],
    "final_defender_ships": [
      {
        "armor": 240,
        "bullet": 50,
        "class": "Dreadnought",
        "laser": 0,
        "longname": "Dreadnought Imperial",
        "lost": 0,
        "n": 1,
        "pos": "7",
        "rocket": 0,
        "shield": 160,
        "structure": 200,
        "survivor": 1,
        "type": "dreadnought1"
      }
    ],
    "initial_attacker_ships": [
      {
        "armor": 8.24,
        "bullet": 0.0,
        "class": "Corvette",
        "laser": 0.0,
        "longname": "Corvette Crocus",
        "lost": 0,
        "n": 1,
        "pos": "1",
        "rocket": 2.04,
        "shield": 10.3,
        "structure": 6.18,
        "survivor": 1,
        "type": "corvette"
      }
    ],
    "initial_defender_ships": [
      {
        "armor": 240,
        "bullet": 50,
        "class": "Dreadnought",
        "laser": 0,
        "longname": "Dreadnought Imperial",
        "lost": 0,
        "n": 1,
        "pos": "7",
        "rocket": 0,
        "shield": 160,
        "structure": 200,
        "survivor": 1,
        "type": "dreadnought1"
      }
    ],
    "mission_id": "M-Z3P6JP3GGM8",
    "ore": 0.0,
    "result": 1,
    "support_mission_id": "M-ZF5GLV6MX00",
    "trx_id": "a884c51a4a0b1f3863020bcb66c9ad00df7d60be",
    "uranium": 0.0
  }
]
```

## transactions

Load the recent transactions to check what is happening in the game.

### Endpoint

`GET /api/transactions`

### Query Parameters

| Name  |  Type  | Description                                         | Required |
| :---- | :----: | :-------------------------------------------------- | :------: |
| limit | number | Number of recent transactions                       |   :x:    |
| type  |  text  | Type of transaction (according to JSON definitions) |   :x:    |
| user  | string | Steem user                                          |   :x:    |

### Types

The result is according to the [NextColony JSON definitions](../json/README.md).

### Examples

```bash
curl https://api.nextcolony.io/transactions
```

```json
[
  {
    "block_num": 34218115,
    "date": 1561795571,
    "error": null,
    "id": 2137227,
    "tr_status": 1,
    "tr_type": "finishbuilding",
    "tr_var1": "P-ZBPVYD9MBTS",
    "tr_var2": "coppermine",
    "tr_var3": "4",
    "tr_var4": null,
    "tr_var5": null,
    "tr_var6": null,
    "tr_var7": null,
    "tr_var8": null,
    "trigger_block_num": null,
    "trx": "48e57de8e6a0453c76f84b42ce8fdb0cbd91f939",
    "user": "passeggero",
    "virtualop": 1
  },
  {
    "block_num": 34218114,
    "date": 1561795569,
    "error": null,
    "id": 2137226,
    "tr_status": 2,
    "tr_type": "explorespace",
    "tr_var1": "P-ZM1DWS1ET9C",
    "tr_var2": "18",
    "tr_var3": "285",
    "tr_var4": "0",
    "tr_var5": "0",
    "tr_var6": "0",
    "tr_var7": "0",
    "tr_var8": "0",
    "trigger_block_num": null,
    "trx": "5158368ec7aabb6bb83c837e34dd6a71f9cf1bfe",
    "user": "take5",
    "virtualop": 0
  }
]
```

## state

Load the synchronisation state of the backend server

### Endpoint

`GET /api/state`

### Query Parameters

None

### Types

N/A

### Examples

```bash
curl https://api.nextcolony.io/state
```

```json
{
  "first_unprocessed_block_num": 34456077,
  "latest_block_num": 34456077,
  "processing_delay_seconds": 0,
  "tracker_block_num": 34456077,
  "tracker_delay_seconds": 0
}
```

## wallet

Information about the users stardust

### Endpoint

`GET /api/wallet`

### Query Parameters

| Name  |  Type  | Description                        |      Required      |
| :---- | :----: | :--------------------------------- | :----------------: |
| user  | string | Steem user                         | :white_check_mark: |
| limit | number | Number of recent transactions      |        :x:         |
| page  | number | Which page to fetch, starting at 0 |        :x:         |

### Types

N/A

### Examples

```bash
curl https://api.nextcolony.io/wallet?user=jarunik
```

```json
{
  "date": 1555879062,
  "stardust": 989075678,
  "supply": 114989000000,
  "transactions": [
    {
      "amount": 10000000,
      "date": 1563655794,
      "from_user": "jarunik",
      "id": 4,
      "to_user": "oliverschmid",
      "tr_status": 1,
      "tr_type": "transfer",
      "trx": "7c398646fa627f627f4be50b3faef3d674caa9ce"
    }
  ],
  "username": "jarunik"
}
```

## wallet_ranking

Rich list of stardust per player.

### Endpoint

`GET /api/wallet_ranking`

### Query Parameters

N/A

### Types

N/A

### Examples

```bash
curl https://api.nextcolony.io/wallet_ranking_
```

```json
[
  {
    "percentage": 87.0318030420301,
    "stardust": 100077000000,
    "user": "holger80"
  },
  {
    "percentage": 9.653966901181853,
    "stardust": 11101000000,
    "user": "rondras"
  }
]
```

## season

Information about the newest season.

### Endpoint

`GET /api/season`

### Query Parameters

| Name      |  Type  | Description                                                 | Required |
| :-------- | :----: | :---------------------------------------------------------- | :------: |
| timestamp | number | Get the season which was active during this date in seconds |   :x:    |

### Types

N/A

### Examples

```bash
curl https://api.nextcolony.io/season
```

```json
{
  "end_date": 1565717424,
  "id": 1,
  "leach_rate": 0,
  "name": "A strong beginning!",
  "start_date": 1564507824,
  "steem_rewards": 3000
}
```

## seasonranking

Shows the newest Ranking of the Seasonal Reward Points

### Endpoint

`GET /api/seasonranking`

### Query Parameters

| Name      |  Type  | Description                                                       | Required |
| :-------- | :----: | :---------------------------------------------------------------- | :------: |
| sort      | string | You can sort by `total_reward`, `build_reward`or `destroy_reward` |   :x:    |
| limit     | number | Number of ranks to show                                           |   :x:    |
| timestamp | number | Get the season which was active during this date in seconds       |   :x:    |

### Types

N/A

### Examples

```bash
curl https://api.nextcolony.io/seasonranking
```

```json
{
  "end_date": 1565717424,
  "id": 1,
  "leach_rate": 0,
  "name": "A strong beginning!",
  "ranking": [
    {
      "build_reward": 100,
      "destroy_reward": 1,
      "season_id": 1,
      "total_reward": 101,
      "user": "jarunik"
    },
    {
      "build_reward": 50,
      "destroy_reward": 5,
      "season_id": 1,
      "total_reward": 55,
      "user": "rondras"
    }
  ],
  "start_date": 1564507824,
  "steem_rewards": 3000
}
```

## activateditems

List of activated items on a planet

### Endpoint

`GET /api/activateditems`

### Query Parameters

| Name     |  Type  | Description       |      Required      |
| :------- | :----: | :---------------- | :----------------: |
| user     | string | Steem user        | :white_check_mark: |
| planetid | string | UID of the planet | :white_check_mark: |

### Types

N/A

### Examples

```bash
curl https://api.nextcolony.io/activateditems?user=jarunik&planetid=P-Z5CNNNZTL40
```

```json
[
  {
    "activated_date": 1569091374,
    "blueprint": "scout1",
    "booster": null,
    "coal": null,
    "copper": null,
    "id": "blueprint_11",
    "imgid": "blueprint_11",
    "name": "Scout Athene",
    "ore": null,
    "uid": "BP11-ZPVVI1CX2DS",
    "uranium": null
  }
]
```

## missions

Get missions by different query parameters ordered by the the time the mission is busy until with newest first.

### Endpoint

`GET /api/missions`

### Query Parameters

| Name           |  Type  | Description                                  | Required |
| :------------- | :----: | :------------------------------------------- | :------: |
| user           | string | Steem user                                   |   :x:    |
| mission_type   | string | Type of the mission                          |   :x:    |
| limit          | number | Number of missions to show (default:100)     |   :x:    |
| cords_hor      | number | Horizontal coordinates of origin planet      |   :x:    |
| cords_ver      | number | Vertical coordinates of origin planet        |   :x:    |
| cords_hor_dest | number | Horizontal coordinates of destination planet |   :x:    |
| cords_ver_dest | number | Vertical coordinates of destination planet   |   :x:    |

### Types

N/A

### Examples

```bash
curl http://api.nextcolony.io/missions?user=jarunik&mission_type=upgradeyamato&cords_hor=-154&cords_ver=-241
```

```json
[
  {
    "battles": 0,
    "busy_until": 1570812813,
    "busy_until_return": 1570881933,
    "cords_hor": -154,
    "cords_hor_dest": -154,
    "cords_ver": -241,
    "cords_ver_dest": -241,
    "date": 1570812813,
    "mission_id": "M-Z9ULX1WBEDC",
    "mission_type": "upgradeyamato",
    "result": null,
    "new_item_id": null,
    "new_planet_id": null,
    "new_stardust": null,
    "qyt_coal": 0,
    "qyt_copper": 0,
    "qyt_ore": 0,
    "ships": {
      "yamato": 1
    },
    "user": "jarunik"
  }
]
```

## burnrates

Planet Burn rates in startoshi for bonus and planet type

### Endpoint

`GET /api/burnrates`

### Query Parameters

N/A

### Types

bonus:

- 4 Legendary
- 3 Rare
- 2 Uncommmon
- 1 Common

type:

- 5 Uranium
- 4 Copper
- 3 Ore
- 2 Coal
- 1 Atmothere

### Examples

```bash
curl http://api.nextcolony.io/burnrates
```

```json
[
  {
    "bonus": "4",
    "burnrate": 900000000000000,
    "planet_type": "5"
  }
]
```

## galaxyplanets

Access to all planets for map displays.

### Endpoint

`GET /api/galaxyplanets`

### Query Parameters

| Name  |  Type  | Description                                     | Required |
| :---- | :----: | :---------------------------------------------- | :------: |
| after | string | Timestamp in seconds to only get latest updates |   :x:    |

### Types

N/A

### Examples

```bash
curl http://api.nextcolony.io/galaxyplanets
```

```json
[
  {
    "abandoned": 0,
    "bonus": 1,
    "id": "P-ZP1NCK3755S",
    "name": "Theta",
    "starter": 0,
    "type": 1,
    "update": 1571522143,
    "user": "oliverschmid",
    "x": -167,
    "y": -232
  }
]
```

## asks

Get all sales listing ordered by price

### Endpoint

`GET /api/asks`

### Query Parameters

| Name        |  Type  | Description                                | Required |
| :---------- | :----: | :----------------------------------------- | :------: |
| id          | string | Get a specific listing by uid              |   :x:    |
| uid         | string | Fetch the listing of a specific item       |   :x:    |
| limit       | string | How many items to fetch                    |   :x:    |
| user        | string | Listings of a user                         |   :x:    |
| category    | string | Listings by category                       |   :x:    |
| subcategory | string | Listings by subcategory                    |   :x:    |
| type        | string | Listings by type                           |   :x:    |
| active      |   1    | Filter out all closed listings. `active=1` |   :x:    |
| market      | string | Only get the listing of a specific market  |   :x:    |

### Types

N/A

### Examples

```bash
curl http://api.nextcolony.io/asks
```

```json
[
  {
    "buy_trx": null,
    "cancel_trx": null,
    "category": "item",
    "cords_hor": null,
    "cords_ver": null,
    "date": 1572197088,
    "failed": null,
    "fee_burn": 400000000,
    "fee_market": 400000000,
    "id": "A-Z40PBDTA2J4",
    "market": "jarunik",
    "price": 10000000000,
    "sold": null,
    "subcategory": "blueprint",
    "type": "blueprint_13",
    "uid": "BP13-ZAM4OT0HOCW",
    "user": "jarunik"
  }
]
```

## dailybattles

Get info about top battles of the last 24 hours

### Endpoint

`GET /api/dailybattles`

### Query Parameters

N/A

### Types

N/A

### Examples

```bash
curl http://api.nextcolony.io/dailybattles
```

```json
{
  "loot_attacker": "platuro",
  "loot_date": 1572535590,
  "loot_defender": "curbot",
  "loot_mission": "M-ZSHM0OIJOQO",
  "loot_points": 160.00799560546875
}
```

## missionoverview

Key statistics about a users missions

### Endpoint

`GET /api/missionoverview`

### Query Parameters

| Name |  Type  | Description |      Required      |
| :--- | :----: | :---------- | :----------------: |
| user | string | Steem user  | :white_check_mark: |

### Types

N/A

### Examples

```bash
curl http://api.nextcolony.io/missionoverview?user=jarunik
```

```json
{
  "free_missions": 22,
  "friendly_missions": 0,
  "hostile_missions": 0,
  "max_missions": 22,
  "own_missions": 0
}
```

## lowestasks

Get all the lowest asks per unique price and date.

### Endpoint

`GET /api/lowestasks`

### Query Parameters

N/A

### Types

N/A

### Examples

```bash
curl http://api.nextcolony.io/lowestasks
```

```json
[
  {
    "buy_trx": null,
    "cancel_trx": null,
    "category": "ship",
    "cords_hor": -260,
    "cords_ver": -122,
    "date": "Fri, 08 Nov 2019 12:48:00 GMT",
    "failed": null,
    "fee_burn": 97624000,
    "fee_market": 97624000,
    "id": "A-ZVGCKQ05BGG",
    "market": "null",
    "price": 2440600000,
    "sold": null,
    "subcategory": "Scout",
    "type": "scout",
    "uid": "S-ZCZ6P6LP1PC",
    "user": "famigliacurione"
  }
]
```

## stardusttransfers

Get all stardust transfers of a user.

### Endpoint

`GET /api/stardusttransfers`

### Query Parameters

| Name     |  Type  | Description                                 |      Required      |
| :------- | :----: | :------------------------------------------ | :----------------: |
| user     | string | Steem user                                  | :white_check_mark: |
| after_id | string | Id of the transfer, use 0 to get everything | :white_check_mark: |

### Types

N/A

### Examples

```bash
curl http://api.nextcolony.io/stardusttransfers?user=jarunik&after_id=0
```

```json
[
  {
    "amount": 10,
    "date": 1573215120,
    "from_user": "nc-se-exchange",
    "id": 31924,
    "mission_id": null,
    "to_user": "jarunik",
    "tr_status": 1,
    "tr_type": "transfer",
    "trx": "8cf794d339931191301e2e510ebaacb9da18c282"
  }
]
```

## planetfleet

Get available ships of a planet grouped by type.

### Endpoint

`GET /api/planetfleet`

### Query Parameters

| Name   |  Type  | Description       |      Required      |
| :----- | :----: | :---------------- | :----------------: |
| user   | string | Steem user        | :white_check_mark: |
| planet | string | UID of the planet | :white_check_mark: |

### Types

N/A

### Examples

```bash
curl https://api.nextcolony.io/planetfleet?user=jarunik&planet=P-Z5CNNNZTL40
```

```json
[
  {
    "armor": 8,
    "bullet": 0,
    "capacity": 20,
    "class": "Corvette",
    "consumption": 0.001,
    "for_sale": 0,
    "laser": 0,
    "longname": "Corvette Crocus",
    "quantity": 4,
    "rocket": 2,
    "shipyard_level": 14,
    "speed": 4,
    "structure": 6,
    "type": "corvette",
    "variant": "rocket"
  }
]
```

## planetships

Get available ships of a planet without grouping.

### Endpoint

`GET /api/planetships`

### Query Parameters

| Name   |  Type  | Description       |      Required      |
| :----- | :----: | :---------------- | :----------------: |
| user   | string | Steem user        | :white_check_mark: |
| planet | string | UID of the planet | :white_check_mark: |

### Types

N/A

### Examples

```bash
curl https://api.nextcolony.io/planetships?user=jarunik&planet=P-Z5CNNNZTL40
```

```json
[
  {
    "armor": 8,
    "bullet": 0,
    "capacity": 20,
    "class": "Corvette",
    "consumption": 0.001,
    "for_sale": 0,
    "id": "S-ZG93DFF2VOG",
    "laser": 0,
    "longname": "Corvette Crocus",
    "rocket": 2,
    "shipyard_level": 14,
    "speed": 4,
    "structure": 6,
    "type": "corvette",
    "variant": "rocket"
  }
]
```

## planetshipyard

Get all data needed to build ships.

### Endpoint

`GET /api/planetshipyard`

### Query Parameters

| Name   |  Type  | Description             |      Required      |
| :----- | :----: | :---------------------- | :----------------: |
| user   | string | Steem user              | :white_check_mark: |
| planet | string | UID of the planet       | :white_check_mark: |
| name   | string | Filter to only one type |        :x:         |

### Types

N/A

### Examples

```bash
curl https://api.nextcolony.io/planetshipyard?user=jarunik&planet=P-Z5CNNNZTL40
```

```json
[
  {
    "activated": true,
    "armor": 20,
    "blueprint": 0,
    "bullet": 0,
    "busy_until": null,
    "capacity": 160,
    "class": "Battlecruiser",
    "consumption": 0.0038,
    "costs": {
      "coal": 576,
      "copper": 144,
      "ore": 288,
      "stardust": null,
      "time": 117818,
      "uranium": 72
    },
    "laser": 0,
    "longname": "Battlecruiser Tiger",
    "rocket": 8,
    "shield": 36,
    "ship_skill": 20,
    "shipyard_level": 17,
    "shipyard_min_level": 18,
    "shipyard_skill": 20,
    "speed": 2,
    "structure": 40,
    "type": "battlecruiser",
    "variant": 0,
    "variant_name": "rocket"
  }
]
```

## missioninfo

Get information about available missions.

### Endpoint

`GET /api/missioninfo`

### Query Parameters

| Name   |  Type  | Description       |      Required      |
| :----- | :----: | :---------------- | :----------------: |
| user   | string | Steem user        | :white_check_mark: |
| planet | string | UID of the planet | :white_check_mark: |

### Types

N/A

### Examples

```bash
curl https://api.nextcolony.io/missioninfo?user=jarunik&planet=P-Z5CNNNZTL40
```

```json
{
  "mission_allowed": true,
  "planet_active": 1,
  "planet_max": 7,
  "planet_unused": 6,
  "user_active": 28,
  "user_max": 30,
  "user_unused": 2
}
```
## marketstats

Some statistics about the market.

### Endpoint

`GET /api/marketstates`

### Query Parameters

N/A

### Types

N/A

### Examples

```bash
curl https://api.nextcolony.io/marketstats
```

```json
{
"highest_sale":{"category":"planet","price":25000000000000,"seller":"steembattle","type":"1"},
"items_on_market":103,
"planets_on_market":28,
"ships_on_market":118,
"total_burned":2952996400000,
"trading_volume":54543955000000,
"transaction_number":44
}
```
