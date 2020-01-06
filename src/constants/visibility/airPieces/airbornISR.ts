// prettier-ignore
import { BOMBER_TYPE_ID, STEALTH_BOMBER_TYPE_ID, STEALTH_FIGHTER_TYPE_ID, AIR_REFUELING_SQUADRON_ID, TACTICAL_AIRLIFT_SQUADRON_TYPE_ID, AIRBORN_ISR_TYPE_ID, ARMY_INFANTRY_COMPANY_TYPE_ID, ARTILLERY_BATTERY_TYPE_ID, TANK_COMPANY_TYPE_ID, MARINE_INFANTRY_COMPANY_TYPE_ID, ATTACK_HELICOPTER_TYPE_ID, LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID, SAM_SITE_TYPE_ID, DESTROYER_TYPE_ID, A_C_CARRIER_TYPE_ID, SUBMARINE_TYPE_ID, TRANSPORT_TYPE_ID, MC_12_TYPE_ID, C_130_TYPE_ID, SOF_TEAM_TYPE_ID, RADAR_TYPE_ID, MISSILE_TYPE_ID } from '../../pieces/pieceId';

export const airbornISR: { [id: number]: number } = {};
airbornISR[BOMBER_TYPE_ID] = 2;
airbornISR[STEALTH_BOMBER_TYPE_ID] = 0;
airbornISR[STEALTH_FIGHTER_TYPE_ID] = 0;
airbornISR[AIR_REFUELING_SQUADRON_ID] = 2;
airbornISR[TACTICAL_AIRLIFT_SQUADRON_TYPE_ID] = 2;
airbornISR[AIRBORN_ISR_TYPE_ID] = 2;
airbornISR[ARMY_INFANTRY_COMPANY_TYPE_ID] = -1;
airbornISR[ARTILLERY_BATTERY_TYPE_ID] = -1;
airbornISR[TANK_COMPANY_TYPE_ID] = -1;
airbornISR[MARINE_INFANTRY_COMPANY_TYPE_ID] = -1;
airbornISR[ATTACK_HELICOPTER_TYPE_ID] = 2;
airbornISR[LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID] = -1;
airbornISR[SAM_SITE_TYPE_ID] = -1;
airbornISR[DESTROYER_TYPE_ID] = 0;
airbornISR[A_C_CARRIER_TYPE_ID] = 0;
airbornISR[SUBMARINE_TYPE_ID] = -1;
airbornISR[TRANSPORT_TYPE_ID] = 0;
airbornISR[MC_12_TYPE_ID] = 2;
airbornISR[C_130_TYPE_ID] = 2;
airbornISR[SOF_TEAM_TYPE_ID] = -1;
airbornISR[RADAR_TYPE_ID] = 0;
airbornISR[MISSILE_TYPE_ID] = -1;
