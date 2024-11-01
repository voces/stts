# TODO

- Mana Bomb
- Selection bug
- -ff
- Team gold pools
- AFK check
- -ap attackpercent
- Crown for leader in UI

# 24v

## Feature changes

- Players can no longer adjust their own handicap
- Leader/loser is tracked per sheep vs wolf configuration
- Added -leaders which shows leader/loser for all configurations (is not -reset)
- Smart adjustments
  - Adjusted hyper parameters, hopefully reducing repeat sheep rounds
  - -smart X is now inclusive of pubs, like the UI
  - -smart X updates UI (most of the time)
- Handicaps are restored to 100% when a president round ends

## Balance changes

- Skeleton Warrior changes
  - Reduced range from 90 to 32
  - Reduced range motion buffer from 250 to 192
  - Reduced health from 180 to 40
- Skeleton Archer changes
  - Reduced damage from 12 to 9
  - Reduced health from 180 to 40
- Goblin Support changes
  - Reduced Clockwerk Goblins per wave from 6 to 5
  - Increased cost from 350 (390) to 400 (440)
  - Increased minimum Gyrocopter speed from 500 to 700
  - Can be directionally aimed relative to caster's position
- Increased cast range of Hay Trap from 250 to 400

## Bug fixes

- Fixed smart not reflecting manipulations of sheep counts
- Fixed an error that occurred when buying an item from the Quick Shop right as the round ends
- Fixed UI not updating after using -handicap
- Fixed UI not updating after using -sc X
- Fixed shops being removed after using -mass
- Fixed runaway crash with Feinting Tower
- UI initializes now 0.25 seconds in instead of 0.01 seconds to maybe help with desyncs
- Changed auto selection logic to use to clear selections first to try to prevent selection bugs
- An AFK player leaving in middle of a round no longer voids the round
- Death Order stat voided if someone leaves

# 24u

## Feature changes

- More spooky
- Can no longer control allied wisps
- Free spawn enabled by default
- Added active player count to intermission UI
- Updating sheep in UI updates stats
- Added -cls alias for -clear

## Balance changes

- Goblin Support changes
  - Farm bounties retained by Goblins
  - Up to 100 gold refunded depending on surviving factories
- Scepter of Mastery changes
  - Increased cooldown from 1 second to 1.5 seconds
  - Increased mana cost from 100 to 150
  - Decreased cast range from 750 to 600

## Bug fixes

- Fixed -do
- Fixed a bug where mastery was cancelled if the shepherd had less than 225 mana
- Fixed True Sight not showing illusions from Feinting Tower

# 24t

## Feature changes

- Spooky theme
- Increased explored paths for smart from 100 to 500

## Bug fixes

- Reverted attempt to clear removed fogged structures in order to fix pathing mishaps

# 24s

## Bug fixes

- Fixed a desync introduced in 24q related to briefly disabling buttons
- Fixed a desync introduced in 24r related to clashing Intermission and Options

# 24r

## Bug fixes

- Fixed a bug in smart not being smart and reduced explored paths from 1000 to 100 and max depth from 15 to 12
- Fixed Intermission dialogs showing on top of Options menu

# 24q

## Feature changes

- Added a 0.5 second wait between showing intermission frames and enabling buttons
- -do shows two digits instead of up to one
- Versus button changes to Continue button in intermission after cancel; added red for "incorrect" buttons
- Red end buttons are a little softer if sc is over by less than desired sheep (e.g., 1 0 0 0 0 0 is not red anymore)
- Rewrote smart

## Bug fixes

- Fixed "Automatically share control" checkbox not initializing correctly
- Fixed a Guide Farm on Glory Hills terrain
- Fixed structures remaining in the fog
- Fixed Money Farm gold description cutting off after completion
- Fixed partial -do stats remaining after a -cancel
- Fixed an issue with time changing to 1 minute with versus
- Fixed a desync when editing SC or HCP
- Fixed an error when trying to buy an item right as the round ends
- Fixed trans farm not subtracting player gold

# 24p

## Feature changes

- Increased width of game messages outside of intermission
- Auto cancel changes
  - Increased threshold for canceling from 3 to 5 due to increase of automatic orders
  - Auto cancel no longer AFKs offending players and rather just prints the names of the offenders
