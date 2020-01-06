// prettier-ignore
import { BOMBER_TYPE_ID, STEALTH_BOMBER_TYPE_ID, STEALTH_FIGHTER_TYPE_ID, AIR_REFUELING_SQUADRON_ID, TACTICAL_AIRLIFT_SQUADRON_TYPE_ID, AIRBORN_ISR_TYPE_ID, ARMY_INFANTRY_COMPANY_TYPE_ID, ARTILLERY_BATTERY_TYPE_ID, TANK_COMPANY_TYPE_ID, MARINE_INFANTRY_COMPANY_TYPE_ID, ATTACK_HELICOPTER_TYPE_ID, LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID, SAM_SITE_TYPE_ID, DESTROYER_TYPE_ID, A_C_CARRIER_TYPE_ID, SUBMARINE_TYPE_ID, TRANSPORT_TYPE_ID, MC_12_TYPE_ID, C_130_TYPE_ID, SOF_TEAM_TYPE_ID, RADAR_TYPE_ID, MISSILE_TYPE_ID } from '../../pieces/pieceId';

// [0, -1, -1, 0, 1, 0, 0, -1, -1, -1, 0, -1, -1, 0, 0, -1, 0, 0, 1, -1, 0, -1], // tanker
export const airRefuelSquad: { [id: number]: number } = {};
airRefuelSquad[BOMBER_TYPE_ID] = 0;
airRefuelSquad[STEALTH_BOMBER_TYPE_ID] = -1;
airRefuelSquad[STEALTH_FIGHTER_TYPE_ID] = -1;
airRefuelSquad[AIR_REFUELING_SQUADRON_ID] = 0;
airRefuelSquad[TACTICAL_AIRLIFT_SQUADRON_TYPE_ID] = 1;
airRefuelSquad[AIRBORN_ISR_TYPE_ID] = 0;
airRefuelSquad[ARMY_INFANTRY_COMPANY_TYPE_ID] = 0;
airRefuelSquad[ARTILLERY_BATTERY_TYPE_ID] = -1;
airRefuelSquad[TANK_COMPANY_TYPE_ID] = -1;
airRefuelSquad[MARINE_INFANTRY_COMPANY_TYPE_ID] = -1;
airRefuelSquad[ATTACK_HELICOPTER_TYPE_ID] = 0;
airRefuelSquad[LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID] = -1;
airRefuelSquad[SAM_SITE_TYPE_ID] = -1;
airRefuelSquad[DESTROYER_TYPE_ID] = 0;
airRefuelSquad[A_C_CARRIER_TYPE_ID] = 0;
airRefuelSquad[SUBMARINE_TYPE_ID] = -1;
airRefuelSquad[TRANSPORT_TYPE_ID] = 0;
airRefuelSquad[MC_12_TYPE_ID] = 0;
airRefuelSquad[C_130_TYPE_ID] = 1;
airRefuelSquad[SOF_TEAM_TYPE_ID] = -1;
airRefuelSquad[RADAR_TYPE_ID] = 0;
airRefuelSquad[MISSILE_TYPE_ID] = -1;
