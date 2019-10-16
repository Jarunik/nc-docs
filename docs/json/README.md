# JSON

You can use [https://app.steemconnect.com/sign](https://app.steemconnect.com/sign) to try out the NextColony custom JSON's.

## Format

A custom_json command consists of an id and a JSON field. All commands in nextcolony have the same id:

`nextcolony`

The JSON field has the following structure:

```json
{
  "username": "jarunik",
  "type": "dummyaction",
  "command": {
    "tr_var1": "oliverschmid",
    "tr_var2": "rondras",
    "tr_var3": "bronkong",
    "tr_var4": "jarunik",
    "tr_var5": "holger80",
    "tr_var6": "are",
    "tr_var7": "the",
    "tr_var8": "founders"
  }
}
```

| Field      | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| `username` | Steem user for which the command is executed                  |
| `type`     | Game action that should be triggered                          |
| `command`  | List of variables that are used as parameters for the command |
| `tr_var1`  | First variable                                                |
| `tr_var2`  | Second variable                                               |
| `tr_var3`  | Third variable                                                |
| `tr_var4`  | Fourth variable                                               |
| `tr_var5`  | Fifth variable                                                |
| `tr_var6`  | Sixth variable                                                |
| `tr_var7`  | Seventh variable                                              |
| `tr_var8`  | Eighth variable                                               |

The command is applied to the user defined in the `required_posting_auths` field.

## newuser

Creates a new NextColony game account with the provided steem account name.

```json
{
  "username": "holger80",
  "type": "newuser",
  "command": { "tr_var1": "holger80" }
}
```

| Field     | Description     |
| --------- | --------------- |
| `tr_var1` | Steem user Name |

## enhance

Starts learning of a skill which is necessary for building a higher level or being able to build ships.

```json
{
  "username": "holger80",
  "type": "enhance",
  "command": {
    "tr_var1": "holger80",
    "tr_var2": "P-ZN2FTQ9F3W0",
    "tr_var3": "coalmine"
  }
}
```

| Field     | Description                                   |
| --------- | --------------------------------------------- |
| `tr_var1` | Username, who will learn the skill            |
| `tr_var2` | Planet uid from which the resources are taken |
| `tr_var3` | Skill name                                    |

Skill names are:

### Depots and mines

`coalmine, oremine, coppermine, uraniummine, coaldepot, oredepot, copperdepot, uraniumdepot`

### Special buildings

`base, researchcenter, shipyard, bunker, shieldgenerator`

### Booster

`coalbooster, orebooster, copperbooster, uraniumbooster, enlargebunker`

### Ships

`Explorer, Transporter, Corvette, Frigate, Destroyer, Cruiser, Battlecruiser, Carrier, Dreadnought, Scout, Patrol, Cutter`

### Commander

`missioncontrol, structureimprove, armorimprove, shieldimprove, rocketimprove, bulletimprove, laserimprove, regenerationbonus, repairbonus, siegeprolongation`

## upgrade

Upgrades a building.

```json
{
  "username": "holger80",
  "type": "upgrade",
  "command": { "tr_var1": "P-ZN2FTQ9F3W0", "tr_var2": "researchcenter" }
}
```

| Field     | Description                                        |
| --------- | -------------------------------------------------- |
| `tr_var1` | Planet uid for which the building will be upgraded |
| `tr_var2` | Name of the Building to upgrade                    |

### Depots and Mines

`oredepot, copperdepot, coaldepot, uraniumdepot, oremine, coppermine, coalmine, uraniummine`

### Special buildings

`bashipyard, base, researchcenter, bunker, shieldgenerator`

## buildship

Builds a ship in the shipyard if the shipyard and skill level allow it.

```json
{
  "username": "holger80",
  "type": "buildship",
  "command": { "tr_var1": "P-ZN2FTQ9F3W0", "tr_var2": "explorership" }
}
```

| Field     | Description                                 |
| --------- | ------------------------------------------- |
| `tr_var1` | Planet uid for which the ship will be built |
| `tr_var2` | Ship Name                                   |

### Ship Names

`explorership, explorership1, transportship, corvette, frigate, destroyer, cruiser, battlecruiser, carrier, dreadnought, corvette1, frigate1, destroyer1, cruiser1, battlecruiser1, carrier1, dreadnought1, corvette2, frigate2, destroyer2, cruiser2, battlecruiser2, carrier2, dreadnought2,transportship1,transportship2, scout, scout1, scout2, patrol, patrol1, patrol2, cutter, cutter1, cutter2`

## explorespace

Starts a exploration mission, a explorer must be available and ready on the planet.

```json
{
  "username": "holger80",
  "type": "explorespace",
  "command": { "tr_var1": "P-ZN2FTQ9F3W0", "tr_var2": 53, "tr_var3": -317 }
}
```

| Field     | Description                                                                                              |
| --------- | -------------------------------------------------------------------------------------------------------- |
| `tr_var1` | Planet uid from which the explorership starts and the uranium is taken for providing fuel for the flight |
| `tr_var2` | Horizontal space coordinate                                                                              |
| `tr_var3` | vertical space coordinate                                                                                |
| `tr_var4` | Ship name of the explorer to be used                                                                     |

## transport

Transports resources to a location and returns to the start position afterwards.

```json
{
  "username": "holger80",
  "type": "transport",
  "command": {
    "tr_var1": { "frigate": 1, "corvette1": 1 },
    "tr_var2": "P-ZN2FTQ9F3W0",
    "tr_var3": "52",
    "tr_var4": "-321",
    "tr_var5": 15,
    "tr_var6": 15,
    "tr_var7": 15,
    "tr_var8": 15
  }
}
```

| Field     | Description                                                                                                                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tr_var1` | List of ships, either with ships name and quantity `{"transportship": 2, "explorership":1}` or (obsolete) number of transporter which should be used, must be available and ready on the planet |
| `tr_var2` | Planet uid from which the transportship starts and the resources are taken                                                                                                                      |
| `tr_var3` | Horizontal space coordinate of a planet                                                                                                                                                         |
| `tr_var4` | Vertical space coordinate of a planet                                                                                                                                                           |
| `tr_var5` | Amount of coal (can be a positive float or 0)                                                                                                                                                   |
| `tr_var6` | Amount of ore (can be a positive float or 0)                                                                                                                                                    |
| `tr_var7` | Amount of copper (can be a positive float or 0)                                                                                                                                                 |
| `tr_var8` | Amount of uranium (can be a positive float or 0)                                                                                                                                                |

## activate

Activates an item, the effect depends on the item.

```json
{
  "username": "holger80",
  "type": "activate",
  "command": { "tr_var1": "C3-ZSQFKQ5LW9S", "tr_var2": "P-ZN2FTQ9F3W0" }
}
```

| Field     | Description                               |
| --------- | ----------------------------------------- |
| `tr_var1` | Item uid, must be owned by the user       |
| `tr_var2` | Planet uid on which the item is activated |

## giftitem

Gifts an item to another player.

```json
{
  "username": "holger80",
  "type": "giftitem",
  "command": { "tr_var1": "C3-ZUA1B4B7UPS", "tr_var2": "holger.random" }
}
```

| Field     | Description                          |
| --------- | ------------------------------------ |
| `tr_var1` | Item uid, must be owned by the user  |
| `tr_var2` | Username to which the item is gifted |

## giftplanet

Fits a planet including the buildings to another player

```json
{
  "username": "urachem",
  "type": "giftplanet",
  "command": { "tr_var1": "1003", "tr_var2": "dachcolony" }
}
```

| Field     | Description                                                |
| --------- | ---------------------------------------------------------- |
| `tr_var1` | Planet id of the planet that should be gifted              |
| `tr_var2` | Username will receive the planet and will be the new owner |

## deploy

This custom_json will move ships to a new planet and changes the ownership of the ships to the owner of the planet on which the ships have arrived. It is possible to transport resources to the coordinates.

```json
{
  "username": "holger80",
  "type": "deploy",
  "command": {
    "tr_var1": { "transportship": 2, "explorership": 1 },
    "tr_var2": 131,
    "tr_var3": -123,
    "tr_var4": 0,
    "tr_var5": 0,
    "tr_var6": 0,
    "tr_var7": 0,
    "tr_var8": "P-Z5CNNNZTL40 "
  }
}
```

| Field     | Description                                                                                                                                |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `tr_var1` | List of ships, either with ships name and quantity `{"transportship": 2, "explorership":1}` or max 25 UIDs `"S-ZKZHNR9O31C;S-ZRUVBR6EXGW"` |
| `tr_var2` | X Horizontal Destination Coordinates                                                                                                       |
| `tr_var3` | Y Vertical Destination Coordinates                                                                                                         |
| `tr_var4` | Coal Quantity                                                                                                                              |
| `tr_var5` | Ore Quantity                                                                                                                               |
| `tr_var6` | Copper Quantity                                                                                                                            |
| `tr_var7` | Uranium Quantity                                                                                                                           |
| `tr_var8` | Planet uid of origin/start of the deploy                                                                                                   |

The arrival time is determined by the slowest ship. The ownership is changed when the ships have arrived on the destination.

## renameplanet

Rename a planet.

```json
{
  "username": "holger80",
  "type": "renameplanet",
  "command": { "tr_var1": "P-Z8MVHPCCL80", "tr_var2": "MyGreatPlanet" }
}
```

| Field     | Description                                                         |
| --------- | ------------------------------------------------------------------- |
| `tr_var1` | Planet uid, must be owned by the user                               |
| `tr_var2` | New name for the planet (allowed characters: `# . _ - a-z A-Z 0-ß`) |

Spaces are not allowed in the name

## updateshop

Updating the shop parameters by the game admins.

```json
{
  "type": "updateshop",
  "command": {
    "tr_var1": "chest_01",
    "tr_var2": "sales_per_day",
    "tr_var3": "100"
  }
}
```

| Field     | Description                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------ |
| `tr_var1` | Item Id                                                                                                |
| `tr_var2` | Parameter to adapt: `sales_per_day`, `max_supply`, `price`, `coal`, `ore`, `copper`, `uranium`, `name` |
| `tr_var3` | New Amount to set                                                                                      |

This command is only accepted if sent from one of the admin accounts like `nextcolony`

## attack

Attack another planet with a formation of ships to fight and steal resources.

```json
{
  "username": "jarunik",
  "type": "attack",
  "command": {
    "tr_var1": { "corvette": { "pos": 1, "n": 1 } },
    "tr_var2": "289",
    "tr_var3": "-196",
    "tr_var4": "P-Z5CNNNZTL40"
  }
}
```

| Field     | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| `tr_var1` | List of ships, `n`: number of ships, `pos`: position of the ship `1-8` |
| `tr_var2` | Horizontal Coordinates (X)                                             |
| `tr_var3` | Vertical Coordinates (Y)                                               |
| `tr_var4` | Planet uid of origin/start                                             |

It is currently not allowed to send the same ship class in multiple positions.

## cancel

Cancel an outgoing mission.

```json
{
  "username": "jarunik",
  "type": "cancel",
  "command": { "tr_var1": "M-ZYM57GS3GMO" }
}
```

| Field     | Description            |
| --------- | ---------------------- |
| `tr_var1` | Missione uid to cancel |

You can't cancel a mission that is returning from its destination.

## support

Send a fleet to help protect another planet. They will fight against incoming attackers.

```json
{
  "username": "holger80",
  "type": "support",
  "command": {
    "tr_var1": {
      "corvette": { "pos": 1, "n": 2 },
      "transportship": { "pos": 8, "n": 1 }
    },
    "tr_var2": -269,
    "tr_var3": -46,
    "tr_var4": "P-Z8MVHPCCL80"
  }
}
```

| Field     | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| `tr_var1` | List of ships, `n`: number of ships, `pos`: position of the ship `1-8` |
| `tr_var2` | Horizontal Coordinates (X)                                             |
| `tr_var3` | Vertical Coordinates (Y)                                               |
| `tr_var4` | Planet uid of origin/start                                             |

## enable

Activate the Shield Generator to protect resources.

```json
{
  "username": "holger80",
  "type": "enable",
  "command": { "tr_var1": "P-Z8MVHPCCL80", "tr_var2": "shieldgenerator" }
}
```

| Field     | Description   |
| --------- | ------------- |
| `tr_var1` | Planet uid    |
| `tr_var2` | Building Name |

## charge

Charge the Shield generator in order that it can be enabled.

```json
{
  "username": "holger80",
  "type": "charge",
  "command": { "tr_var1": "P-Z8MVHPCCL80", "tr_var2": "shieldgenerator" }
}
```

| Field     | Description   |
| --------- | ------------- |
| `tr_var1` | Planet uid    |
| `tr_var2` | Building Name |

## siege

Send a fleet to besiege another planet. Outgoing missions of the target planet will be blocked.
Your ships will fight against attackers.

```json
{
  "username": "holger80",
  "type": "seige",
  "command": {
    "tr_var1": {
      "corvette": { "pos": 1, "n": 2 },
      "transportship": { "pos": 8, "n": 1 }
    },
    "tr_var2": -269,
    "tr_var3": -46,
    "tr_var4": "P-Z8MVHPCCL80"
  }
}
```

| Field     | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| `tr_var1` | List of ships, `n`: number of ships, `pos`: position of the ship `1-8` |
| `tr_var2` | Horizontal Coordinates (X)                                             |
| `tr_var3` | Vertical Coordinates (Y)                                               |
| `tr_var4` | Planet uid of origin/start                                             |

## breaksiege

Attack another planet with a formation of ships to fight its besiegers.

```json
{
  "username": "jarunik",
  "type": "breaksiege",
  "command": {
    "tr_var1": { "corvette": { "pos": 1, "n": 1 } },
    "tr_var2": "289",
    "tr_var3": "-196",
    "tr_var4": "P-Z5CNNNZTL40"
  }
}
```

| Field     | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| `tr_var1` | List of ships, `n`: number of ships, `pos`: position of the ship `1-8` |
| `tr_var2` | Horizontal Coordinates (X)                                             |
| `tr_var3` | Vertical Coordinates (Y)                                               |
| `tr_var4` | Planet uid of origin/start                                             |

It is currently not allowed to send the same ship class in multiple positions.

## transferstardust

Transfers stardust from one player to another.

```json
{
  "username": "holger80",
  "type": "transferstardust",
  "command": { "tr_var1": 1.0, "tr_var2": "holger.random" }
}
```

| Field     | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| `tr_var1` | Float amount of stardust to be transferred (8 digits after the point) |
| `tr_var2` | Username to which the stardust is gifted                              |

## issue

Issues items into the game. This command will only be accepted from nextcolony or admin users.

```json
{
  "username": "nextcolony",
  "type": "issue",
  "command": {
    "tr_var1": "blueprint_10",
    "tr_var2": 100,
    "tr_var3": "nextcolony"
  }
}
```

| Field     | Description                   |
| --------- | ----------------------------- |
| `tr_var1` | Item to be issued             |
| `tr_var2` | Amount of items to be issued  |
| `tr_var3` | Recipient of the issued items |

### Item Names

`blueprint_01, blueprint_02, blueprint_03, blueprint_04, blueprint_05, blueprint_06, blueprint_07, blueprint_08, blueprint_09, blueprint_10, booster_01, booster_02, booster_03, chest_01, chest_02, chest_03`

## newseason

Creating a new season. This command will only be accepted from nextcolony or admin users.

```json
{
  "username": "nextcolony",
  "type": "newseason",
  "command": {
    "tr_var1": "A strong beginning!",
    "tr_var2": "14",
    "tr_var3": "3000",
    "tr_var4": "0.2",
    "tr_var5": "0.2"
  }
}
```

| Field     | Description                                             |
| --------- | ------------------------------------------------------- |
| `tr_var1` | Season Name                                             |
| `tr_var2` | Length of season in days                                |
| `tr_var3` | Steem Rewards at the end of season                      |
| `tr_var4` | Percent of reward points per yamato kill                |
| `tr_var5` | Percent of reward points transmission per yamato deploy |

## upgradeyamato

Upgrades a yamato ship to the next tier.

```json
{
  "username": "jarunik",
  "type": "upgradeyamato",
  "command": {
    "tr_var1": "P-Z71I6RMOGWW",
    "tr_var2": "yamato1"
  }
}
```

| Field     | Description                |
| --------- | -------------------------- |
| `tr_var1` | Planet uid of origin/start |
| `tr_var2` | Ship to Upgrade            |

## respawn

Gives up the starter planet and respawns it in a new place.
The user will lose his start planet with all ships on it.
The new planet will be a fresh one without building levels.
The skills of the user are retained.

```json
{
  "username": "jarunik",
  "type": "respawn",
  "command": { "tr_var1": "P-Z5OOONZTL40" }
}
```

| Field     | Description                                       |
| --------- | ------------------------------------------------- |
| `tr_var1` | Planet id of the planet that should be rewspawned |

## burn

Burn a planet to harvest stardust.

```json
{
  "username": "jarunik",
  "type": "burn",
  "command": { "tr_var1": "P-Z5OOONZTL40" }
}
```

| Field     | Description                                   |
| --------- | --------------------------------------------- |
| `tr_var1` | Planet id of the planet that should be burned |

## issuestardust

Issues stardust into the game. This command will only be accepted from nextcolony or admin users.

```json
{
  "username": "nextcolony",
  "type": "issuestardust",
  "command": {
    "tr_var1": 100,
    "tr_var2": "nextcolony"
  }
}
```

| Field     | Description                      |
| --------- | -------------------------------- |
| `tr_var1` | Amount of stardust to be issued  |
| `tr_var2` | Recipient of the issued stardust |
