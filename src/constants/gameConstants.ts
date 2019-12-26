import { AIRBORN_ISR_TYPE_ID, AIR_REFUELING_SQUADRON_ID, ARMY_INFANTRY_COMPANY_TYPE_ID, ARTILLERY_BATTERY_TYPE_ID, ATTACK_HELICOPTER_TYPE_ID, A_C_CARRIER_TYPE_ID, BOMBER_TYPE_ID, C_130_TYPE_ID, DESTROYER_TYPE_ID, LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID, MARINE_INFANTRY_COMPANY_TYPE_ID, MC_12_TYPE_ID, MISSILE_TYPE_ID, RADAR_TYPE_ID, SAM_SITE_TYPE_ID, SOF_TEAM_TYPE_ID, STEALTH_BOMBER_TYPE_ID, STEALTH_FIGHTER_TYPE_ID, SUBMARINE_TYPE_ID, TACTICAL_AIRLIFT_SQUADRON_TYPE_ID, TANK_COMPANY_TYPE_ID, TRANSPORT_TYPE_ID } from '.';


// These pieces have actual 'fuel' that needs to be tracked...
export const TYPE_AIR_PIECES = [
    BOMBER_TYPE_ID,
    STEALTH_BOMBER_TYPE_ID,
    STEALTH_FIGHTER_TYPE_ID,
    AIR_REFUELING_SQUADRON_ID,
    TACTICAL_AIRLIFT_SQUADRON_TYPE_ID,
    AIRBORN_ISR_TYPE_ID,
    C_130_TYPE_ID,
    MC_12_TYPE_ID,
    ATTACK_HELICOPTER_TYPE_ID
];

export const TYPE_GROUND_PIECES = [
    ARMY_INFANTRY_COMPANY_TYPE_ID,
    ARTILLERY_BATTERY_TYPE_ID,
    TANK_COMPANY_TYPE_ID,
    MARINE_INFANTRY_COMPANY_TYPE_ID,
    LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID,
    SAM_SITE_TYPE_ID,
    SOF_TEAM_TYPE_ID
];

export const TYPE_SEA_PIECES = [DESTROYER_TYPE_ID, A_C_CARRIER_TYPE_ID, SUBMARINE_TYPE_ID, TRANSPORT_TYPE_ID];

export const CONTAINER_TYPES = [TACTICAL_AIRLIFT_SQUADRON_TYPE_ID, A_C_CARRIER_TYPE_ID, TRANSPORT_TYPE_ID, C_130_TYPE_ID];
// TODO: how to make what they can hold into a constant? (change what they can hold later...)

export const CAPTURE_TYPES = [
    ARMY_INFANTRY_COMPANY_TYPE_ID,
    ARTILLERY_BATTERY_TYPE_ID,
    TANK_COMPANY_TYPE_ID,
    MARINE_INFANTRY_COMPANY_TYPE_ID,
    LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID,
    SAM_SITE_TYPE_ID,
    SOF_TEAM_TYPE_ID
];

// prettier-ignore
export const TYPE_HIGH_LOW = {
    highPieces: [BOMBER_TYPE_ID, STEALTH_BOMBER_TYPE_ID, STEALTH_FIGHTER_TYPE_ID, AIR_REFUELING_SQUADRON_ID, TACTICAL_AIRLIFT_SQUADRON_TYPE_ID, AIRBORN_ISR_TYPE_ID, ATTACK_HELICOPTER_TYPE_ID, MC_12_TYPE_ID, C_130_TYPE_ID],
    lowPieces: [ARMY_INFANTRY_COMPANY_TYPE_ID, ARTILLERY_BATTERY_TYPE_ID, TANK_COMPANY_TYPE_ID, MARINE_INFANTRY_COMPANY_TYPE_ID, LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID, SAM_SITE_TYPE_ID, DESTROYER_TYPE_ID, TRANSPORT_TYPE_ID, A_C_CARRIER_TYPE_ID, SUBMARINE_TYPE_ID, SOF_TEAM_TYPE_ID, RADAR_TYPE_ID, MISSILE_TYPE_ID]
};