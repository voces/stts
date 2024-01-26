# TODO

- Start shouldn't reroll president
- Delay spawn of host farm by 0.25 seconds or something?
- -qd might still be busted? Maybe add events that emit death times each death (dying, killing, time in round)
- Frost farm killing ward crashes?

# 23e

## Feature changes

- Added Scepter of Mastery
- Removed zoom constraints. Reforged introduced scroll wheel zooming and I'm not going to fight it.
- Kaleidoscope changes
  - Starts with 3 stacks
  - Each stack increases damage multiplier by 9% (effective 25% -> 27%)
- Drecreased default wolf respawn time in switch from 10 seconds to 3 seconds
- Switch changes
  - Now displays time as sheep if there isn't a target number of wisps
  - Can specify a winning time. E.g., "-switch 2:30" or "-switch 3 1 5 2:30"
  - Decreased default wolf respawn time from 10 seconds to 3 seconds
- Smart remembers and uses that last number of specified sheep if not specified
- Now show "last" automatically
- Games messsages no longer cleared when the round starts for wolves after the first round
- Esc hides/shows leaderboard when Start position unit is selected
- Remove Start position unit healthbar
- Added -handicap all X
- Removed sheep mana
- Updated Hide/Show icon
- Added -buy ball alias for -buy crystal; comes after boots (so -b b gets boots)

## Balance changes

- Increased movement speed cap from 450 (boots + speed = 453, + endur = 458)
- Decreased cost of Suppression Field from 135 (175) to 100 (140)
- Decreased cost of Gem of True Seeing from 65 (91) to 40 (56)

## Bug fixes

- Fixed missing runes
- Fixed -reset
- Fixed -g X not prioritizing X for allies when they use "g"
- Fixed -b bril erroring
- Fixed -pc X
- Refactored -qd logic a bit to hopefully fix
- Added missing commands to Quests
- Fixed -g all erroring

# 23d

## Bug fixes

- Kaleidoscope fixes
  - Properly removes item after use
  - Image is correctly disabled and renabled
  - Only targets living images
  - Wolf no longer wanders off when casting
  - Wolf is disabled during the last 0.5 seconds of casting
- Fixed an exception that occurs when Player 24 saves

# 23c

## Feature changes

- Position changes
  - Added -randomspawn
  - Added -freespawn
  - -position does not allow stacking spawns
- Kaleidoscope can be consumed to swap places with your illusion
- Captains will always be president in -versus (not -captains)
- -z without arguments now prints your zooms

## Bug fixes

- Fixed -president being toggleable by anyone
- Fixed -president not disabling
- Fixed -pc
- Fixed -qd

# 23b

## Feature changes

- President changes
  - President will no longer be a pub
  - President now has default gold priority for sheep
  - When wisp uses "g" when president mode enabled, uses -g instead of -gsa
  - Rounds will no longer ever be emitted (for elo) if president mode enabled
  - -president now changes to default % when toggling when % is not default %
- Gold giving changes
  - When sheep double tabs "g", now uses -g instead of -gsa
  - Selecting an allied sheep or wolf gives them temporary priority for "g" for the selecting player. If gold is
    transferred, they are given extended priority.
  - -g X Y gives Y gold to player X (previously had to go -X Y)

## Bug fixes

- Fixed -zoom
- Fixed spawns
- Fixed sheep "g"
- Fixed -qd
- Fixed trees not regrowing after 45 seconds
- Fixed incorrect -gold message

# 23a

## Bug fixes

- Fixed the map
- Fixed gold income on sheep death

# 23

## Feature changes

- Added -president
- Translocation Farm changes
  - Translocate now costs 10 mana
  - After initial translocate, sheep can translocate by approaching Translocation Farm
  - Translocation Farm starts with 15 mana of a maximum 50 mana
  - Translocation Farm generates 1 mana per second
- Gold bounty text is now collated
- Wolves have increased movement speed at spawn during switch; effect disappears when near a sheep
- Can now return players with -fafk
- Added wisp to -practice (so Bulldog can practice)
- Nudged wolf and rune spawn points to be more symmetric
- -start X, -restart X, and -reverse X adjust sheep based off SC
- Removed -random
- Smart prevents repeated sheep rounds in 1vX
- Modified Sheep model to accept team color instead of setting vertex colors

## Balance changes

- Decreased wisp pen size to prevent secured saves
- Decreased Sheep damage point from 0.4 seconds to 0.3 seconds
- Illusions benefit from Scythe

