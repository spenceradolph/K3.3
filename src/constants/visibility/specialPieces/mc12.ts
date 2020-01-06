// prettier-ignore
import { BOMBER_TYPE_ID, STEALTH_BOMBER_TYPE_ID, STEALTH_FIGHTER_TYPE_ID, AIR_REFUELING_SQUADRON_ID, TACTICAL_AIRLIFT_SQUADRON_TYPE_ID, AIRBORN_ISR_TYPE_ID, ARMY_INFANTRY_COMPANY_TYPE_ID, ARTILLERY_BATTERY_TYPE_ID, TANK_COMPANY_TYPE_ID, MARINE_INFANTRY_COMPANY_TYPE_ID, ATTACK_HELICOPTER_TYPE_ID, LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID, SAM_SITE_TYPE_ID, DESTROYER_TYPE_ID, A_C_CARRIER_TYPE_ID, SUBMARINE_TYPE_ID, TRANSPORT_TYPE_ID, MC_12_TYPE_ID, C_130_TYPE_ID, SOF_TEAM_TYPE_ID, RADAR_TYPE_ID, MISSILE_TYPE_ID } from '../../pieces/pieceId';

export const mc12: { [id: number]: number } = {};
mc12[BOMBER_TYPE_ID] = -1;
mc12[STEALTH_BOMBER_TYPE_ID] = -1;
mc12[STEALTH_FIGHTER_TYPE_ID] = -1;
mc12[AIR_REFUELING_SQUADRON_ID] = -1;
mc12[TACTICAL_AIRLIFT_SQUADRON_TYPE_ID] = -1;
mc12[AIRBORN_ISR_TYPE_ID] = -1;
mc12[ARMY_INFANTRY_COMPANY_TYPE_ID] = 2;
mc12[ARTILLERY_BATTERY_TYPE_ID] = 2;
mc12[TANK_COMPANY_TYPE_ID] = 2;
mc12[MARINE_INFANTRY_COMPANY_TYPE_ID] = 2;
mc12[ATTACK_HELICOPTER_TYPE_ID] = 1;
mc12[LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID] = 2;
mc12[SAM_SITE_TYPE_ID] = 2;
mc12[DESTROYER_TYPE_ID] = 2;
mc12[A_C_CARRIER_TYPE_ID] = 2;
mc12[SUBMARINE_TYPE_ID] = -1;
mc12[TRANSPORT_TYPE_ID] = 2;
mc12[MC_12_TYPE_ID] = 1;
mc12[C_130_TYPE_ID] = 0;
mc12[SOF_TEAM_TYPE_ID] = 1;
mc12[RADAR_TYPE_ID] = 3;
mc12[MISSILE_TYPE_ID] = -1;