- Added tooltips to various settings
- Gold UX changes
  - Automatic golding on death now visible
  - Gold messages now only shown to receivers and allies if transferred amount is `teamSize + 3` or greater
  - Gold chime now occurs when crossing 112 gold or transferred amount is 25 or greater
- Added farm coloring based on handicap for regular Farms, Upgraded Farms, and Strong Farms
- Removed -perfect; smart will always try perfect in 2v4 and fallback if SC is unbalanced
- Automatic leader/loser on -last only shown after round 3
- Added Guide Farms, configurable in Preferences or with -guidefarms

## Balance changes

- Decreased gold cost of Suppression Field from 100 (140) to 90 (126)
- Decreased gold cost of Claws of Attack +16 from 38 (53) to 35 (49)

## Bug fixes

- Only host can confirm end/cancel
- Removed numbers from player name in intermission
- Fixed Suppression Field's Quick Buy duration description
- Fixed farm count decreasing by 2 when using Destroy
- Fixed practice commands being enabled before first round begins

# 24o

## Balance changes

- Decreased Pocket Factory's hits to kill from 5 to 3

## Bug fixes

- Fixed zoom, autocontrol, and noautocontrol being shared between players
- Fixed checkbox/radio options not initializing with respect to individual player preferences
- Fixed Translocation Farm's secondary translations being able to place units in unreachable areas

# 24n

## Feature changes

- UX
  - Expanded Quick Shop to have 11 items
  - Added Intermission screen
  - Added Sheep Tag Preferences screen
  - Removed Save Game, Load Game
  - Warn on exit with uneven SC
  - Added -do
  - Sheep income rate displayed in Upkeep
  - Cleaned up unit damage display to only render a single value
  - Customized Help and Tips
  - Added some sounds
  - Removed commands from Quests (now available in Help)
- When a sheep dies, their gold is automatically distributed to allies
  - In president mode, all gold goes to the president
- Goblin Support changes
  - Adjusted movement of Gyrocopter: faster, straighter, with deceleration and acceleration at drop point
  - Decreased Pocket Factory build from 4 seconds to 3 seconds
  - Decreased Pocket Factory's hits to kill from 7 to 5
  - Changed Pocket Factory to spawn waves of Clockwerk Goblins over a shorter period
  - Increased partial damage AoE of Clockwerk Goblins from 200 to 300
- Added Shadowsight to Sentry Farm
- Kaleidoscope now makes illusions permanent
- -view, -switch, -vamp, and -control are persisted between rounds
- -freespawn now works in middle of rounds
- Updated gold and food copy to reflect recent proximity based changes.

## Balance changes

- Hay Trap now has an animation in which it is tossed
- Decreased gold cost of Potion of Strength from 30 (42) to 25 (35)
- Decreased gold cost of Magic Farm and Tiny Magic Farm from 52 to 40
- Scepter of Mastery changes
  - Increased cast time from 0.5 seconds to 1 second
  - Increased mana cost from 75 to 100 and is charged up front
  - Takeover special effect begins immediately instead of after cast succeeds
  - Decreased cooldown from 20 seconds to 5 seconds
- Sentry Ward changes
  - Wards can no longer attack sheep
  - Increased mana cost from 50 to 75
  - Increased damage from 10 to 15
  - Wards reveal illusions from Feinting Tower
- Increased Second Wind debuff occurring 1250 away from nearest sheep from 1000
- Decreased mana cost of Far Sight on Sentry Farm from 100 to 75

## Bug fixes

- Fixed multiboard displaying incorrect team counts
- Fixed -START printing an error
- Fixed a wisp spawning at end of vamp
- Fixed automatic last round time showing up after vamp
- Fixed -afk/-fafk showing messages when trying to AFK in middle of a round
- Fixed autocancel not automatically marking AFK sheep as AFK

# 24m

## Feature changes

- Wolves can no longer use -buy to buy duplicate auras
- Added error sounds when commands error
- Added game settings to "Next" display
- Removed Give Ally Gold from wolf in switch
- Adjusted Experimental terrain
- Updated Quests to fit all commands
- Updated item descriptions to be more consistent

## Balance changes

- Decreased Hay Trap's armor from 130 to 80, making it possible to destroy in two consecutive attacks
- Decreased gold cost of Goblin Support from 400 to 350