## Bug fixes

- Fixed hotkeys in grid mode
- Added extended text for Kaleidoscope
- Perfect smart automatically disables if it results in unbalanced SC
- Players returning for -afk have their SC set to the highest SC, excluding pubs
- Pubs correctly cycle
- Updated Quests with missing commands
- Disabled creep camps (Snowman) showing up on minimap

## Source changes

- Converted to TypeScript

# 9.5.4

## Bug fixes

- Player 13 is no longer a computer

# 9.5.3

## Feature changes

- Christmas edition
- Added -farmvision X

## Balance changes

- Eye-Stick bounty increased from 3 to 4
- Eye-Sticks pop on death, harming other wards

# 9.5.2

## Bug fixes

- -u no longer desyncs

# 9.5.1

## Bug fixes

- -u no longer impacts other players

# 9.5.0

## Feature changes

- Fall edition
- Mirror images now deal 25% damage to farms (0% to sheep)
- Added Kaleidoscope
- Added War Club
- Added a third shop
- Money Farms now generate #wolves/#sheep gold every 10 seconds
- Renamed buy command for Crystal Ball from "ball" to "crystal"
- Added -noautocontrol
- -u reselects units after unstucking

## Bug fixes

- Fixed quest icons
- Fixed some items that still had Christmas models
- Host Farm removed when using -captains and -versus during first draft and intermission
- -disable no longer triggers -d
- Fixed -u bug in switch when wolf kills sheep with quick shop open

# 9.4.3

## Bug fixes

- Fixed terrain offset
- Fixed Field of Suppression extended tooltip

# 9.4.2

## Feature changes

- Summer edition

# 9.4.1

## Feature changes

- Removed lights from Farm

# 9.4.0

## Feature changes

- Christmas edition
  - Winter terrain
  - Decorated farms, trees, shops, and the pen
  - Added a snowman
- Replaced Illusion Farm with Sentry Farm in build menu
- Replaced Sentry Farm with Illusion Farm as a Farm upgrade
- Changed Frost Farm hotkey from G to F
- Changed Invisible Farm upgrade hotkey from X to G
- Changed Give Allies Gold (sheep) hotkey from J to G

## Balance changes

- Increased gold cost of Sentry Farm from 8 to 12
- Increased build time of Sentry Farm from 3 to 4 seconds
- Suppression Field now doubles damage against Strong Farm

## Bug fixes

- Fixed -atimes

# 9.3.7

## Bug fixes

- Fixed Katama's blunder

# 9.3.6

## Bug fixes

- Fixed perfect only working when using rotate
- Fixed -atimes conflicts with -reset and -afk

# 9.3.5

## Bug fixes

- Fixed blue being a computer

# 9.3.4

## Feature changes

- Improved perfect smart to avoid repeat sheep every 5 sc
- -last (-l) now shows who the sheep were
- Pubs no longer receive control from autocontrol or -call
- Team sizes are now stable with pubs. 2v4+1p -> 3v4. 2v4+2p -> 3v5. 2v4+3p -> 4v5
- Pressing ESC restores Angle of Attack
- Added -clear, which clears game messages

## Bug fixes

- Fixed an issue where -last would be 0 after cancel
- Fixed an issue where leader/loser could set in practice
- Fixed an issue with pubs leaving still being drafted
- Fixed an issue with perfect smart being enabled when using rotate
- Fixed Host Farm not transfering when AFKing or leaving
- Fixed showing LSS message in 1vN

# 9.3.3

## Feature changes

- Leaderboard show/hide state preserved between rounds
- Wolves no longer spawn with items

## Bug fixes

- Fixed sheep count showing up as zero for some sheep on leaderboard
- Fixed -teamresources not properly twinning "Z" hotkey
- Fixed timer window/resource board/leaderboard positioning after wolf spawn
- Fixed wisps (ownership/visibility) in switch

# 9.3.2

## Feature changes

- Removed Sheep Locater from Shop (can still purchase with -buy sheep)
- Added Suppression Field
- Separated sheep gold given and spirit gold given stats
- Added Give Allies Gold (J) to Sheep
- Added -teamresources, which controls when the Team Resources multiboard is displayed (persisted)
- Added -l shorthand for -last
- Added -s shorthand for -sell
- Removed intermission timer

## Bug fixes

