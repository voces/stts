# 9.5.4

- Bug fixes
  - Player 13 is no longer a computer

# 9.5.3

- Feature changes
  - Christmas edition
  - Added -farmvision X
- Balance changes
  - Eye-Stick bounty increased from 3 to 4
  - Eye-Sticks pop on death, harming other wards

# 9.5.2

- Bug fixes
  - -u no longer desyncs

# 9.5.1

- Bug fixes
  - -u no longer impacts other players

# 9.5.0

- Feature changes
  - Fall edition
  - Mirror images now deal 25% damage to farms (0% to sheep)
  - Added Kaleidoscope
  - Added War Club
  - Added a third shop
  - Money Farms now generate #wolves/#sheep gold every 10 seconds
  - Renamed buy command for Crystal Ball from "ball" to "crystal"
  - Added -noautocontrol
  - -u reselects units after unstucking
- Bug fixes
  - Fixed quest icons
  - Fixed some items that still had Christmas models
  - Host Farm removed when using -captains and -versus during first draft and
    intermission
  - -disable no longer triggers -d
  - Fixed -u bug in switch when wolf kills sheep with quick shop open

# 9.4.3

- Bug fixes
  - Fixed terrain offset
  - Fixed Field of Suppression extended tooltip

# 9.4.2

- Feature changes
  - Summer edition

# 9.4.1

- Feature changes
  - Removed lights from Farm

# 9.4.0

- Feature changes
  - Christmas edition
    - Winter terrain
    - Decorated farms, trees, shops, and the pen
    - Added a snowman
  - Replaced Illusion Farm with Sentry Farm in build menu
  - Replaced Sentry Farm with Illusion Farm as a Farm upgrade
  - Changed Frost Farm hotkey from G to F
  - Changed Invisible Farm upgrade hotkey from X to G
  - Changed Give Allies Gold (sheep) hotkey from J to G
- Balance changes
  - Increased gold cost of Sentry Farm from 8 to 12
  - Increased build time of Sentry Farm from 3 to 4 seconds
  - Suppression Field now doubles damage against Strong Farm
- Bug fixes
  - Fixed -atimes

# 9.3.7

- Bug fixes
  - Fixed Katama's blunder

# 9.3.6

- Bug fixes
  - Fixed perfect only working when using rotate
  - Fixed -atimes conflicts with -reset and -afk

# 9.3.5

- Bug fixes
  - Fixed blue being a computer

# 9.3.4

- Feature changes
  - Improved perfect smart to avoid repeat sheep every 5 sc
  - -last (-l) now shows who the sheep were
  - Pubs no longer receive control from autocontrol or -call
  - Team sizes are now stable with pubs. 2v4+1p -> 3v4. 2v4+2p -> 3v5. 2v4+3p ->
    4v5
  - Pressing ESC restores Angle of Attack
  - Added -clear, which clears game messages
- Bug fixes
  - Fixed an issue where -last would be 0 after cancel
  - Fixed an issue where leader/loser could set in practice
  - Fixed an issue with pubs leaving still being drafted
  - Fixed an issue with perfect smart being enabled when using rotate
  - Fixed Host Farm not transfering when AFKing or leaving
  - Fixed showing LSS message in 1vN

# 9.3.3

- Feature changes
  - Leaderboard show/hide state preserved between rounds
  - Wolves no longer spawn with items
- Bug fixes
  - Fixed sheep count showing up as zero for some sheep on leaderboard
  - Fixed -teamresources not properly twinning "Z" hotkey
  - Fixed timer window/resource board/leaderboard positioning after wolf spawn
  - Fixed wisps (ownership/visibility) in switch

# 9.3.2

- Feature changes
  - Removed Sheep Locater from Shop (can still purchase with -buy sheep)
  - Added Suppression Field
  - Separated sheep gold given and spirit gold given stats
  - Added Give Allies Gold (J) to Sheep
  - Added -teamresources, which controls when the Team Resources multiboard is
    displayed (persisted)
  - Added -l shorthand for -last
  - Added -s shorthand for -sell
  - Removed intermission timer
- Bug fixes
  - Fixed -transfer not transfering Host Farm
  - Fixed -atimes reporting incorrect average for currently playing sheep
  - Fixed an issue where starting immediately after cancelling could result in
    duplicate sheep
  - Fixed -practice mode not defaulting to 2 hours
  - Fixed Esc hide/showing leaderboard when canceling allied farms

# 9.3.1

- Feature changes
  - Swapped hotkeys for Illusion Farm (now C) and Translocation Farm (now E)
  - Made slight adjustments to Translocation Farm jumping
- Bug fixes
  - Host Farm removed no matter how the round is started
  - Host Farm changes ownership with transfer
  - Fixed -times and -time collision
  - Can no longer share control with AFK players
  - Perfect smart better handles canceling

# 9.3.0

- Feature changes
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
  - Added Host Farm, allowing -smart, -start, -time, and -practice without
    typing
  - Buy command now matches the first possible item ("-b s" -> "-buy sheep")
  - Simplified Hills of Glory terrain
  - Using -pc without an argument shows your own partner count
  - Added w3mmd variables Sheep Gold Given and Wolf Gold Given
- Balance changes
  - Decreased Shepherd movement speed from 420 to 410