## Bug fixes

- Fixed -g sometimes doing things incorrectly
- Feinting Tower now clones president crown
- Fixed leftover debug command
- Removed Share Control and Give Allies Gold and added Locate Allies when sheep after kill in switch
- Fixed Discord link in map description

# 24l

## Feature changes

- President mode will always grant president to non-pubs first
- Added -rounds
- Extended automatic last from 10 seconds to 18 seconds
- Updated some command outputs

## Balance changes

- Decreased cooldown on Scepter of Mastery from 25 seconds to 20 seconds

## Bug fixes

- Fixed Destroy (D) not selecting primary unit
- Fixed a bug in which wolves could get extra kill gold if they have a Feinting Tower
- Fixed location of scorched barn on Compact terrain
- Cleaned up -rtimes to not include trailing "|"

# 24k

## Feature changes

- Hay Stack rework
  - Removed Slow Aura
  - Blocks pathing
  - Increased gold cost from 20/28 to 30/42
  - Can be killed in one hit by shepherds
  - Added death animation
- Cancelling a farm in construction selects your primary unit if your selection is left empty
- Updated Destroy (D) to only select your primary unit if your selection is left empty
- Added Compact terrain
- -terrain now accepts an optional argument, either the index or name of the terrain
- Adjusted Experimental Terrain
- Added -handicap pub X
- Default pub handicap increased from 100% to 150%
- -buy will fallback to main unit if no selected unit has an open inventory slot
- Adjusted position of some farms in build menu so hotkeys in grid mode and classic are more aligned

## Balance changes

- Feinting Tower adjustments
  - Increased area of effect from 1000 to 1200
  - Decreased cost from 30 to 20
- Increased Kaleidoscope max stacks from 9 to 10, the same as other charges

## Bug fixes

- Fixed a bug in which selecting a shop gives it temporary gold priority
- Fixed a bug in which sheep locations were pinged on the minimap if you receive Second Wind
- Fixed ELO team strings
- Removed debug messages when using -pub
- Fixed a few overlapping hotkeys in grid mode

# 24j

## Feature changes

- Using Destroy (D) on a farm selects your primary unit
- Unflagging someone as a pub adjusts their counters (sc & gc)
- -position available outside of a round in additional to in -practice
- Added Reset start position ability to Start position
- Changed intro message for non-hosts

## Bug fixes

- Fixed Hard Farms being stackable
- Fixed spawn location for Player 21 (Coal) on experimental terrain
- Fixed -times
- Fixed -atimes breaking due to unemitable rounds; rounds in which someone leaves does not count towards atimes
- Fixed Discord links

# 24i

## Feature changes

- Added Bloodlust to Magic Farm
- Added Critter Blessing

## Balance changes

- Reduced Hay Trap's slow debuff from -50% movement speed to -20% movement speed
- Increased Hay Trap's build time from instant to 4 seconds
- Added some jumps to tiny terrain
- Magic Farm changes
  - Reduced base mana regeneration from 3.5/s to 2/s
  - Reduced mana maximum from 300 to 100
  - Reduced mana cost of Invisibility from 50 to 30
- Sentry Farm changes
  - Increased Far Sight area of effect from 1200 to 3600
  - Increased Far Sight duration from 5 seconds to 15 seconds

## Bug fixes

- Practice turns president mode off
- Fixed Feinting Farm's feints coloration
- Fixed average farm count before wolves to handle -cancel

# 24h

## Feature changes

- Handicap impacts passive wolf income

## Balance changes

- Increased Second Wind minimum distance to sheep application from 1000 to 1500

## Bug fixes

- Fixed Feinting Farm illusions being visible to non-allies
- Fixed wisp enclosures on new terrains
- Fixed -smart 1 not working with pubs

# 24g

## Gameplay changes

- Added Hay Stack
- Added Feinting Tower
- Added Goblin Support
- Added new terrains
- Wolves gain Second Wind after sheep kill if far from other sheep

## Balance changes

- Increased gold bounty on Strong Farm from 3 to 4

## Feature changes

- -atime is now per setup (e.g., 2v4) rather than global and ignores -reset
- -freespawn now remembers your previous spawn
- -sc changes
  - Host can now do -sc X to set all players' sheep count to X
  - Players can now do -sc X to set their own sheep count to X (restricted)