- Fixed -transfer not transfering Host Farm
- Fixed -atimes reporting incorrect average for currently playing sheep
- Fixed an issue where starting immediately after cancelling could result in duplicate sheep
- Fixed -practice mode not defaulting to 2 hours
- Fixed Esc hide/showing leaderboard when canceling allied farms

# 9.3.1

## Feature changes

- Swapped hotkeys for Illusion Farm (now C) and Translocation Farm (now E)
- Made slight adjustments to Translocation Farm jumping

## Bug fixes

- Host Farm removed no matter how the round is started
- Host Farm changes ownership with transfer
- Fixed -times and -time collision
- Can no longer share control with AFK players
- Perfect smart better handles canceling

# 9.3.0

## Feature changes

- Sentry Farm
  - Removed from Sheep build menu
  - Added to Farm upgrade list
  - Decreased price from 12 to 8
  - Decreased build time from 4 seconds to 3
- Money Farm
  - Removed from Sheep build menu
  - Added to Farm upgrade list
- Added Illusion Farm to Sheep build menu
- Added Translocation Farm to Sheep build menu
- Added perfect 2v4 smart (including -perfect and -perfect!)
- Added -rotate
- Added -atimes
- Added Host Farm, allowing -smart, -start, -time, and -practice without typing
- Buy command now matches the first possible item ("-b s" -> "-buy sheep")
- Simplified Hills of Glory terrain
- Using -pc without an argument shows your own partner count
- Added w3mmd variables Sheep Gold Given and Wolf Gold Given

## Balance changes

- Decreased Shepherd movement speed from 420 to 410

## Bug fixes

- Fixed an issue with sheep not being able to see some allies (again)
- Fixed pc not decrementing when canceling
- Fixed w3mmd variable Times not being correctly emitted

# 9.2.5

## Bug fixes

- Control is no longer revoked from allies if given before spawning (again)
- Fixed -g lag spike

# 9.2.4

## Feature changes

- A sound is played when you receive gold via g
- Updated -g to deprioritize sending gold back and forth

## Bug fixes

- Fixed sheep not receiving initial gold when using -gold

# 9.2.3

## Feature changes

- Adjusted automatic round time to be more aggressive

## Bug fixes

- Fixed an issue with sheep teams not forming correctly

# 9.2.2

## Feature changes

- Rewrote -g to equalize who receives gold
- Added host command -sc X Y, which sets player X's sheep count to Y

## Bug fixes

- Fixed qd to not tracking properly
- Fixed -pub flagging the wrong player as a pub
- Fixed AFK players not receiving view
- Fixed -g giving gold to pubs/leavers
- Fixed an issue with view persisting
- Removed Give Ally Gold from wolf in practice mode
- Removed Share Control from sheep in practice and switch
- Disabled autocontrol in practice and switch

# 9.2.1

## Bug fixes

- Fixed autocontrol giving control to wolves

# 9.2.0

## Feature changes

