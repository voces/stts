-- https://www.hiveworkshop.com/threads/hide-min-damage.327087/

do
  local realFunction = MarkGameStarted
  local timer, damageA, damageB, parentA, parentB, damageA2, damageB2, text, index
  local function update(sourceFrame, targetFrame)
    text = BlzFrameGetText(sourceFrame)
    index = string.find(text, " - ", 1, true)
    BlzFrameSetText(targetFrame, string.sub( text, index + 3))
  end
  local function Init()
    if not timer then timer = CreateTimer() end
    damageA = BlzGetFrameByName("InfoPanelIconValue", 0)
    damageB = BlzGetFrameByName("InfoPanelIconValue", 1)
    parentA = BlzGetFrameByName("SimpleInfoPanelIconDamage",0)
    parentB = BlzGetFrameByName("SimpleInfoPanelIconDamage",1)
    BlzCreateSimpleFrame("SimpleInfoPanelDestructableDetail", parentA, 11)
    damageA2 = BlzGetFrameByName("SimpleDestructableNameValue", 11)
    BlzFrameClearAllPoints(damageA2)
    BlzFrameSetPoint(damageA2, FRAMEPOINT_TOPLEFT, BlzGetFrameByName("InfoPanelIconLabel", 0), FRAMEPOINT_BOTTOMLEFT, 0.002625, -0.003)
    if SkinManagerGetLocalPath then BlzFrameSetFont(damageA2, SkinManagerGetLocalPath("InfoPanelTextFont"), 0.008, 0) else BlzFrameSetFont(damageA2, "Fonts/frizqt__.ttf", 0.008, 0) end

    BlzCreateSimpleFrame("SimpleInfoPanelDestructableDetail", parentB, 12)
    damageB2 = BlzGetFrameByName("SimpleDestructableNameValue", 12)
    BlzFrameSetFont(damageA, "", 0, 0)
    BlzFrameSetFont(damageB, "", 0, 0)
    BlzFrameClearAllPoints(damageB2)
    BlzFrameSetPoint(damageB2, FRAMEPOINT_TOPLEFT, BlzGetFrameByName("InfoPanelIconLabel", 1), FRAMEPOINT_BOTTOMLEFT, 0.002625, -0.003)
    if SkinManagerGetLocalPath then BlzFrameSetFont(damageB2, SkinManagerGetLocalPath("InfoPanelTextFont"), 0.008, 0) else BlzFrameSetFont(damageB2, "Fonts/frizqt__.ttf", 0.008, 0) end

    TimerStart(timer, 0.05, true, function()
      if BlzFrameIsVisible(parentA) then
        update(damageA, damageA2)
      end
      if BlzFrameIsVisible(parentB) then
        update(damageB, damageB2)
      end
    end)
  end
  function MarkGameStarted()
    realFunction()
    realFunction = nil

    Init()
    if FrameLoaderAdd then FrameLoaderAdd(Init) end
  end
end