- -pub now accepts variable arguments
- Added -testmass
- Updated menu position of farms and upgrades to match keyboard layout
- Changed critter from a rabbit to a chicken

## Bug fixes

- Fixed shop price of Suppression Field
- Fixed "g" sometimes giving gold to spirits
- Fixed observer leaving voiding round
- Fixed rounds counting for ELO if -income set
- Fixed disease cloud effects appearing on enemy unit hits
- Fixed -SMART erroring

# 24f

## Feature changes

- In switch, if both sheep gold and wolf gold are 0, gold is carried between switches

## Bug fixes

- Fixed wolves not receiving passive income
- Fixed AFK players sometimes being added to wolves with -pick X

## Source changes

- Refactored AFK and merged in fAFK

# 24e

## Feature changes

- Added -income X Y Z, which scales sheep, wolf, and money farm income (Y and Z default to X)

## Balance changes

- Adjusted Money Farm & Sheep income
  - Both now generate income based on their proximity to the pen. The multiple scales from 0.25x on the edge of the map
    up to 1.5x on the edge of the pen. Jumps to 2.5x if inside the pen.
  - The Money Farm's name is set to "Money Farm (X)" where "X" is how much gold it generates a minute.

## Bug fixes

- Kaleidoscope no longer outputs debugging info
- Fixed switch timers briefly appearing incorrect during spawn
- Fixed Scepter of Mastery not displaying a special effect or playing an animation
- Fixed Upgraded Aura Farm (Mana) being applied to enemies

# 24d

## Feature chagnes

- Valentine's ended
- Added Disease Cloud
- Added Orb of Fire
- Consumable items now stack up to 10 times
- Golems now drop items on expiration
- Added -o alias for -owner (practice)
  - -owner now works with all non-sheep/wisp units
  - -owner sets selection

## Balance changes

- Reduced gold cost of Illusion Farm from 20 to 12
- Money Farms now generate (#wolves-0.75)/(#sheep-0.75) gold every 10 seconds
  - 1v3: 18g/m => 54g/m (+200%)
  - 2v4: 12g/m => 15.6g/m (+30%)
  - 3v5: 10g/m => 11.3g/m (+13%)
  - 4v6: 9g/m => 9.7g/m (+8%)
  - 5v5: no change (6g/m)
- Sentry Farm
  - Reduced initial mana 110 to 90
  - Reduced Far Sight mana cost from 125 to 100
- Scepter of Mastery
  - Reduced mana cost from 100 to 75
  - Reduced cooldown from 30 seconds to 25 seconds
- Increased War Club hits from 15 to 100
- Crystal Ball
  - Removed cooldown
  - Added 40 mana cost
  - Increased area of effect from 1800 to 2400

## Bug fixes

- Fixed players without a zoom file desyncing
- Fixed gold distribution when a sheep leaves

# 24c

## Feature changes

- Summer terrain
  - Valentine theme
    - Lots of flowers and rose petals
    - "Loves Bite" is a buff sheep and wolves get from attacking allies: +10% movement speed, +25% attack speed, +50%
      damage
    - "Rejected Embrace" is a debuff sheep and wolves get from attacking each other: -10% movement speed, -25% attack
      speed, -50% damage
- As wolf, "g" only grants priority if near mid or shops

## Balance changes

- Scepter of Mastery
  - Reduced mana cost from 125 to 100
  - Reduced casting time from 1 second to 0.5 seconds

## Bug fixes

- Fixed -smart

# 24b

## Feature changes

- Selecting any allied unit (except wisp) sets temporary priority for "g" for selecting player
- Delayed spawn of Host Farm by 0.25 seconds
- Truncated out the numeric portion of player tags (verit#11278 => verit)

## Balance changes

- Sheep gain gold for killing enemy structures

## Bug fixes

- Fixed gold bounty text not showing
- Fixed -g all
- Fixed error copy on -buy

# 24a

## Feature changes

- Added -buy scepter alias for -buy mastery

## Bug fixes

- Fixed -sell not work on units with full inventories
- Fixed auras being granted to enemies
- Fixed frost farms not being able to attack structures or sheep
- Fixed "undeclared global" messages
- Fixed -gold X max (max is 9,999,999)

# 24

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
