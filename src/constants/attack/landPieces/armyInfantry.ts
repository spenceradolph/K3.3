import { UNABLE_TO_HIT } from '../../globals';
// prettier-ignore
import { AIRBORN_ISR_TYPE_ID, AIR_REFUELING_SQUADRON_ID, ARMY_INFANTRY_COMPANY_TYPE_ID, ARTILLERY_BATTERY_TYPE_ID, ATTACK_HELICOPTER_TYPE_ID, A_C_CARRIER_TYPE_ID, BOMBER_TYPE_ID, C_130_TYPE_ID, DESTROYER_TYPE_ID, LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID, MARINE_INFANTRY_COMPANY_TYPE_ID, MC_12_TYPE_ID, MISSILE_TYPE_ID, RADAR_TYPE_ID, SAM_SITE_TYPE_ID, SOF_TEAM_TYPE_ID, STEALTH_BOMBER_TYPE_ID, STEALTH_FIGHTER_TYPE_ID, SUBMARINE_TYPE_ID, TACTICAL_AIRLIFT_SQUADRON_TYPE_ID, TANK_COMPANY_TYPE_ID, TRANSPORT_TYPE_ID } from '../../pieces/pieceId';

export const armyInfantry: { [id: number]: number } = {};
armyInfantry[BOMBER_TYPE_ID] = UNABLE_TO_HIT;
armyInfantry[STEALTH_BOMBER_TYPE_ID] = UNABLE_TO_HIT;
armyInfantry[STEALTH_FIGHTER_TYPE_ID] = UNABLE_TO_HIT;
armyInfantry[AIR_REFUELING_SQUADRON_ID] = UNABLE_TO_HIT;
armyInfantry[TACTICAL_AIRLIFT_SQUADRON_TYPE_ID] = UNABLE_TO_HIT;
armyInfantry[AIRBORN_ISR_TYPE_ID] = UNABLE_TO_HIT;
armyInfantry[ARMY_INFANTRY_COMPANY_TYPE_ID] = 7;
armyInfantry[ARTILLERY_BATTERY_TYPE_ID] = 6;
armyInfantry[TANK_COMPANY_TYPE_ID] = 10;
armyInfantry[MARINE_INFANTRY_COMPANY_TYPE_ID] = 6;
armyInfantry[ATTACK_HELICOPTER_TYPE_ID] = 8;
armyInfantry[LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID] = 8;
armyInfantry[SAM_SITE_TYPE_ID] = 4;
armyInfantry[DESTROYER_TYPE_ID] = UNABLE_TO_HIT;
armyInfantry[A_C_CARRIER_TYPE_ID] = UNABLE_TO_HIT;
armyInfantry[SUBMARINE_TYPE_ID] = UNABLE_TO_HIT;
armyInfantry[TRANSPORT_TYPE_ID] = UNABLE_TO_HIT;
armyInfantry[MC_12_TYPE_ID] = 12;
armyInfantry[C_130_TYPE_ID] = 12;
armyInfantry[SOF_TEAM_TYPE_ID] = 5;
armyInfantry[RADAR_TYPE_ID] = 8;
armyInfantry[MISSILE_TYPE_ID] = UNABLE_TO_HIT;
