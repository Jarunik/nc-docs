# UID

A UID is a unique id for blockchain items to allow tracability with ease.

## Random UID Generation

As you may know, I'm part of the team working on [NextColony](https://nexctcolony.io), a true blockchain game on steem. A true blockchain game means for us, that our internal database can be deleted and we will be able to reconstruct the exact same game state as before by replaying all broadcasted custom_json and transfer operations. This does also mean that every broadcasted custom_json will be excepted, as long as it is valid (correct syntax, sufficient resources, dependencies were met,...).

In order to allow replay and to have random events, the steem blocks itself will be used to generate a seed for the random generator. Every uid for planets, items, ships and missions will be generated from random numbers that have been seeded by the transaction id of the broadcasted transfer/custom_json. Thus, in a replay, the same random numbers will be generated and as the trx-id and other block ids are not predictable, random events and generated uids are not predictable.

```
import random
import base36
import math
import hashlib

def generateSeed(block_trx, block_id, previous_id):
    seed = hashlib.md5((trx_id + block_id + previous_id).encode()).hexdigest()
    return seed

def generateUid(length):
    number = round((pow(36, length + 1) - random.random() * pow(36, length)))
    return base36.dumps(number).upper()

def set_seed(seed):
    random.seed(a=seed, version=2)

def get_random_range(start, end):
    return math.floor((random.random() * (end-start + 1)) + start)

def uid_from_seed(prefix):
    return prefix+generateUid(10)
```

## How does it work in practice?

We will buy a chest and will gift it. As each item has a uid, I will use the broadcasted transfer in order to predict the uid of the chest.

![tx](./assets/uid-tx.png)

The trx-id for the purchase is `e8d4bf45ba82b16c75fb777d90f2520089bfa5aa` and the block-number is `32060228`. We will use this information to predict the uid of the item:

The prefix of the Huge Chest is C2.

```
from beem.block import Block
block = Block(32060228)
trx_id = "e8d4bf45ba82b16c75fb777d90f2520089bfa5aa"
prefix = "C2-"
seed = generateSeed(trx_id, block["block_id"], block["previous"])
set_seed(seed)
uid_item = uid_from_seed(prefix)
print(uid_item)
```

The result is:

```C2-ZDDAKHIXGYO```

![tx](./assets/uid-generated.png)

The predicted uid is correct and equal to the uid the backend of nextcolony had calculated.

All used random events in NextColony are based on these functions.

## VOPS

When unexplored space is explored during a mission, a new planet can be found. As the explorer has first to flight to the destination, which takes some time, the random numbers will be generated when the explorer will arrive. In nextcolony, we are doing this by using virtual operations. When the explorer is send, a VOPS is written to the database with a block timestamp. The VOPS is then triggered by the first block which has a timestamp which is higher then the stored one. The `block_id` and the `previous` ids are then taken from the block which is triggered by the VOPS.