- Added -autocontrol, which grants allied sheep control upon spawn (persists between games)
- Added "Give Ally Gold" ability to wolf, which is equivalent to -g
- Change -smart default to half the number of players minus 1 (2v4, 3v5, 4v6)
- Typing "g" sets top priority for -g
- Made "-b" a shorthand for "-buy"
- Added -qds, which shows everyone's qd
- Added -pub #, which removes them from the drafting stage of -smart
- Pressing "Esc" while waiting for your sheep to spawn snaps camera to spawn location
- Time commands display stats immediately with no wait (except if player count
  > 12.

## Balance changes

- Disabled Nuke recipe when only one sheep remains
- Central trees in Revo terrain regrow 45 seconds after death

## Bug fixes

- Changed defunct tiny.cc urls to dsc.gg urls
- Made -g not case-sensitive
- Deprioritized "-g" giving gold to spirits
- Fixed -smart X setting everyone to AFK when X is too large
- Changed auto cancel on empty team to cancel instead of win

# 9.1.2

## Feature changes

- Further smoothed Hills of Glory
- Opened up water areas for building
- Adjusted doodads on Hills of Glory so pathing is clearer
- Time fixes when returning from -practice
- Map preview shows all terrain
- Fixed -u bug for when sheep dies
- Rounds are voided if someone leaves
- Removed setup and set times from w3mmd

## Balance changes

- Various Eye-Stick related changes
  - Increased Eye-Stick range against structures from 192 to 200
  - Increased Sheep health regeneration from 0 to 0.25
  - Sheep no longer flee when attacked
- Decreased Upgraded Aura Farm gold cost from 40 to 30

## Bug fixes

- Fixed distributing bounty to wolves when a sheep is killed
- Fixed -g not prioritizing players who were golded
- Removed rain around middle on Hills of Glory

# 9.1.1

## Feature changes

- Smoothed mid top on Hills of Glory
- Added -restart, which combines -cancel and -start
- -g ignores messages that start with -
- Simplified automatic unstuck logic

## Bug fixes

- Fixed camera snapping to wrong place on Hills of Glory

# 9.1.0

## Feature changes

- Added a second terrain, accessible via -terrain; unranked
- Added -g command, which gives gold Intelligently
- Sheep units are automatically deselected if they are an ally you can control
- Default times simplified and set at initialization; 2v4 changed from 5 minutes to 6 minutes
- Loaded zooms displayed at start. -c alias removed
- Moved updating setup and set times to round end rather than wolf spawn
- Enabled Eye-Stick attack: 1 against Sheep, 10 against structures
- Aura Farm (Regeneration) now targets Sheep
- Decreased follow distance from 300 to 0
- Balance adjustments
  - Increased Brilliance Aura (Item) mana regeneration increase from 2.15 to 2.5
  - Increased Nuke impact delay from 0.125 to 0.3 (compared to 0.25 on Bomber)
  - Decreased Nuke damage from 150 to 120 (compared to 50 on Bomber)
  - Decreased Speed attack speed increase from 25% to 15%
  - Increased Gloves attack speed increase from 33% to 35%
  - Increased Velocity attack speed increase from 33% to 35%
  - Increased Boots movement speed bonus from 25 to 30
  - Increased Money Farm hit points from 15 to 120
  - Increased Money Farm build time from 1 second to 10 seconds (still grants gold while building)
  - Increased Rock Golem damage base from 39 to 44
  - Increases wisp pen size (traced on Dec 5th, 2023)

## Bug fixes

- Fixed -u bug
- Control is no longer revoked from allies if given before spawning
- Zoom commands only trigger if the command is the first word

# 9.0.9

## Bug fixes

- Giving control to specific players via -c no longer changes zoom
- Wisp zoom properly loads
- w3mmd changes
  - round events are emitted as they end
  - "end" event added
  - Various spec fixes
    - Skip emitting values for computer
    - Cap string length limits for setup

# 9.0.8

## Bug fixes

- Reverted -afk changes; can no longer go afk mid-round
- Fixed -gs and -gsa giving gold to AFK players
- If an AFK person does -call, other players doing -call no longer gives the AFK player control
- Handicap lowerbound changed to 23
- Players can now set their own handicaps if it's 100 or less

# 9.0.7

- Quality of life changes
  - Gold reverts to 0 after practice
  - Added -gs and -gsa commands, which distributes gold to those in most need
  - Added ability to wisp to -gsa
  - The original host can -transfer
  - Host can cancel mid-round
  - Added grid-based terrain guides around pen
  - Cleaned up hotkey descriptions
  - ESC restores zoom to current settings
  - Zoom is persisted between games (removed hardcoded values)
  - Zoom shortcuts added (-z 21 -> -z 2100)
  - Added shortcut to sheep to share control with allies

## Bug fixes

- Fixed -gold related bugs
- Default round times fixed
- Can no longer give 0 gold with -# #
- Coming back from AFK only increases SC if a round has ended
- Fixed ambiguity in reporting rounds in w3mmd by using events with more detail
- Added -handicap X Y command, which allows the host to set player X's handicap to Y%
- Added total farms command (-tf), which displays the total number of farms everyone has built

# 8.1.4

- Versus and Captains multiboard fixed
- Fixed bug with back-to-back str pots
- Re-added 3rd ramp middle top
- Fixed pathing top right
- Bomber shop price reduced 65 -> 55
- Drums price reduced 190/150 -> 175/135
- Updated and cleaned up various descriptions of items/abilities
- Added Discord link to description, game info, and round text

# 8.1.1

- Terrain Changes upper and bottom middle
- Water is now blue no more angry red
- Fixed bug where lasting the whole round didn't count towards leader/times

# 8.1.0

- Anti Stack Stomp has been removed
- Stack farm gold cost changed from 12 to 15
- Stack farm build time changed from 1 to 3
- Stack farm armor changed from 3 to 0
- Stack farm health changed from 40 to 20
- Wolf passive gold generation changed from 2 to 1.75
- Endur movespeed bonus changed from .03 to .02
- Wolf base mana regen changed from .55 to .70
- Scythe gold cost changed from 42/58 to 80/112
- Fixed timer bug for switch/practice modes
- Added '-expand' the map will start covered in blight that disappears in increments
- Added '-shrink' the map will become covered in blight over increments
- Changed max zooms for Sheep/Wolf/Wisp from 2400/2700/3350 to 3350/3350/3350
- Total wolf names changed from 4 to 24
- Fixed typo in Boots item description -buy boots:112 -> -buy boots: 112
- Replaced the word 'shepherd' with 'wolf' in Beam item description
- Adjusted peach and wheat spawn positions

# 7.7.3

- Fixed fence flashing at top and bot fences
- Minor terrain tweaks
- Fix g all bug when someone leaves
- Strong farm cost reduced to 12 from 16
- Beam now has a max damage of 480

# 7.6.5

## Sentry farm

- Mana max reduced to 200 from 250
- Far sight hotkey changed to F from Q

## Rune Changes

- Rune of Omniscience reveals entire map for wolves for 6 seconds does not reveal invisible units
- Runes of invis/speed now spawn 1:30 into the game
- Runes of Mana/Omniscience spawn 3:00 into the game
- Rune of Mana now restores 150 from 200
- All runes respawn 4:00 after they have been used

## Commands

- -sexy now starts off
- Added -no sexy and -yes sexy to turn -sexy on/off
- -freak toggles your hotkeys to XGD/DRE for wolf abilities

## New Mode Practice

- -practice creates a sheep/wolf for everyone sheep has 1000000hp
- -a orders your wolf to attack your sheep
- -s stops your wolf
- -owner toggles control of the wolf for you on/off
- -mass X allows all sheep to mass for X seconds to see how many farms they can get

## Other

- Fixed a lot of leaks mostly player group leaks
- Smoothed top terrain back to its original
- Slight terrain changes
- Changed interface icons
- Updated quests

# 7.6.4

- Changed terrain some more
- Added Rune of Mana restores 200 mana for all wolves
- Added far sight back to sentry 1200 AOE/125 mana/5 sec duration hotkey Q
- Gave golems 1 item slot
- Moved top fence up 1/2 a space
- Wisp speed reduced to 190 from 200
- Refund factor for upgrades is now the same as regular construction .9
- Upgraded Farms can no longer be 1 shot without claws
- Illusions can now regen mana

# 7.6.2

## Farms

- Added invisible upgrades for Hard/Wide/Tiny farm 8 gold each
- Frost Farm build time decreased to 6 from 8
- Frost Farm attack speed reduced to 2.75 from 2.5

## Items

- Endurance aura movespeed bonus reduced to 3% from 5%
- Brillance aura now global like Endurance aura
- Brillance aura gives 2.15 mana regen from 2.0
- Sobi Mask mana regen increased to 2.65 from 2.5

## Commands

- -ts displays total saves of all players
- -tk displays total kills of all players
- -sexy # # # changes the red, green, blue values of your sheep

## Other

- Changed terrain a bit
- Shop range increased to 600 from 500
- Fixed Green icons for the people using only RoC
- Fixed necklace hotkey to S since crystal ball was added as C

# 7.4.1

- Versus is back to time 20 for both teams
- Fixed a bug with wards
- Changed the cost of cloaks from 120/160 to 140/180
- Added the following commands
  - -points Displays everyones versus points. Everyone on the winning team gets 1 point, winning captain gets 2.
  - -last Displays the last round time
  - -qd Displays the "Quickest Death" in the game thus far

# 7.4.0

- Beam cost increased to 80/112 from 70/98
- cast time on farsight increased from 0 to .50
- New Item Redbull increases movespeed by 18% for 3 seconds comes with 3 charges. Cost 30/42 gold

# 7.3.9

- Added Stack farms cost 12 gold
- Added Anti stack stomp
- Removed sheep crown and added sheep cape
- Wolf mana increased from 500 to 600

# 7.3.8

## Last Sheep Standing Feature

- Last sheep standing now gets stack farm if the sheep saves stacks are disabled again
- Stack farm gold cost reduced to 5 from 10
- Strong Farm hotkey changed to D
- Frost farm back to being made by upgrading regular/upgraded/strong farms
- New command -lss displays the # of last sheep standing's for every player

# Versus Changes

- Versus timer for team 2 is now 1 second longer then what team 1 lasted
- Captains in Versus/Captains mode now get a kings crown on their sheep

# Other changes

- Runes back to 5 hits to kill
- Starting gold values no longer reset (meaning you dont have to type -gold every time)
- Stacks are enabled in switch mode

# 7.3.7

## General

- Food is now the counter for money farms
- Fixed a bug with wolf auras not working on allies and golems

## Runes

- Runes die in 2 hits instead of 5
- Runes initial spawn is random between 45-75 seconds

## Farms

- Removed Stack Farm
- Frost back on build menu hotkey V
- Basic farm no longer upgrades into frost farm
- Strong farm hotkey changed back to S from D

## Abilities

- Removed anti stack stomp

# 7.3.6

## Farms

- Sentry true sight increased to 1500 from 1300
- Sentry build time reduced to 4 seconds from 6
- Sentry mana initial amount increased to 110 from 75 and mana max to 250 from 200
- Savings Farms back to original size and are now gold

## Abilities

- Sheep Illusion mana cost increased to 150 from 100
- Sheep Illusion bounty increased to 50 from 25

## Items

- Necklace of Spell Immunity no longer interferes with wolf aura items
- Blizzard waves reduced to 4 damage increased to 60
- Bomber cost reduced to 40/60 from 50/70
- Cloak of flames damage increased to 15 from 12

## Commands

- -g all now completely gives all your gold
- -reset now also resets times

## Runes

- Now spawn 1 minute into the round instead of 42 seconds
- Can now be killed by sheep in 5 hits if they are killed they will not respawn for the remainder of that round

# 7.3.5

- Killing Sheep Illusion now grants 25 bounty also procs scythe

Reason: Need to punish sheep for spamming illusions

- Savings farm now same size as a normal farm

Reason: So you don't have to worry so much about hiding savings farms

- Far Sight mana cost increased to 125 from 100 and cooldown reduced to 0 from 20
- Anti Stack Stomp mana cost increased to 125 from 100 and cooldown reduced to 0 from 20
- Invulnerability cooldown reduced to 0 from 20

Reason: If you have the mana you should be able to use the ability.

# 7.3.3-4

- Runes should now be visible to RoC only players

They couldn't see the runes

- Fixed starting zoom bug

Was at 1600 for some reason

- Remove Red Lines in pen

Looked like shit for RoC only players

- Blizzard damage increased to 24 from 20 and numbers of waves reduced to 5 from 6

Took absurdly long to casting all waves

# 7.3.2

- Bomber damage reduced to 50 from 59

Wolves were able to 1 hit farms after a bomber hit them

- Wolf attack speed reduced to 1.75 from 1.5

Wolves cutting was a bit to fast, this also makes gloves more important rather than consumables

- Integrated losers with -leader

Now you just type -leader instead of both

- You can now move after you cast anti stack stomp without canceling the ability

The effect is just delayed slightly instead

- Changed hotkey of Anti Stack Stomp to D

Feels better on a qwerty keyboard

- Updated quests

Missing a few commands

# 7.3.1

## Fixes

- Bug with anti stack stomp when a player uses it on a sheep that already has the effect

## Abilities

- Anti Stack Stomp effect kicks in when the spell finishes casting instead of begins casting so you have to finish
  casting the ability before you move in order for it to take effect
- Anti Stack Stomp AoE increased to 300 from 275
- Sheep illusion now only allows 1 sheep illusion per player
- Sheep illusion duration reduced to 60 from 90
- Sheep illusion mana cost reduced to 100 from 150

## Farms

- Reduced stack farm model size
- Stack Farm gold cost reduced to 10 from 12

## Items

- Gloves of haste cost increased to 80/112 from 70/98
- Reworked claws so they should work like previous claws for 1 hit and strong 1 hit. As well as strong 2 hit
- Claws +60 is now claws +45
- Claws +21 is now claws +16
- Claws +9 is now claws +8

## Claws +192 Recipe rework

- Is now claws +90
- Recipe now requires only 2xClaws +45 instead of 4

## General

- Runes intial spawn is 60 seconds instead of wolf spawn
- Wolves spawn instantly in switch

# 7.3.0

## Fixes

- A bug where -ds would still remove savings from your farm count
- A bug where mirror images could kill farms with cloak of flames
- A bug with humiliation
- A bug with str pot kills
- A bug where -cancel would set everyone afk
- A bug where versus would display incorrect round times
- A bug where sharing units as sheep would be removed when wolves spawned
- A bug where any user could reset the leader and loser
- A typo when you couldn't afford bomber from quick shop

## Items

- Cloak of Flames gold cost reduced to 120/160 from 140/180
- Claws of Attack +60 is now Claws of Attack +48
- Claws of Attack +240 is now Claws of Attack +192
- Claws of Attack +192 Recipe cost reduced to 100/140 from 140/180
- buy 3c/4c/5c removed
- Iron golem gold cost increased to 120 from 100

## Farms

- Savings farm gold cost returned back to 30 from 26
- Sentry initial mana increased to 75 from 0
- Sentry mana regen increased to 2.5 from 2
- Sentry max mana increased to 200 from 150
- Sentry true sight reduced to 1300 from 1800
- Invisibility Farm is now Magic Farm
- Magic Farm now has Sheep Illusion as an ability
- Magic Farm mana regen increased to 3.5 from 2.5
- Changed hotkey of magic farm to G
- Changed hotkey of strong farm to D
- Normal Farm now upgrades into frost farm hotkey G

## Stack Farm Return

- Can't be built mid
- Cost 12 gold
- Bounty 4 gold
- 40 HP and hotkey S

## Abilities

- Invulnerability duration reduced to 6 seconds from 8

### New ability Sheep Illusion

- Creates an illusion of a targeted sheep that lasts 90 seconds
- hotkey S
- Costs 150 Mana

### New Ability Anti Stack Stomp

- Slams the ground disabling stack farms from nearby sheep build menu for 4 seconds
- Hotkey T cost 100 mana 20 second cooldown AoE of 275

# Runes

- Power ups that respawn every 4 minutes they are consumed
- Initially spawn when the wolves spawn
- Cannot be killed by sheep

## Rune of Invisibility

- Spawns on the left side of the pen
- Makes the user invisible for 45 seconds

## Rune of Speed

- Spawns on the right side of the pen
- increases the users movespeed by 5%
- lasts 45 seconds

## General

- Sheep now have true sight range 700
- Sheep now recieve gold every 1.30 seconds instead of 2
- Pen is now blight instead of unbuildable
- Took multikills out of game (Sound effects took up to much memory)
- Increased wolf damage to 147 from 99
- Increased wolf spawn time to 18 seconds from 13
- Round timer does not begin till wolves spawn
- Versus is now automatically time 20 for both teams
- New command -loser Opposite of -leader it displays the team with the worst time

# 7.2.8-9

## Fixes

- Claws of Attack +240 actually gives gold back now when using the -sell cmd
- Fixed an issue that caused times to add incorrectly
- Fixed an issue that caused the last time to display incorrectly on leaderboard
- Brilliance aura now displays proper mana regen it gives

## Farms

- Invisibility farm spell now works on other farms as stated in the tooltip
- Invisibility farm spell cast range increased to 400 from 300
- Invisibility farm mana regen reduced to 2.5 from 3.8
- Aura farm now has brilliance aura increases mana regen by 1.5%

### Sentry farm rework

- gold cost increased to 12 from 9
- build time increased to 6 from 3
- health increased to 200 from 40
- true sight increased to 1800 from 1200
- now has far sight ability
- initial mana reduced to 0
- max mana reduced to 150 from 300
- mana regen increased to 2 from 1.25

## Items

- Blizzard reduced AoE to 220 from 270
- Blizzard damage reduced to 20 from 24
- Blizzard waves increased to 6 from 5
- Blizzard cost reduced to 70/98 from 80/112
- Blizzard now creates an ice dragon to show who is casting the ability
- Brilliance and Endurance aura AoE increased to 2000 from 1600
- Endurance aura attack speed increased to 15% from 12%
- Bomber gold cost reduced to 50/70 from 60/84
- Removed crystal ball
- Removed invul potion

### New Item Sobi Mask

- buy sobi
- Increases mana regen by 2.5%
- Costs 40/56

## Abilities

- Wards now last 5 minutes instead of 4
- Wards now grant sheep 3 gold when killed
- Removed true sight from sheep

### New Ability Far Sight

- Reveals a targeted area
- AoE 1600, Cooldown 20 seconds, Duration 6 seconds, Mana cost 100, hotkey F

### New Ability Invulnerability

- Makes wolf invulnerable from spells and damage
- Duration 8 seconds, Cooldown 20 seconds, Mana Cost 125, hotkey E

## Player Commands

- -firstbloodcounter or -fbc (displays each players firstblood kills and firstblood deaths)
- -g all (splits your gold evenly among your allies as wolf and living allies as sheep)

## General

- Multi kills and firstblood no long work in switch
- Multi kills now increased to 12 seconds from 8
- Humiliation increased to 2.5 seconds from 1.25
- Added an invulnerable animation for switch
- Sheep now explode upon str pot and beam kills
- Sheep can now destroy dropped items in 3 hits

# 7.2.7

## Farms

- Aura Farm actually grants movement speed as it says it should increased to 2% from 0%
- Aura Farm attackspeed aura now applies to structures (frost farm)

## Abilities

- Invis removed

## Items

- Bomber impact delay decreased to .25 from .5
- Bomber damage increased to 59 from 50
- Bomber range increased to 1200 from 1000

### New Item Endurance Aura

- buy endur
- Cost 80/112
- Increases attack speed by 12% and movespeed by 2% in an AoE of 1600

### New Item Brilliance Aura

- buy bril
- Cost 70/98
- Increases mana regen in an AoE of 1600 by 2

### New Item Blizzard

- buy bliz
- cost 80/112
- 24 Damage Per wave with 5 waves AoE 270
- Cast Range 800
- Item will stop channeling if unit moves

### New Item Claws of Attack +240

- Requires 4 Claws of Attack +60
- Claws of Attack +240 Recipe which cost 140/180 gold
- To buy recipe type -buy r240

## General

- Added Multikills Double, Triple, Quadra, Penta, Legendary
- Mulikills count as kills within 8 seconds of each other
- Wolf max mana reduced to 500 from 640
- Attempted to remove the damn dollies again

# 7.2.6

## Fixes

- Hotkeys in shop for c9 and scythe
- Color code problem for invis potion in portable shop
- Mana from shop now costs the proper amount that is displayed
- Tooltip for Scythe now also says "Does not stack"
- Scythe now displays proper bounty upon killing farms
- Removed vision behind shops where it says "Gosu"

## Farms

- sentry farm gold cost reduced to 9 from 12
- sentry farm health reduced to 40 from 120
- sentry farm build time increased to 3 from 1
- Savings farm gold cost reduced to 26 from 30

## Items

- Increased beam cost to 70/98 from 60/84
- Replaced beam with invis in quick shop

### Invis Rework

- Invis is now an ability instead of an item
- Duration 40 seconds
- Mana Cost 125
- Hotkey E
- 3 minute cooldown

### Bomber Rework

- Has no unit collision
- Range increased from 900 to 1000
- AoE increased to 270 from 135
- Deals damage to structures
- Cost increased to 60/84 from 40/56

## General

- Many Changes to Terrain
- Reworked items in shops
- Changed wisp movespeed back to 200 from 220
- Removed dollies
- Added a message and sound for Firstblood
- Added a message and sound for Humiliation
- Humiliation is when your killed within 1.25 seconds of spawning (Spawn killed)

### New Host Command

- -fafk #
- Forces a player afk, can only be used before round starts
- Cannot unafk a player

# 7.2.5

## Items

- Beam cost reduced to 60/84 from 80/112
- Str pot cost reduced to 30/42 from 40/56
- Invis Pot cost reduced to 30/42 from 40/56
- Invul Pot cost reduced to 20/28 from 25/35
- Gem of Sight cost reduced to 50/70 from 65/91
- Mana Pot cost reduced to 35/49 from 40/56
- Gloves of haste attack speed increase to 30% from 23%
- Gloves now have proper tax when using -buy command changed from 100 to 98
- Golem now actually costs 70 from shop instead of 98
- New Item Mining Scythe
- Scythe grants 9 damage and doubles farm bounty 65/91

## Farms

- Strong Farm cost reduced to 16 from 20
- Sentry Farm cost reduced to 12 from 20
- Sentry Farm health reduced to 120 from 200
- Sentry Farm build time reduced to 1 from 4
- Sentry Farm true sight increased to 1200 from 700
- Invisible Farm cost reduced to 8 from 10
- Frost Farm cost reduced to 30 from 40
- Frost Farm build time reduced to 8 from 13
- Frost Farm projectile speed increased to 600 from 500
- Wide Farm gold cost reduced to 4 from 6
- Invisibility Farm gold cost reduced to 52 from 60
- Invisibility Farm build time reduced to 10 from 14
- Invisibility Farm mana initial amount increased from 100 to 150

## General

- Sheep True Sight increased to 750 from 700
- Sheep Spirit movespeed increased to 220 from 200
- Wolf base mana regen increased to .5 from .25
- Wolf initial mana increased to 350 from 300