- Bug fixes
  - Fixed an issue with sheep not being able to see some allies (again)
  - Fixed pc not decrementing when canceling
  - Fixed w3mmd variable Times not being correctly emitted

# 9.2.5

- Bug fixes
  - Control is no longer revoked from allies if given before spawning (again)
  - Fixed -g lag spike

# 9.2.4

- Feature changes
  - A sound is played when you receive gold via g
  - Updated -g to deprioritize sending gold back and forth
- Bug fixes
  - Fixed sheep not receiving initial gold when using -gold

# 9.2.3

- Feature changes
  - Adjusted automatic round time to be more aggressive
- Bug fixes
  - Fixed an issue with sheep teams not forming correctly

# 9.2.2

- Feature changes
  - Rewrote -g to equalize who receives gold
  - Added host command -sc X Y, which sets player X's sheep count to Y
- Bug fixes
  - Fixed qd to not tracking properly
  - Fixed -pub flagging the wrong player as a pub
  - Fixed AFK players not receiving view
  - Fixed -g giving gold to pubs/leavers
  - Fixed an issue with view persisting
  - Removed Give Ally Gold from wolf in practice mode
  - Removed Share Control from sheep in practice and switch
  - Disabled autocontrol in practice and switch

# 9.2.1

- Bug fixes
  - Fixed autocontrol giving control to wolves

# 9.2.0

- Feature changes
  - Added -autocontrol, which grants allied sheep control upon spawn (persists
    between games)
  - Added "Give Ally Gold" ability to wolf, which is equivalent to -g
  - Change -smart default to half the number of players minus 1 (2v4, 3v5, 4v6)
  - Typing "g" sets top priority for -g
  - Made "-b" a shorthand for "-buy"
  - Added -qds, which shows everyone's qd
  - Added -pub #, which removes them from the drafting stage of -smart
  - Pressing "Esc" while waiting for your sheep to spawn snaps camera to spawn
    location
  - Time commands display stats immediately with no wait (except if player count
    > 12.
- Balance changes
  - Disabled Nuke recipe when only one sheep remains
  - Central trees in Revo terrain regrow 45 seconds after death
- Bug fixes
  - Changed defunct tiny.cc urls to dsc.gg urls
  - Made -g not case-sensitive
  - Deprioritized "-g" giving gold to spirits
  - Fixed -smart X setting everyone to AFK when X is too large
  - Changed auto cancel on empty team to cancel instead of win

# 9.1.2

- Feature changes
  - Further smoothed Hills of Glory
  - Opened up water areas for building
  - Adjusted doodads on Hills of Glory so pathing is clearer
  - Time fixes when returning from -practice
  - Map preview shows all terrain
  - Fixed -u bug for when sheep dies
  - Rounds are voided if someone leaves
  - Removed setup and set times from w3mmd
- Balance changes
  - Various Eye-Stick related changes
    - Increased Eye-Stick range against structures from 192 to 200
    - Increased Sheep health regeneration from 0 to 0.25
    - Sheep no longer flee when attacked
  - Decreased Upgraded Aura Farm gold cost from 40 to 30
- Bug fixes
  - Fixed distributing bounty to wolves when a sheep is killed
  - Fixed -g not prioritizing players who were golded
  - Removed rain around middle on Hills of Glory

# 9.1.1

- Feature changes
  - Smoothed mid top on Hills of Glory
  - Added -restart, which combines -cancel and -start
  - -g ignores messages that start with -
  - Simplified automatic unstuck logic
- Bug fixes
  - Fixed camera snapping to wrong place on Hills of Glory

# 9.1.0

- Feature changes
  - Added a second terrain, accessible via -terrain; unranked
  - Added -g command, which gives gold Intelligently
  - Sheep units are automatically deselected if they are an ally you can control
  - Default times simplified and set at initialization; 2v4 changed from 5
    minutes to 6 minutes
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
  - Increased Money Farm build time from 1 second to 10 seconds (still grants
    gold while building)
  - Increased Rock Golem damage base from 39 to 44
- Bug fixes
  - Fixed -u bug
  - Control is no longer revoked from allies if given before spawning
  - Zoom commands only trigger if the command is the first word

# Changelog 9.0.9

- Bug fixes
  - Giving control to specific players via -c no longer changes zoom
  - Wisp zoom properly loads
- w3mmd changes
  - round events are emitted as they end
  - "end" event added
  - Various spec fixes
    - Skip emitting values for computer
    - Cap string length limits for setup

# Changelog 9.0.8

- Bug fixes
  - Reverted -afk changes; can no longer go afk mid-round
  - Fixed -gs and -gsa giving gold to AFK players
  - If an AFK person does -call, other players doing -call no longer gives the
    AFK player control
- Handicap lowerbound changed to 23
- Players can now set their own handicaps if it's 100 or less

# Changelog 9.0.7

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
- Bug fixes
  - Fixed -gold related bugs
  - Default round times fixed
  - Can no longer give 0 gold with -# #
  - Coming back from AFK only increases SC if a round has ended
- Fixed ambiguity in reporting rounds in w3mmd by using events with more detail
- Added -handicap X Y command, which allows the host to set player X's handicap
  to Y%
- Added total farms command (-tf), which displays the total number of farms
  everyone has built
