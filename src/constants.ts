export const ABILITY_TYPE_ID_ARMOR_AURA = FourCC("A00C");
export const ABILITY_TYPE_ID_BITE = FourCC("A02N");
export const ABILITY_TYPE_ID_BLUE_WARD = FourCC("A00M");
export const ABILITY_TYPE_ID_GIVE_ALLY_GOLD_WOLF = FourCC("A00V");
export const ABILITY_TYPE_ID_GOBLINS = FourCC("A02S");
export const ABILITY_TYPE_ID_HIDE_SHOW = FourCC("A00G");
export const ABILITY_TYPE_ID_MANA_AURA = FourCC("A015");
export const ABILITY_TYPE_ID_PRESIDENT = FourCC("A028");
export const ABILITY_TYPE_ID_REGEN_AURA = FourCC("A00B");
export const ABILITY_TYPE_ID_RESET_START_POSITION = FourCC("A02P");
export const ABILITY_TYPE_ID_SPEED_AURA = FourCC("S000");
export const ABILITY_TYPE_ID_TRANSLOCATE = FourCC("A029");
export const ABILITY_TYPE_ID_UPGRADED_ARMOR_AURA = FourCC("A01X");
export const ABILITY_TYPE_ID_UPGRADED_MANA_AURA = FourCC("A01L");
export const ABILITY_TYPE_ID_UPGRADED_REGEN_AURA = FourCC("A01Y");
export const ABILITY_TYPE_ID_UPGRADED_SPEED_AURA = FourCC("S003");
export const BUFF_TYPE_ID_FROST = FourCC("B005");
export const BUFF_TYPE_ID_PRESIDENT = FourCC("B00C");
export const ITEM_TYPE_ID_GOBLINS = FourCC("I012");
export const RESEARCH_TYPE_ID_UPGRADE_AURAS = FourCC("R000");
export const UNIT_TYPE_ID_AURA_FARM = FourCC("hlum");
export const UNIT_TYPE_ID_CLOCKWERK = FourCC("n00B");
export const UNIT_TYPE_ID_FACTORY = FourCC("h00O");
export const UNIT_TYPE_ID_FARM = FourCC("hhou");
export const UNIT_TYPE_ID_FEINTING_TOWER = FourCC("n00A");
export const UNIT_TYPE_ID_FROST_FARM = FourCC("h001");
export const UNIT_TYPE_ID_GHOST = FourCC("n00S");
export const UNIT_TYPE_ID_GOLEM = FourCC("ngst");
export const UNIT_TYPE_ID_GUIDE_FARM = FourCC("h00P");
export const UNIT_TYPE_ID_GYRO = FourCC("h00M");
export const UNIT_TYPE_ID_HAY_TRAP = FourCC("h00N");
export const UNIT_TYPE_ID_MONEY_FARM = FourCC("h005");
export const UNIT_TYPE_ID_SAPPER = FourCC("u000");
export const UNIT_TYPE_ID_START_POSITION = FourCC("h00K");
export const UNIT_TYPE_ID_STRONG_FARM = FourCC("h002");
export const UNIT_TYPE_ID_TRUE_SIGHT_CHECK = FourCC("n00G");
export const UNIT_TYPE_ID_UPGRADED_FARM = FourCC("hC07");
export const UNIT_TYPE_ID_WARD = FourCC("oeye");

export const TRANSFER_DISPLAY_NONE = 0;
export type DisplayType =
  | typeof TRANSFER_DISPLAY_NONE
  | typeof TRANSFER_DISPLAY_SOURCE
  | typeof TRANSFER_DISPLAY_INVOLVED
  | typeof TRANSFER_DISPLAY_TEAM;
