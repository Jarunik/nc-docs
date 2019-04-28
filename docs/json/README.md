# JSON

You can use https://app.steemconnect.com/sign to try out the custom JSON's.

## Structure

A custom_json command consists of an id and a json field. All commands in nextcolony have the same id:

```nextcolony```

and the json field has the following structure:

```json
{"username":"holger80","type":"newuser","command":{"tr_var1":"holger80"}}
```

where `username` is the username (currently not used and can be skipped).
type defines the command `type` and `command` consists of a dict with the keys `tr_var1` to `tr_var8`.
The command is applied to the user defined in the `required_posting_auths` field.

## newuser

```json
{"username":"holger80","type":"newuser","command":{"tr_var1":"holger80"}}
```

Creates a new game account with the steem account name.
The command uses one field:

- `tr_var1`: steem username

## enhance

```json
{"username":"holger80","type":"enhance","command":{"tr_var1":"holger80","tr_var2":"P-ZN2FTQ9F3W0","tr_var3":"coalmine"}}
```

Starts learning of a skill which is necessary for building a higher level or being able to build ships.

- `tr_var1`: username, who will learn the skill
- `tr_var2`: planet uid from which the resources are taken
- `tr_var3`: skill name

Skill names are:

### depots and mines

```coalmine, oremine, coppermine, uraniummine, coaldepot, oredepot, copperdepot, uraniumdepot```

### special buildings

```base, researchcenter, shipyard```

### booster

```coalbooster, orebooster, copperbooster, uraniumbooster```

### ships

```Explorer, Transporter, Corvette, Frigate, Destroyer, Cruiser, Battlecruiser, Carrier, Dreadnought```

### commander

```missioncontrol```

## upgrade

```json
{"username":"holger80","type":"upgrade","command":{"tr_var1":"P-ZN2FTQ9F3W0","tr_var2":"researchcenter"}}
```

### depots and mines

```oredepot, copperdepot, coaldepot, uraniumdepot, oremine, coppermine, coalmine, uraniummine```

### special buildings

```shipyard,  base, researchcenter```

## buildship

```json
{"username":"holger80","type":"buildship","command":{"tr_var1":"P-ZN2FTQ9F3W0","tr_var2":"explorership"}}
```

Builds one ship when the conditions (resources, no other ship is build, shipyard level and ship skill level) are met.

- `tr_var1`: planet uid from which the resources are taken and on which the ship is build
- `tr_var2`: ship name
- 
Possible ship names are:

```explorership,  transportship, corvette, frigate, destroyer, cruiser, battlecruiser, carrier, dreadnought``` 

## explorespace

```json
{"username":"holger80","type":"explorespace","command":{"tr_var1":"P-ZN2FTQ9F3W0","tr_var2":53,"tr_var3":-317}}
```

Starts a exploration mission, a explorer must be available and ready on the planet.

- `tr_var1`: planet uid from which the explorership starts and the uranium is taken for providing fuel for the flight
- `tr_var2`: horizontal space coordinate
- `tr_var3`: vertical space coordinate

## transport

```json
{"username":"holger80","type":"transport","command":{"tr_var1":2,"tr_var2":"P-ZN2FTQ9F3W0","tr_var3":"52","tr_var4":"-321","tr_var5":15,"tr_var6":15,"tr_var7":15,"tr_var8":15}}
```

Transports resources to a location and returns to the start position afterwards.

- `tr_var1`: number of transporter which should be used, must be available and ready on the planet
- `tr_var2`: planet uid from which the transportship starts and the resources are taken
- `tr_var3`: horizontal space coordinate of a planet
- `tr_var4`: vertical space coordinate of a planet
- `tr_var5`: amount of coal (can be a positive float or 0)
- `tr_var6`: amount of ore (can be a positive float or 0)
- `tr_var7`: amount of copper (can be a positive float or 0)
- `tr_var8`: amount of uranium (can be a positive float or 0)

## activate

```json
{"username":"holger80","type":"activate","command":{"tr_var1":"C3-ZSQFKQ5LW9S","tr_var2":"P-ZN2FTQ9F3W0"}}
```

Activates an item, the effect depends on the item.

- ```tr_var1```: item uid, must be owned by the user
- ```tr_var2```: planet uid on which the item is activated

## giftitem

```json
{"username":"holger80","type":"giftitem","command":{"tr_var1":"C3-ZUA1B4B7UPS","tr_var2":"holger.random"}}
```

Gifts an item to another player.

- `tr_var1`: item uid, must be owned by the user
- `tr_var2`: username to which the item is gifted

## giftplanet

```json
{"username": "urachem", "type": "giftplanet", "command": {"tr_var1": "1003", "tr_var2": "dachcolony"}}
```

- `tr_var1`: planet id of the planet that should be gifted
- `tr_var2`: username will receive the planet and will be the new owner

## deploy

This custom_json will move ships to a new planet and changes the ownership of the ships to the owner of the planet on which the ships have arrived. It is possible to transport resources to the coordinates.

```json
{"username":"holger80","type":"deploy","command":{"tr_var1":{"transportship": 2, "explorership":1} ,"tr_var2": 131, "tr_var3": -123, "tr_var4": 0, "tr_var5": 0, "tr_var6": 0, "tr_var7": 0 "tr_var8": "P-Z5CNNNZTL40 "}}
```

- `tr_var1`: List of ships, either with ships name and quantity `{"transportship": 2, "explorership":1}` or max 25 UIDs `"S-ZKZHNR9O31C;S-ZRUVBR6EXGW"`
- `tr_var2`: X Destination Coordinates
- `tr_var3`: Y Destination Coordinates
- `tr_var4`: Coal Quantity
- `tr_var5`: Ore Quantity
- `tr_var6`: Copper Quantity
- `tr_var7`: Uranium Quantity
- `tr_var8`: Source Planet UID

The arrival time is determined by the slowest ship. The ownership is changed when the ships have arrived on the destination.



## renameplanet

```json
{"username":"holger80","type":"renameplanet","command":{"tr_var1":"P-Z8MVHPCCL80","tr_var2":"My Great Planet"}}
```

- `tr_var1`: planet uid, must be owned by the user
- `tr_var2`: new name for the planet (allowed characters: `# . _ - a-z A-Z 0-ß`)

## updateshop

```json
{"type": "updateshop", "command": {"tr_var1": "chest_01", "tr_var2": "sales_per_day", "tr_var3": "100"}}
```

- `tr_var1`: Item ID
- `tr_var2`: Parameter to adapt: `sales_per_day`, `max_supply`, `price`, `coal`, `ore`,  `copper`, `uranium`, `name` 
- `tr_var3`: New Amount to set

This command is only accepted if sent from one of the admin accounts like `nextcolony`